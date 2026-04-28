const QUESTION_BANK = {
  Umum: {
    truth: [
      "Kapan terakhir kali kamu berbohong, dan tentang apa?",
      "Apa rahasia terbesar yang tidak pernah kamu ceritakan ke orang tuamu?",
      "Hal paling memalukan apa yang pernah kamu lakukan di depan umum?",
      "Jika ada yang memberi kamu 10 juta untuk tidak berbicara dengan sahabatmu selama sebulan, maukah?",
      "Pesan apa yang terakhir kali kamu cari di HP-mu?",
      "Siapa orang terakhir yang kamu stalk di media sosial?",
      "Apa hal paling kekanak-kanakan yang masih sering kamu lakukan?",
      "Pernahkah kamu menyalahkan orang lain atas kesalahan yang sebenarnya kamu buat?",
      "Apa ketakutan paling konyol yang kamu miliki?",
      "Menurutmu, siapa di ruangan ini yang paling mungkin sukses duluan?",
    ],
    dare: [
      "Telepon orang tuamu sekarang dan katakan kamu ingin menikah besok.",
      "Biarkan orang di sebelah kananmu melihat galeri HP-mu selama 1 menit.",
      "Tirukan gaya bicara salah satu orang di ruangan ini sampai giliranmu berikutnya.",
      "Push-up 15 kali sekarang juga.",
      "Nyanyikan lagu anak-anak dengan nada marah (contoh: Balonku, Bintang Kecil).",
      "Berbicara dengan aksen bule selama 3 putaran ke depan.",
      "Post foto jelek sendiri ke Instagram Story selama 1 jam.",
      "Lakukan tarian TikTok paling cringe yang kamu tahu selama 30 detik.",
      "Tatap mata orang di depanmu selama 1 menit penuh tanpa tertawa.",
      "Ganti foto profil WhatsApp dengan foto paling aneh di galerimu sampai besok.",
    ],
  },
  Romantis: {
    truth: [
      "Siapa di ruangan ini yang paling kamu mau PDKT dengannya?",
      "Sifat apa dari pasanganmu atau crush-mu yang paling kamu sukai?",
      "Apa momen paling romantis yang pernah kamu alami?",
      "Pernahkah kamu jatuh cinta pada teman sendiri?",
      "Apa hal terlalu manja yang diam-diam ingin kamu minta ke pasanganmu?",
      "Ceritakan pertemuan pertama dengan crush-mu yang paling berkesan!",
      "Pernah mengirim pesan cinta ke orang yang salah? Ceritakan!",
      "Siapa mantan yang masih sesekali kamu pikirkan?",
      "Kalau harus memilih, jujuranmu yang pertama kamu sukai atau yang terbaik untukmu?",
      "Apa kalimat gombal paling cringe yang pernah kamu ucapkan atau terima?",
    ],
    dare: [
      "Kirim pesan 'Aku kangen kamu' ke mantan tanpa penjelasan.",
      "Nyatakan perasaan kepada siapa saja di ruangan ini seolah-olah itu serius.",
      "Tulis surat cinta 30 detik untuk orang di sebelah kananmu dan baca dengan lantang.",
      "Telepon satu kontakmu dan puji dia setulus mungkin selama 1 menit.",
      "Cari lagu paling romantis di Spotify dan nyanyikan dengan penuh perasaan di depan semua.",
      "Biarkan orang di sebelahmu memilih satu foto di galerimu untuk dijadikan wallpaper selama 1 hari.",
      "Berikan kode Wi-Fi kepada orang yang kamu sukai diam-diam.",
      "Rekam video ucapan selamat ulang tahun untuk mantanmu dan simpan di galeri.",
    ],
  },
  Ekstrem: {
    truth: [
      "Hal ilegal apa yang paling dekat-dekat belum pernah kamu lakukan?",
      "Apa kebohongan terbesar yang berhasil kamu percayakan ke banyak orang?",
      "Pernahkah kamu mengambil sesuatu milik orang lain tanpa izin?",
      "Sebutkan 3 hal jelek tentang orang yang ada di ruangan ini (jujur!).",
      "Pernahkah kamu sengaja merusak sesuatu milik orang lain dan pura-pura tidak tahu?",
      "Apa hal yang paling sering kamu bohongi ke orang tuamu?",
      "Pernahkah kamu berpura-pura sakit untuk menghindari sesuatu yang penting?",
      "Apa hal paling gila yang pernah kamu lakukan karena tekanan teman?",
    ],
    dare: [
      "Minta uang 5 ribu ke orang asing yang pertama kamu lihat.",
      "Pejamkan mata, biarkan temanmu menaruh sesuatu dari kulkas di mulutmu — harus ditelan!",
      "Makan satu sendok sambal tanpa minum selama 2 menit.",
      "Ganti bio Instagram-mu menjadi sesuatu yang memalukan selama 1 jam.",
      "Posting status yang didikte oleh orang di sebelah kananmu.",
      "Telepon orang secara acak dari kontakmu dan katakan 'Kamu lolos interview, selamat!' lalu tutup.",
      "Biarkan semua orang di ruangan ini membaca notifikasi terbaru di HP-mu.",
      "Berdiri di luar ruangan dan teriak 'Aku minta maaf!' sekeras mungkin 3 kali.",
    ],
  },
  Pertemanan: {
    truth: [
      "Siapa teman yang paling sering kamu ceritakan kehidupan pribadimu?",
      "Pernahkah kamu diam-diam iri kepada salah satu temanmu?",
      "Siapa teman yang paling sering kamu curhat tentang teman lainnya?",
      "Apa hal yang tidak akan pernah kamu maafkan dari seorang teman?",
      "Pernahkah kamu pura-pura mendukung keputusan temanmu padahal kamu tidak setuju?",
      "Siapa teman yang paling mungkin kamu hubungi pertama kali jika dalam masalah besar?",
      "Apa hal lucu atau memalukan yang hanya kamu tahu tentang salah satu teman di sini?",
      "Apa yang paling tidak kamu suka dari grupmu, tapi tidak pernah kamu katakan?",
    ],
    dare: [
      "Perlihatkan chat terpanjang yang ada di HP-mu ke semua orang.",
      "Minta semua orang di ruangan menilai kamu dari 1-10, dan kamu tidak boleh senyum.",
      "Berbicara dengan cara yang sangat formal kepada semua orang selama 3 putaran.",
      "Biarkan teman terbaikmu di sini memilih pakaianmu untuk besok.",
      "Kirim chat ke grup WhatsApp utamamu berisi emoji yang dipilihkan temanmu.",
      "Ceritakan momen paling memalukan yang pernah kamu bagikan di grup ini.",
    ],
  },
};

// ---- STATE ----
let players = []; // Array of player names
let selectedCategory = "Umum";
let customCategoryText = "";
let currentPlayer = "";
let currentType = ""; // 'truth' | 'dare'

// Track available questions to avoid repeating
let used = { truth: new Set(), dare: new Set() };

// ---- DOM REFERENCES ----
const screens = {
  setup: document.getElementById("setup-screen"),
  randomizer: document.getElementById("randomizer-screen"),
  choice: document.getElementById("choice-screen"),
  result: document.getElementById("result-screen"),
};

const el = {
  playerNameInput: document.getElementById("player-name-input"),
  addPlayerBtn: document.getElementById("add-player-btn"),
  playerList: document.getElementById("player-list"),
  categoryGrid: document.getElementById("category-grid"),
  customCategoryWrapper: document.getElementById("custom-category-wrapper"),
  customCategoryInput: document.getElementById("custom-category-input"),
  setupError: document.getElementById("setup-error"),
  startGameBtn: document.getElementById("start-game-btn"),

  randoDisplay: document.getElementById("rando-display"),
  playerTags: document.getElementById("player-tags"),
  randoConfirm: document.getElementById("rando-confirm"),
  spinBtn: document.getElementById("spin-btn"),

  currentPlayerDisplay: document.getElementById("current-player-display"),
  btnTruth: document.getElementById("btn-truth"),
  btnDare: document.getElementById("btn-dare"),
  reSpinBtn: document.getElementById("re-spin-btn"),

  resultBadge: document.getElementById("result-type-badge"),
  aiLoading: document.getElementById("ai-loading"),
  aiLoadingText: document.querySelector("#ai-loading p"),
  questionContainer: document.getElementById("question-container"),
  questionText: document.getElementById("question-text"),
  categoryLabel: document.getElementById("category-label"),
  doneBtn: document.getElementById("done-btn"),
  skipBtn: document.getElementById("skip-btn"),
  restartBtn: document.getElementById("restart-btn"),
};

// =========================================================
// SETUP SCREEN
// =========================================================
function renderPlayerList() {
  el.playerList.innerHTML = "";
  players.forEach((name, idx) => {
    const li = document.createElement("li");
    li.className = "player-list-item";
    li.innerHTML = `
            <div class="player-list-item-left">
                <span class="player-num">${idx + 1}.</span>
                <span>${escapeHtml(name)}</span>
            </div>
            <button class="remove-player-btn" data-idx="${idx}" title="Hapus">
                <i class="fa-solid fa-xmark"></i>
            </button>`;
    el.playerList.appendChild(li);
  });
}

function addPlayer() {
  const name = el.playerNameInput.value.trim();
  if (!name) return;
  if (players.includes(name)) {
    showSetupError(`"${name}" sudah ada dalam daftar!`);
    return;
  }
  hideSetupError();
  players.push(name);
  renderPlayerList();
  el.playerNameInput.value = "";
  el.playerNameInput.focus();
}

function removePlayer(idx) {
  players.splice(idx, 1);
  renderPlayerList();
}

function showSetupError(msg) {
  el.setupError.textContent = msg;
  el.setupError.classList.remove("hidden");
}
function hideSetupError() {
  el.setupError.classList.add("hidden");
}

// ---- Category Selection ----
function selectCategory(chip) {
  document
    .querySelectorAll(".category-chip")
    .forEach((c) => c.classList.remove("selected"));
  chip.classList.add("selected");
  selectedCategory = chip.dataset.category;
  if (selectedCategory === "custom") {
    el.customCategoryWrapper.classList.remove("hidden");
    el.customCategoryInput.focus();
  } else {
    el.customCategoryWrapper.classList.add("hidden");
  }
}

// =========================================================
// RANDOMIZER SCREEN
// =========================================================
let spinInterval = null;
let isSpinning = false;
let hasSpunOnce = false;

function buildPlayerTags() {
  el.playerTags.innerHTML = "";
  players.forEach((name) => {
    const tag = document.createElement("div");
    tag.className = "player-tag";
    tag.dataset.name = name;
    tag.textContent = name;
    el.playerTags.appendChild(tag);
  });
}

function highlightTag(name) {
  document.querySelectorAll(".player-tag").forEach((t) => {
    t.classList.remove("highlighted");
    if (t.dataset.name === name) t.classList.add("highlighted");
  });
}

function markTagChosen(name) {
  document.querySelectorAll(".player-tag").forEach((t) => {
    t.classList.remove("highlighted");
    if (t.dataset.name === name) t.classList.add("chosen");
  });
}

function spin() {
  if (isSpinning) return;
  isSpinning = true;
  hasSpunOnce = true;

  el.spinBtn.disabled = true;
  el.spinBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Mengacak...`;
  el.randoDisplay.classList.add("spinning");
  el.randoDisplay.classList.remove("landed");
  el.randoConfirm.classList.add("hidden");

  // Remove any previous highlights
  document
    .querySelectorAll(".player-tag")
    .forEach((t) => t.classList.remove("chosen"));

  const totalTicks = 28 + Math.floor(Math.random() * 14); // 28-42 ticks
  let ticks = 0;

  // We use three stages with increasing delay to create a slow-down effect
  function doTick(delay) {
    if (ticks >= totalTicks) {
      const finalName = players[Math.floor(Math.random() * players.length)];
      el.randoDisplay.textContent = finalName;
      highlightTag(finalName);
      landOn(finalName);
      return;
    }

    const randomName = players[Math.floor(Math.random() * players.length)];
    el.randoDisplay.textContent = randomName;
    highlightTag(randomName);
    ticks++;

    // Determine next delay based on progress
    let nextDelay;
    const progress = ticks / totalTicks;
    if (progress < 0.5) {
      nextDelay = 65;
    } else if (progress < 0.75) {
      nextDelay = 120;
    } else {
      nextDelay = 220;
    }

    spinInterval = setTimeout(() => doTick(nextDelay), nextDelay);
  }

  doTick(65);
}

function landOn(name) {
  currentPlayer = name;
  isSpinning = false;

  el.randoDisplay.textContent = name;
  el.randoDisplay.classList.remove("spinning");
  el.randoDisplay.classList.add("landed");
  markTagChosen(name);

  el.randoConfirm.textContent = `🎉 ${name} dipilih!`;
  el.randoConfirm.classList.remove("hidden");

  el.spinBtn.disabled = false;
  el.spinBtn.innerHTML = `<i class="fa-solid fa-shuffle"></i> Acak Lagi`;

  // Auto-advance to choice screen after 1.5s
  setTimeout(() => {
    el.currentPlayerDisplay.textContent = name;
    switchScreen(screens.randomizer, screens.choice);
  }, 1600);
}

// =========================================================
// RESULT SCREEN & AI
// =========================================================
async function showResult(type) {
  currentType = type;
  el.resultBadge.textContent = type.toUpperCase();
  el.resultBadge.className = `badge ${type}`;

  // Update category label
  const catName =
    selectedCategory === "custom"
      ? `AI – ${customCategoryText || "Kustom"}`
      : selectedCategory;
  el.categoryLabel.innerHTML = `Kategori: <span>${escapeHtml(catName)}</span>`;

  // Show the result screen
  switchScreen(screens.choice, screens.result);
  el.questionText.textContent = "";

  // If AI category, fetch from Gemini API
  if (selectedCategory === "custom") {
    if (el.aiLoadingText)
      el.aiLoadingText.textContent = `Gemini sedang menyiapkan pertanyaan...`;
    el.aiLoading.classList.remove("hidden");
    el.questionContainer.classList.add("hidden");
    el.doneBtn.disabled = true;
    el.skipBtn.disabled = true;

    try {
      const question = await fetchAIQuestion(type, customCategoryText);
      setQuestion(question);
    } catch (err) {
      setQuestion(
        "⚠️ AI tidak merespons. Pastikan API Key valid atau tekan Lewati!",
      );
    }

    el.aiLoading.classList.add("hidden");
    el.questionContainer.classList.remove("hidden");
    el.doneBtn.disabled = false;
    el.skipBtn.disabled = false;
  } else {
    // Use built-in bank
    const question = getLocalQuestion(type, selectedCategory);
    setQuestion(question);
  }
}

function setQuestion(text) {
  el.questionText.classList.remove("appear");
  void el.questionText.offsetWidth; // reflow to restart animation
  el.questionText.classList.add("appear");
  el.questionText.textContent = text;
}

function getLocalQuestion(type, category) {
  const pool = QUESTION_BANK[category]?.[type] ?? QUESTION_BANK["Umum"][type];
  const key = `${category}_${type}`;

  if (!used[key]) used[key] = new Set();
  const usedSet = used[key];

  // Reset if all used
  if (usedSet.size >= pool.length) usedSet.clear();

  const available = pool.filter((_, i) => !usedSet.has(i));
  const idx = Math.floor(Math.random() * available.length);
  const question = available[idx];
  usedSet.add(pool.indexOf(question));

  return question;
}

async function fetchAIQuestion(type, category) {
  const typeLabel =
    type === "truth" ? "Truth (pertanyaan jujur)" : "Dare (tantangan)";
  const userPrompt = `Buat satu pertanyaan ${typeLabel} untuk permainan Truth or Dare yang seru, kreatif, sedikit menantang, dan bisa memancing reaksi (kaget, ngakak, atau mikir). Pertanyaan harus relevan dengan tema: "${category}". Gunakan bahasa Indonesia santai, gaya anak nongkrong. Hindari pertanyaan yang terlalu vulgar atau sensitif. Kalau tipe "truth", buat pertanyaan yang bikin orang jujur tapi deg-degan. Kalau tipe "dare", buat tantangan yang lucu, unik, atau agak out of the box tapi masih aman dilakukan. Langsung tulis pertanyaannya saja tanpa pengantar, jangan berulang, cukup 1 kalimat.`;

  // 20s timeout
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
        },
        systemInstruction: {
          parts: [
            {
              text: "Kamu adalah host permainan Truth or Dare. Hanya berikan pertanyaan atau tantangannya saja, tanpa penjelasan tambahan.",
            },
          ],
        },
        contents: [
          {
            parts: [{ text: userPrompt }],
          },
        ],
      }),
    });

    clearTimeout(timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) throw new Error("Empty response from AI");

    return text;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

// =========================================================
// SCREEN TRANSITIONS
// =========================================================
function switchScreen(from, to) {
  from.classList.add("hidden");
  to.classList.remove("hidden");
  // Re-trigger the slideUp animation (reset + reflow)
  to.style.animation = "none";
  void to.offsetHeight; // force reflow
  to.style.animation = "";
  // Show/hide restart button (hidden only on setup screen)
  if (to === screens.setup) {
    el.restartBtn.classList.add("hidden");
  } else {
    el.restartBtn.classList.remove("hidden");
  }
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// HELPERS
// =========================================================
function escapeHtml(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// =========================================================
// INITIALIZATION
// =========================================================
function init() {
  // --- Setup Screen Events ---
  el.addPlayerBtn.addEventListener("click", addPlayer);
  el.playerNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addPlayer();
  });

  el.playerList.addEventListener("click", (e) => {
    const btn = e.target.closest(".remove-player-btn");
    if (btn) removePlayer(Number(btn.dataset.idx));
  });

  el.categoryGrid.addEventListener("click", (e) => {
    const chip = e.target.closest(".category-chip");
    if (chip) selectCategory(chip);
  });

  el.startGameBtn.addEventListener("click", () => {
    if (players.length < 2) {
      showSetupError("Tambahkan minimal 2 pemain untuk memulai!");
      return;
    }
    if (selectedCategory === "custom") {
      customCategoryText = el.customCategoryInput.value.trim();
      if (!customCategoryText) {
        showSetupError("Mohon deskripsikan kategori kustom-mu!");
        return;
      }
    }
    hideSetupError();
    // Reset used questions
    used = {};
    // Go to randomizer
    buildPlayerTags();
    el.randoDisplay.textContent = "?";
    el.randoConfirm.classList.add("hidden");
    el.spinBtn.textContent = "";
    el.spinBtn.innerHTML = `<i class="fa-solid fa-shuffle"></i> Acak!`;
    hasSpunOnce = false;
    switchScreen(screens.setup, screens.randomizer);
  });

  // --- Randomizer Events ---
  el.spinBtn.addEventListener("click", spin);

  el.reSpinBtn.addEventListener("click", () => {
    // Go back to randomizer and spin
    switchScreen(screens.choice, screens.randomizer);
    // Clear chosen tag highlights
    document
      .querySelectorAll(".player-tag")
      .forEach((t) => t.classList.remove("chosen"));
    el.randoConfirm.classList.add("hidden");
    el.randoDisplay.textContent = "?";
    el.randoDisplay.classList.remove("landed", "spinning");
    // Auto-spin
    setTimeout(spin, 300);
  });

  // --- Choice Screen Events ---
  el.btnTruth.addEventListener("click", () => showResult("truth"));
  el.btnDare.addEventListener("click", () => showResult("dare"));

  // --- Result Screen Events ---
  el.doneBtn.addEventListener("click", () => {
    // Go back to randomizer for next round
    buildPlayerTags(); // rebuild tags (remove chosen highlights first)
    document
      .querySelectorAll(".player-tag")
      .forEach((t) => t.classList.remove("chosen"));
    el.randoDisplay.textContent = "?";
    el.randoDisplay.classList.remove("landed", "spinning");
    el.randoConfirm.classList.add("hidden");
    el.spinBtn.innerHTML = `<i class="fa-solid fa-shuffle"></i> Acak!`;
    switchScreen(screens.result, screens.randomizer);
  });

  el.skipBtn.addEventListener("click", () => {
    // Re-show result with same type (skip = new question)
    showResult(currentType);
  });

  // Pre-select default category chip
  document
    .querySelector(`.category-chip[data-category="Umum"]`)
    ?.classList.add("selected");

  // --- Restart Button ---
  el.restartBtn.addEventListener("click", () => {
    // Reset all game state
    players = [];
    selectedCategory = "Umum";
    customCategoryText = "";
    currentPlayer = "";
    currentType = "";
    used = {};
    isSpinning = false;
    hasSpunOnce = false;
    if (spinInterval) {
      clearTimeout(spinInterval);
      spinInterval = null;
    }

    // Reset UI
    renderPlayerList();
    document
      .querySelectorAll(".category-chip")
      .forEach((c) => c.classList.remove("selected"));
    document
      .querySelector(`.category-chip[data-category="Umum"]`)
      ?.classList.add("selected");
    el.customCategoryWrapper.classList.add("hidden");
    el.customCategoryInput.value = "";
    hideSetupError();

    // Go back to setup - find which screen is currently active
    const activeScreen = Object.values(screens).find(
      (s) => !s.classList.contains("hidden"),
    );
    if (activeScreen && activeScreen !== screens.setup) {
      activeScreen.classList.add("hidden");
    }
    screens.setup.classList.remove("hidden");
    screens.setup.style.animation = "none";
    void screens.setup.offsetHeight;
    screens.setup.style.animation = "";
    el.restartBtn.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", init);
