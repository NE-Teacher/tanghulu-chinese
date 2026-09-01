(function () {
  "use strict";

  const IMG_EXTS = ["jpg", "jpeg", "png", "webp"];

  let currentDiff = "all";
  let currentType = "all";
  let currentId = QUESTIONS[0].id;
  let revealed = false;

  const gridEl = document.getElementById("grid");
  const cardEl = document.getElementById("card");
  const posLabelEl = document.getElementById("posLabel");
  const jumpInput = document.getElementById("jumpInput");
  const diffFilterEl = document.getElementById("diffFilter");
  const typeFilterEl = document.getElementById("typeFilter");

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function resolveAsset(path) {
    if (window.EMBEDDED_ASSETS && window.EMBEDDED_ASSETS[path]) return window.EMBEDDED_ASSETS[path];
    return path;
  }

  function playAudio(path) {
    new Audio(resolveAsset(path)).play().catch(() => {});
  }

  function getFiltered() {
    return QUESTIONS.filter((q) => {
      const diffOk = currentDiff === "all" || q.difficulty === Number(currentDiff);
      const typeOk = currentType === "all" || q.type === currentType;
      return diffOk && typeOk;
    });
  }

  function findQuestion(id) {
    return QUESTIONS.find((q) => q.id === id);
  }

  function selectCard(id, opts) {
    opts = opts || {};
    const q = findQuestion(id);
    if (!q) return;
    if (!opts.keepFilter) {
      const inFilter = getFiltered().some((x) => x.id === id);
      if (!inFilter) {
        currentDiff = "all";
        currentType = "all";
      }
    }
    currentId = id;
    revealed = false;
    renderFilters();
    renderGrid();
    renderCard();
  }

  function renderFilters() {
    diffFilterEl.value = currentDiff;
    typeFilterEl.value = currentType;
  }

  function updateGridMaxHeight() {
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    if (!isMobile) {
      gridEl.style.maxHeight = "";
      return;
    }
    const firstBtn = gridEl.querySelector("button");
    if (!firstBtn) return;
    const btnHeight = firstBtn.offsetHeight;
    const gapPx = parseFloat(getComputedStyle(gridEl).rowGap) || 0;
    gridEl.style.maxHeight = 2.5 * btnHeight + 2 * gapPx + "px";
  }

  function renderGrid() {
    const filtered = getFiltered();
    gridEl.innerHTML = "";
    let currentBtn = null;
    filtered.forEach((q) => {
      const btn = document.createElement("button");
      btn.textContent = q.id;
      btn.className = "diff-" + q.difficulty;
      if (q.id === currentId) {
        btn.classList.add("current");
        currentBtn = btn;
      }
      btn.addEventListener("click", () => selectCard(q.id, { keepFilter: true }));
      gridEl.appendChild(btn);
    });
    updateGridMaxHeight();
    if (currentBtn) currentBtn.scrollIntoView({ block: "nearest", inline: "nearest" });

    const idx = filtered.findIndex((q) => q.id === currentId);
    posLabelEl.textContent = idx >= 0
      ? (idx + 1) + " / " + filtered.length
      : "";
  }

  function loadPicture(id, container) {
    let i = 0;
    function tryNext() {
      if (i >= IMG_EXTS.length) {
        container.innerHTML =
          '<div class="pic-placeholder"><span class="icon">\u{1F5BC}</span>이미지 준비 중' +
          '<br><span style="font-size:11px">원본 데이터/이미지/' + id + '.jpg 로 추가하면 자동으로 표시돼요</span></div>';
        return;
      }
      const img = new Image();
      img.onload = () => {
        container.innerHTML = "";
        container.appendChild(img);
      };
      img.onerror = () => {
        i++;
        tryNext();
      };
      img.src = resolveAsset("원본 데이터/이미지/" + id + "." + IMG_EXTS[i]);
    }
    tryNext();
  }

  function extractOptions(prompt) {
    const match = prompt.match(/\s*\[([^\]]+)\]\s*$/);
    if (!match) return { main: prompt, options: null };
    const main = prompt.slice(0, match.index).trim();
    const options = match[1]
      .split(/[,，]/)
      .map((s) => s.trim())
      .filter(Boolean);
    return { main, options };
  }

  function buildChips(options, correctValue) {
    return (
      '<div class="chips">' +
      options
        .map((o) => {
          const isCorrect = revealed && o === correctValue;
          return (
            '<span class="chip' + (isCorrect ? " correct" : "") + '">' +
            escapeHtml(o) +
            "</span>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderCard() {
    const q = findQuestion(currentId);
    const { main: promptMain, options: bracketOptions } = extractOptions(q.prompt);
    const correctHanzi = q.explanation.includes(" / ")
      ? q.explanation.split(" / ")[0].trim()
      : q.explanation.trim();

    let promptHtml;
    if (q.type === "picture") {
      promptHtml = '<div class="pic-box" id="picBox"></div>';
    } else if (q.type === "pinyin") {
      const opts = q.prompt.split("/").map((s) => s.trim());
      promptHtml = buildChips(opts, q.answer.trim());
    } else if (q.type === "blank") {
      const withBlanks = escapeHtml(promptMain).replace(
        /O+/g,
        (m) => '<span class="blank-o">' + m + "</span>"
      );
      promptHtml = '<div class="prompt">' + withBlanks + "</div>";
      if (bracketOptions) promptHtml += buildChips(bracketOptions, correctHanzi);
    } else {
      promptHtml = '<div class="prompt">' + escapeHtml(promptMain) + "</div>";
      if (bracketOptions) promptHtml += buildChips(bracketOptions, correctHanzi);
    }

    let answerBlockHtml;
    if (!revealed) {
      answerBlockHtml = '<button class="reveal-btn" id="revealBtn">정답 보기</button>';
    } else {
      let filledHtml = "";
      if (q.type === "blank") {
        const filled = promptMain.replace(/O+/g, correctHanzi);
        const isChineseSentence = !/[가-힣]/.test(promptMain);
        filledHtml = '<div class="filled">' + escapeHtml(filled) + "</div>";
        if (isChineseSentence) {
          if (q.translation) {
            filledHtml += '<div class="translation">' + escapeHtml(q.translation) + "</div>";
          }
          filledHtml +=
            '<button class="speak-btn" id="speakBtn" data-audio="원본 데이터/tts/문장_' + q.id + '.mp3">🔊 문장 듣기</button>';
        }
      }
      answerBlockHtml =
        '<div class="answer">' +
        '<div class="answer-pinyin">' + escapeHtml(q.answer) + "</div>" +
        '<div class="answer-audio"><button class="speak-btn answer-speak-btn" id="answerSpeakBtn" data-audio="원본 데이터/tts/' +
          q.id + '.mp3">🔊 발음 듣기</button></div>' +
        filledHtml +
        '<div class="explanation">' + escapeHtml(q.explanation) + "</div>" +
        (q.note ? '<div class="note">참고: ' + escapeHtml(q.note) + "</div>" : "") +
        "</div>";
    }

    cardEl.innerHTML =
      '<div class="card-head">' +
      '<span class="card-num">문제 ' + q.id + " / 60</span>" +
      '<span class="badge diff-' + q.difficulty + '">난이도 ' + q.difficulty + "</span>" +
      "</div>" +
      '<div class="instruction">' + escapeHtml(q.instruction) + "</div>" +
      promptHtml +
      answerBlockHtml;

    if (q.type === "picture") {
      loadPicture(q.id, document.getElementById("picBox"));
    }

    const revealBtn = document.getElementById("revealBtn");
    if (revealBtn) {
      revealBtn.addEventListener("click", () => {
        revealed = true;
        renderCard();
      });
    }

    const speakBtn = document.getElementById("speakBtn");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => playAudio(speakBtn.dataset.audio));
    }

    const answerSpeakBtn = document.getElementById("answerSpeakBtn");
    if (answerSpeakBtn) {
      answerSpeakBtn.addEventListener("click", () => playAudio(answerSpeakBtn.dataset.audio));
    }
  }

  function step(delta) {
    const filtered = getFiltered();
    const idx = filtered.findIndex((q) => q.id === currentId);
    let nextIdx = idx + delta;
    if (nextIdx < 0) nextIdx = filtered.length - 1;
    if (nextIdx >= filtered.length) nextIdx = 0;
    selectCard(filtered[nextIdx].id, { keepFilter: true });
  }

  document.getElementById("prevBtn").addEventListener("click", () => step(-1));
  document.getElementById("nextBtn").addEventListener("click", () => step(1));

  document.getElementById("jumpBtn").addEventListener("click", jumpToInput);
  jumpInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") jumpToInput();
  });

  function jumpToInput() {
    const n = Number(jumpInput.value);
    if (!n || n < 1 || n > QUESTIONS.length) return;
    selectCard(n);
    jumpInput.value = "";
  }

  function applyFilterChange() {
    const filtered = getFiltered();
    if (filtered.length === 0) {
      currentDiff = "all";
      currentType = "all";
    }
    const finalFiltered = getFiltered();
    if (!finalFiltered.some((q) => q.id === currentId)) {
      currentId = finalFiltered[0].id;
      revealed = false;
    }
    renderFilters();
    renderGrid();
    renderCard();
  }

  diffFilterEl.addEventListener("change", () => {
    currentDiff = diffFilterEl.value;
    applyFilterChange();
  });

  typeFilterEl.addEventListener("change", () => {
    currentType = typeFilterEl.value;
    applyFilterChange();
  });

  document.addEventListener("keydown", (e) => {
    if (document.activeElement === jumpInput) return;
    if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === " " || e.key === "Enter") {
      const revealBtn = document.getElementById("revealBtn");
      if (revealBtn) {
        e.preventDefault();
        revealBtn.click();
      }
    }
  });

  window.addEventListener("resize", updateGridMaxHeight);

  renderFilters();
  renderGrid();
  renderCard();
})();
