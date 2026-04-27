#!/bin/bash
# Truth or Dare — Local Server Launcher
# Run this script to start the app on http://localhost:8080

PORT=8080
DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "  🎮 Truth or Dare — Starting local server..."
echo "  📂 Serving: $DIR"
echo "  🌐 Open this URL: http://localhost:$PORT"
echo ""
echo "  Tekan Ctrl+C untuk stop."
echo ""

# Open browser automatically
sleep 0.5 && open "http://localhost:$PORT" &

# Start server
python3 -m http.server $PORT --directory "$DIR"
