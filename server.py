import os
import json
import urllib.request
import urllib.error
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = int(os.environ.get("PORT", 8090))
DIR = os.path.dirname(os.path.abspath(__file__))

# Read .env file manually so we don't need python-dotenv library
try:
    with open(os.path.join(DIR, ".env"), "r") as f:
        for line in f:
            if "=" in line:
                key, val = line.strip().split("=", 1)
                os.environ[key] = val
except FileNotFoundError:
    pass

API_KEY = os.environ.get("GEMINI_API_KEY", "")

class ProxyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def do_POST(self):
        if self.path == '/api/gemini':
            # Receive content from frontend
            content_length = int(self.headers.get('Content-Length', 0))
            if content_length > 0:
                body = self.rfile.read(content_length)
            else:
                body = b"{}"

            # Prepare request to Google API
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key={API_KEY}"
            
            req = urllib.request.Request(
                url,
                data=body,
                headers={'Content-Type': 'application/json'},
                method='POST'
            )
            
            try:
                with urllib.request.urlopen(req, timeout=20) as response:
                    res_body = response.read()
                    
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    # Hapus strict CORS agar berjalan mulus dari cloudflare
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    
                    self.wfile.write(res_body)
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(e.read())
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f"{{\"error\": \"{str(e)}\"}}".encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            
    # Add OPTIONS method handle for CORS preflight
    def do_OPTIONS(self):
        if self.path == '/api/gemini':
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            self.end_headers()
        else:
            super().do_OPTIONS()

if __name__ == '__main__':
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, ProxyHTTPRequestHandler)
    print(f"Server is running on port {PORT} with Gemini proxy...")
    httpd.serve_forever()
