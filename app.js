/* =========================================================
   拾词 · SHICI VOCABULARY
   原生 JavaScript 交互：学习、词库、挑战、统计
   ========================================================= */

(() => {
  "use strict";

  const WORDS = Array.isArray(window.WORD_DATA) ? window.WORD_DATA : [];
  const THEMES = Array.isArray(window.WORD_THEMES) ? window.WORD_THEMES : [];
  const WORD_MAP = new Map(WORDS.map((word) => [word.id, word]));
  const THEME_MAP = new Map(THEMES.map((theme) => [theme.id, theme]));
  const WORD_INDEX = new Map(WORDS.map((word, index) => [word.id, index]));
  const CATEGORY_ORDER = ["核心高频", "学术进阶", "商务职场", "生活表达"];
  const CATEGORIES = CATEGORY_ORDER.filter((category) =>
    WORDS.some((word) => word.category === category)
  );
  const STORAGE_KEY = "shici.vocab.v1";
  const DAY_GOAL = 12;
  const SESSION_SIZE = 12;
  const QUIZ_SIZE = 10;
  const LIBRARY_PAGE_SIZE = 30;
  const PAGE = document.body.dataset.page || "today";
  const WEEK_SHORT = ["日", "一", "二", "三", "四", "五", "六"];
  const WEEK_EN = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const STATUS_LABELS = {
    new: "新词",
    learning: "学习中",
    mastered: "已掌握"
  };
  const DEFAULT_RECORD = {
    status: "new",
    knownStreak: 0,
    seen: 0,
    correct: 0,
    wrong: 0,
    lastSeen: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const icon = (name, className = "") =>
    `<svg class="icon ${className}" aria-hidden="true"><use href="icons.svg#i-${name}"></use></svg>`;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const pad = (number) => String(number).padStart(2, "0");

  /* ---------- 日期 ---------- */

  function dateKey(date = new Date()) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function keyToDate(key) {
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month - 1, day, 12, 0, 0, 0);
  }

  function relativeDateKey(offset = 0) {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    return dateKey(date);
  }

  const todayKey = () => dateKey(new Date());
  const yesterdayKey = () => relativeDateKey(-1);

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 5) return "夜深了";
    if (hour < 9) return "早上好";
    if (hour < 12) return "上午好";
    if (hour < 14) return "中午好";
    if (hour < 18) return "下午好";
    return "晚上好";
  }

  function getLastDays(count = 7) {
    const days = [];
    for (let offset = count - 1; offset >= 0; offset -= 1) {
      const date = new Date();
      date.setHours(12, 0, 0, 0);
      date.setDate(date.getDate() - offset);
      const key = dateKey(date);
      days.push({
        key,
        date,
        day: WEEK_SHORT[date.getDay()],
        dateLabel: `${date.getMonth() + 1}.${date.getDate()}`,
        isToday: key === todayKey()
      });
    }
    return days;
  }

  /* ---------- 本地状态 ---------- */

  function createDefaultState() {
    return {
      version: 1,
      words: {},
      daily: { date: todayKey(), studied: [] },
      streak: { count: 0, lastStudy: null },
      history: {},
      quiz: { best: 0, attempts: 0 }
    };
  }

  function readStoredState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function normalizeState(raw) {
    const base = createDefaultState();
    if (!raw || typeof raw !== "object") return base;

    const normalized = {
      ...base,
      version: 1,
      words: {},
      history: {},
      quiz: {
        best: Math.min(QUIZ_SIZE, Math.max(0, Number(raw.quiz?.best) || 0)),
        attempts: Math.max(0, Number(raw.quiz?.attempts) || 0)
      }
    };

    if (raw.words && typeof raw.words === "object") {
      Object.entries(raw.words).forEach(([id, record]) => {
        if (!WORD_MAP.has(id) || !record || typeof record !== "object") return;
        normalized.words[id] = {
          status: ["new", "learning", "mastered"].includes(record.status) ? record.status : "new",
          knownStreak: Math.max(0, Number(record.knownStreak) || 0),
          seen: Math.max(0, Number(record.seen) || 0),
          correct: Math.max(0, Number(record.correct) || 0),
          wrong: Math.max(0, Number(record.wrong) || 0),
          lastSeen: typeof record.lastSeen === "string" ? record.lastSeen : null
        };
      });
    }

    if (raw.daily && raw.daily.date === todayKey() && Array.isArray(raw.daily.studied)) {
      normalized.daily = {
        date: raw.daily.date,
        studied: [...new Set(raw.daily.studied.filter((id) => WORD_MAP.has(id)))]
      };
    }

    if (raw.streak && typeof raw.streak === "object") {
      normalized.streak = {
        count: Math.max(0, Number(raw.streak.count) || 0),
        lastStudy: typeof raw.streak.lastStudy === "string" ? raw.streak.lastStudy : null
      };
    }

    if (raw.history && typeof raw.history === "object") {
      Object.entries(raw.history).forEach(([key, value]) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Number.isFinite(Number(value))) {
          normalized.history[key] = Math.max(0, Number(value));
        }
      });
    }

    const lastStudy = normalized.streak.lastStudy;
    if (lastStudy && lastStudy !== todayKey() && lastStudy !== yesterdayKey()) {
      normalized.streak.count = 0;
    }

    normalized.history[todayKey()] = Math.max(
      Number(normalized.history[todayKey()]) || 0,
      normalized.daily.studied.length
    );

    return normalized;
  }

  let state = normalizeState(readStoredState());
  let session = null;
  let libraryQuery = "";
  let libraryStatus = "all";
  let libraryCategory = "all";
  let libraryTheme = "all";
  let libraryLimit = LIBRARY_PAGE_SIZE;
  let toastTimer = null;

  let quizState = {
    phase: "landing",
    questions: [],
    index: 0,
    score: 0,
    answers: []
  };

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      /* 浏览器禁用本地存储时，仍然允许本次浏览使用 */
    }
  }

  function ensureDailyState() {
    const today = todayKey();
    if (!state.daily || state.daily.date !== today) {
      state.daily = { date: today, studied: [] };
    }
    if (!Array.isArray(state.daily.studied)) {
      state.daily.studied = [];
    }
    state.daily.studied = [...new Set(state.daily.studied.filter((id) => WORD_MAP.has(id)))];
    return state.daily;
  }

  function ensureStreakValidity() {
    const lastStudy = state.streak?.lastStudy;
    if (lastStudy && lastStudy !== todayKey() && lastStudy !== yesterdayKey()) {
      state.streak.count = 0;
    }
  }

  function getRecordSnapshot(id) {
    return { ...DEFAULT_RECORD, ...(state.words[id] || {}) };
  }

  function ensureRecord(id) {
    const existing = state.words[id];
    const record = {
      ...DEFAULT_RECORD,
      ...(existing && typeof existing === "object" ? existing : {})
    };
    state.words[id] = record;
    return record;
  }

  function getStatusCounts() {
    const counts = { new: 0, learning: 0, mastered: 0 };
    WORDS.forEach((word) => {
      const record = state.words[word.id];
      const status = record && Object.prototype.hasOwnProperty.call(counts, record.status) ? record.status : "new";
      counts[status] += 1;
    });
    return counts;
  }

  function getStudySummary() {
    const counts = getStatusCounts();
    let correct = 0;
    let wrong = 0;
    WORDS.forEach((word) => {
      const record = state.words[word.id];
      if (!record) return;
      correct += Number(record.correct) || 0;
      wrong += Number(record.wrong) || 0;
    });
    const totalAnswers = correct + wrong;
    return {
      ...counts,
      correct,
      wrong,
      totalAnswers,
      accuracy: totalAnswers ? Math.round((correct / totalAnswers) * 100) : 0
    };
  }

  function getWeakWords(limit = Infinity) {
    return WORDS
      .map((word) => ({ word, record: getRecordSnapshot(word.id) }))
      .filter((item) => item.record.wrong > 0)
      .sort((a, b) => {
        if (b.record.wrong !== a.record.wrong) return b.record.wrong - a.record.wrong;
        return (a.record.lastSeen || "").localeCompare(b.record.lastSeen || "");
      })
      .slice(0, limit);
  }

  function recordDailyStudy(id) {
    const daily = ensureDailyState();
    const before = daily.studied.length;
    const wasNew = !daily.studied.includes(id);

    if (wasNew) daily.studied.push(id);

    if (wasNew && state.streak.lastStudy !== todayKey()) {
      if (state.streak.lastStudy === yesterdayKey()) {
        state.streak.count = Math.max(1, (Number(state.streak.count) || 0) + 1);
      } else {
        state.streak.count = 1;
      }
      state.streak.lastStudy = todayKey();
    }

    if (wasNew && !state.streak.lastStudy) {
      state.streak.lastStudy = todayKey();
      state.streak.count = Math.max(1, Number(state.streak.count) || 1);
    }

    state.history[todayKey()] = daily.studied.length;

    return {
      wasNew,
      before,
      after: daily.studied.length,
      crossedGoal: before < DAY_GOAL && daily.studied.length >= DAY_GOAL
    };
  }

  function applyAnswer(id, known) {
    if (!WORD_MAP.has(id)) return { crossedGoal: false, newlyMastered: false };
    const record = ensureRecord(id);
    const previousStatus = record.status;

    record.seen = (Number(record.seen) || 0) + 1;
    record.lastSeen = todayKey();

    if (known) {
      record.correct = (Number(record.correct) || 0) + 1;
      if (record.status !== "mastered") {
        record.knownStreak = (Number(record.knownStreak) || 0) + 1;
        record.status = record.knownStreak >= 2 ? "mastered" : "learning";
      }
    } else {
      record.wrong = (Number(record.wrong) || 0) + 1;
      record.knownStreak = 0;
      record.status = "learning";
    }

    const daily = recordDailyStudy(id);

    return {
      ...daily,
      newlyMastered: previousStatus !== "mastered" && record.status === "mastered"
    };
  }

  /* ---------- 学习小组 ---------- */

  function statusPriority(status) {
    if (status === "learning") return 0;
    if (status === "new") return 1;
    return 2;
  }

  function pickSessionIds(pool) {
    const studiedToday = new Set(state.daily.studied);
    const ranked = [...pool].sort((a, b) => {
      const difference =
        statusPriority(getRecordSnapshot(a.id).status) -
        statusPriority(getRecordSnapshot(b.id).status);
      if (difference !== 0) return difference;
      return (WORD_INDEX.get(a.id) || 0) - (WORD_INDEX.get(b.id) || 0);
    });

    const fresh = ranked.filter((word) => !studiedToday.has(word.id));
    const ids = fresh.slice(0, SESSION_SIZE).map((word) => word.id);

    if (ids.length < SESSION_SIZE) {
      for (const word of ranked) {
        if (ids.length >= SESSION_SIZE) break;
        if (!ids.includes(word.id)) ids.push(word.id);
      }
    }

    return ids;
  }

  function createSession(ids, type, themeId = null) {
    return {
      ids,
      index: 0,
      known: 0,
      again: 0,
      mastered: 0,
      revealed: false,
      type,
      themeId
    };
  }

  function buildSession(customIds = null) {
    const custom = Array.isArray(customIds)
      ? [...new Set(customIds)].filter((id) => WORD_MAP.has(id)).slice(0, SESSION_SIZE)
      : [];

    if (custom.length) return createSession(custom, "review");
    return createSession(pickSessionIds(WORDS), "daily");
  }

  function buildThemeSession(themeId) {
    const pool = WORDS.filter((word) => word.themeId === themeId);
    return createSession(pickSessionIds(pool), "theme", themeId);
  }

  function ensureSession() {
    if (!session || !Array.isArray(session.ids) || !session.ids.length) {
      session = buildSession();
    }
    return session;
  }

  function startSession(customIds = null) {
    if (PAGE !== "today") {
      window.location.href = "index.html";
      return;
    }
    session = buildSession(customIds);
    renderToday();
    showToast(customIds?.length ? "已整理好复习词，慢慢来。" : "新的一组已经准备好了。");
  }

  function startThemeSession(themeId) {
    const theme = THEME_MAP.get(themeId);
    if (!theme) return;
    if (PAGE !== "today") {
      window.location.href = `index.html?theme=${encodeURIComponent(themeId)}`;
      return;
    }
    session = buildThemeSession(themeId);
    if (!session.ids.length) {
      showToast("这个词包暂时还没有内容。");
      return;
    }
    showToast(`「${theme.name}」词包已准备好。`);
    renderToday();
  }

  function restartSession() {
    if (session?.type === "theme" && session.themeId) {
      startThemeSession(session.themeId);
      return;
    }
    startSession();
  }

  function currentSessionWord() {
    if (!session || session.index >= session.ids.length) return null;
    return WORD_MAP.get(session.ids[session.index]) || null;
  }

  function revealCurrent() {
    if (!session || session.revealed || session.index >= session.ids.length) return;
    session.revealed = true;
    renderStudyCard();
    $("#studyCard .btn-answer--again")?.focus({ preventScroll: true });
    announce("已显示释义。");
  }

  function answerCurrent(known) {
    if (!session || session.index >= session.ids.length) return;
    const word = currentSessionWord();
    if (!word) return;

    const result = applyAnswer(word.id, known);
    if (known) session.known += 1;
    else session.again += 1;
    if (result.newlyMastered) session.mastered += 1;

    session.index += 1;
    session.revealed = false;
    saveState();
    renderToday();

    const card = $("#studyCard");
    if (card && card.getBoundingClientRect().top < 72) {
      const top = card.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }
    $("#studyCard .btn-reveal")?.focus({ preventScroll: true });

    if (result.crossedGoal) {
      burstConfetti(30);
      showToast(`今日 ${DAY_GOAL} 个词完成，目标达成。`, true);
      announce(`今日目标达成，已学习 ${DAY_GOAL} 个词。`);
    } else if (session.index >= session.ids.length) {
      burstConfetti(18);
      announce("本组学习完成。");
    }
  }

  /* ---------- 页面渲染：今日学习 ---------- */

  function renderHero() {
    const date = new Date();
    const learned = state.daily.studied.length;
    const remaining = Math.max(0, DAY_GOAL - learned);
    const goalMet = learned >= DAY_GOAL;
    const displayCount = Math.min(learned, DAY_GOAL);
    const counts = getStatusCounts();
    const progress = Math.min(1, learned / DAY_GOAL);
    const circumference = 2 * Math.PI * 99;
    const dashOffset = circumference * (1 - progress);

    const greeting = $("#todayGreeting");
    const weekday = $("#todayWeekday");
    const dateLabel = $("#todayDate");
    const subtitle = $("#todaySubtitle");
    const tags = $("#todayTags");
    const goal = $("#todayGoal");

    if (greeting) greeting.textContent = getGreeting();
    if (weekday) weekday.textContent = WEEK_EN[date.getDay()];
    if (dateLabel) dateLabel.textContent = `${date.getMonth() + 1}月${date.getDate()}日`;
    if (subtitle) {
      subtitle.textContent = goalMet
        ? `今日目标已经完成，今天共拾起 ${learned} 个词。想再巩固一组，或者去词义挑战里检验一下，都很好。`
        : learned > 0
          ? `今天已经拾起 ${learned} 个词，还差 ${remaining} 个就达成目标。保持这个节奏。`
          : `少量、专注、重复。今天的目标是 ${DAY_GOAL} 个词，从第一个开始。`;
    }
    if (tags) {
      tags.innerHTML = `
        <span class="hero-tag"><span class="dot"></span>已掌握 <b>${counts.mastered}</b></span>
        <span class="hero-tag hero-tag--learning"><span class="dot"></span>待复习 <b>${counts.learning}</b></span>
        <span class="hero-tag hero-tag--streak"><span class="dot"></span>词库共 <b>${WORDS.length}</b> 个</span>
      `;
    }

    if (goal) {
      goal.className = `goal-disc ${goalMet ? "is-complete" : ""}`;
      goal.setAttribute(
        "aria-label",
        `今日目标 ${displayCount} / ${DAY_GOAL}，今日累计学习 ${learned} 个词`
      );
      goal.innerHTML = `
        <span class="goal-disc__star" aria-hidden="true"></span>
        <svg class="goal-disc__ring" viewBox="0 0 206 206" aria-hidden="true">
          <circle class="ring-track" cx="103" cy="103" r="99"></circle>
          <circle class="ring-fill" cx="103" cy="103" r="99"
            stroke-dasharray="${circumference.toFixed(2)}"
            stroke-dashoffset="${dashOffset.toFixed(2)}"></circle>
        </svg>
        <span class="goal-disc__label">今日目标</span>
        <span class="goal-disc__number"><strong>${displayCount}</strong><span>/ ${DAY_GOAL}</span></span>
        <span class="goal-disc__foot">${goalMet ? (learned > DAY_GOAL ? `今日已学 ${learned} 个` : "今日目标已达成") : `还差 ${remaining} 个词`}</span>
      `;
    }
  }

  function studyActionsTemplate() {
    return `
      <div class="study-actions">
        <button class="btn-answer btn-answer--again" type="button" data-action="answer-again">
          ${icon("refresh")}
          <span>还不认识</span>
          <kbd>1</kbd>
        </button>
        <button class="btn-answer btn-answer--known" type="button" data-action="answer-known">
          ${icon("check")}
          <span>认识了</span>
          <kbd>2</kbd>
        </button>
      </div>
    `;
  }

  function finishTemplate() {
    const goalMet = state.daily.studied.length >= DAY_GOAL;
    const theme = session.type === "theme" ? THEME_MAP.get(session.themeId) : null;
    const title =
      session.again === 0
        ? theme
          ? "这一包，全都记得。"
          : "这一组，全都记得。"
        : session.known >= session.again
          ? theme
            ? "这一包，收下了。"
            : "这一组，收下了。"
          : "没关系，再来一次。";

    const goalLine = goalMet
      ? "今日目标已达成。记忆不是一次性储存，明天再见它们一次。"
      : `距离今天的 ${DAY_GOAL} 词目标还差 ${Math.max(0, DAY_GOAL - state.daily.studied.length)} 个。`;
    const subtitle = theme
      ? `「${theme.name}」先到这里。${goalLine}`
      : goalLine;

    return `
      <div class="finish-panel">
        <div class="finish-panel__icon">${icon("check")}</div>
        <h2>${title}</h2>
        <p>${subtitle}</p>
        <div class="finish-stats">
          <div class="finish-stat"><strong>${session.known}</strong><span>认识</span></div>
          <div class="finish-stat"><strong>${session.again}</strong><span>需复习</span></div>
          <div class="finish-stat"><strong>${session.mastered}</strong><span>新掌握</span></div>
        </div>
        <div class="finish-actions">
          <button class="btn btn--primary" type="button" data-action="restart-session">
            ${theme ? "再学一包" : "再学一组"} ${icon("arrow-right")}
          </button>
          <button class="btn btn--outline-light" type="button" data-action="go-quiz">
            去词义挑战
          </button>
        </div>
      </div>
    `;
  }

  function collocationsTemplate(word, variant = "") {
    const items = Array.isArray(word.collocations) ? word.collocations.filter(Boolean) : [];
    if (!items.length) return "";
    return `
      <div class="collocation-box ${variant}">
        <span class="collocation-box__label">常用搭配</span>
        <div class="collocation-list">
          ${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    `;
  }

  function confusableTemplate(word, variant = "") {
    if (!word.confusables) return "";
    return `
      <p class="confusable-note ${variant}">
        <span>易混</span>${escapeHtml(word.confusables)}
      </p>
    `;
  }

  function renderStudyCard() {
    const container = $("#studyCard");
    if (!container) return;

    ensureSession();

    if (session.index >= session.ids.length) {
      container.innerHTML = finishTemplate();
      return;
    }

    const word = currentSessionWord();
    if (!word) {
      container.innerHTML = `<div class="loading-state"><span class="loading-state__mark">拾</span><p>今天的词暂时走丢了。</p></div>`;
      return;
    }

    const wordLengthClass =
      word.word.length >= 12 ? " is-xlong" : word.word.length >= 10 ? " is-long" : "";

    const record = getRecordSnapshot(word.id);
    const total = session.ids.length;
    const position = session.index + 1;
    const progress = Math.round((session.index / total) * 100);
    const sessionTheme = session.type === "theme" ? THEME_MAP.get(session.themeId) : null;
    const statusLabel =
      session.type === "theme"
        ? "主题词包"
        : session.type === "review"
          ? "复习"
          : record.status === "new"
            ? "新词"
            : record.status === "mastered"
              ? "再巩固"
              : "待巩固";
    const contextLabel = sessionTheme ? sessionTheme.name : word.category;

    const top = `
      <div class="study-card__top">
        <span class="study-pill">
          <span class="study-pill__dot"></span>
          ${statusLabel}
          <span class="study-pill__sep"></span>
          ${escapeHtml(contextLabel)}
        </span>
        <span class="study-card__count">本组 <b>${pad(position)}</b> / ${pad(total)}</span>
      </div>
      <div class="study-progress"><i style="width: ${progress}%"></i></div>
    `;

    const wordStage = `
      <div class="word-stage">
        <h2 class="word-stage__word${wordLengthClass}">${escapeHtml(word.word)}</h2>
        <div class="word-stage__meta">
          <span class="word-phonetic">${escapeHtml(word.phonetic)}</span>
          <button class="icon-btn" type="button" data-speak="${escapeHtml(word.word)}" aria-label="朗读 ${escapeHtml(word.word)}">
            ${icon("volume")}
          </button>
          <span class="level-tag">${escapeHtml(word.level)}</span>
        </div>
      </div>
    `;

    if (!session.revealed) {
      container.innerHTML = `
        <div class="study-card__content">
          ${top}
          ${wordStage}
          <div class="reveal-panel">
            <div class="reveal-panel__inner">
              <div class="reveal-panel__copy">
                <p>先在心里说出它的意思。</p>
                <span>想不起来也没关系，诚实地翻面就好。</span>
              </div>
              <button class="btn-reveal" type="button" data-action="reveal">
                显示释义 <kbd>Space</kbd>
              </button>
            </div>
            <div class="study-card__foot-note">
              <span>${escapeHtml(word.theme)} · ${escapeHtml(word.level)}</span>
              <span>先回忆，再翻面</span>
            </div>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="study-card__content">
        ${top}
        ${wordStage}
        <div class="answer-zone" aria-live="polite">
          <div class="answer-zone__rule"></div>
          <div class="answer-meaning">
            <span class="pos-chip">${escapeHtml(word.pos)}</span>
            <p>${escapeHtml(word.meaning)}</p>
          </div>
          <div class="example-box">
            <p class="en">${escapeHtml(word.example)}</p>
            <p class="cn">${escapeHtml(word.translation)}</p>
          </div>
          ${collocationsTemplate(word)}
          <div class="memory-note">
            ${icon("lightbulb")}
            <span>${escapeHtml(word.note)}</span>
          </div>
          ${confusableTemplate(word)}
          ${studyActionsTemplate()}
        </div>
      </div>
    `;
  }

  function queueItemTemplate(id, absoluteIndex, isCurrent) {
    const word = WORD_MAP.get(id);
    if (!word) return "";
    const record = getRecordSnapshot(id);
    const stateClass = isCurrent
      ? "queue-state--current"
      : record.status === "mastered"
        ? "queue-state--mastered"
        : record.status === "learning"
          ? "queue-state--learning"
          : "";

    return `
      <li class="queue-item ${isCurrent ? "is-current" : ""}">
        <span class="queue-index">${pad(absoluteIndex)}</span>
        <span class="queue-word">
          <strong>${escapeHtml(word.word)}</strong>
          <span>${escapeHtml(word.category)}</span>
        </span>
        <span class="queue-state ${stateClass}" aria-hidden="true"></span>
      </li>
    `;
  }

  function renderRail() {
    const container = $("#dailyRail");
    if (!container) return;

    ensureSession();

    const total = session.ids.length;
    const remaining = Math.max(0, total - session.index);
    const week = getLastDays(7);
    const weekTotal = week.reduce((sum, day) => {
      const key = day.key;
      if (key === todayKey()) {
        return sum + Math.max(Number(state.history[key]) || 0, state.daily.studied.length);
      }
      return sum + (Number(state.history[key]) || 0);
    }, 0);

    const queueBody =
      remaining > 0
        ? `
          <ul class="queue-list">
            ${session.ids
              .slice(session.index, session.index + 5)
              .map((id, index) => queueItemTemplate(id, session.index + index + 1, index === 0))
              .join("")}
          </ul>
          ${remaining > 5 ? `<p class="queue-more">还有 ${remaining - 5} 个词在后面。</p>` : ""}
          <div class="queue-hint">
            ${icon("keyboard")}
            <span><kbd>Space</kbd> 显示释义，<kbd>1</kbd> 还不认识，<kbd>2</kbd> 认识了。</span>
          </div>
        `
        : `
          <div class="queue-done">
            <span class="queue-done__icon">${icon("check")}</span>
            <strong>本组已经走完</strong>
            <span>歇一会儿，或者再拾一组。</span>
          </div>
        `;

    const railTheme = session.type === "theme" ? THEME_MAP.get(session.themeId) : null;
    const weekDots = week
      .map((day) => {
        const count =
          day.key === todayKey()
            ? Math.max(Number(state.history[day.key]) || 0, state.daily.studied.length)
            : Number(state.history[day.key]) || 0;
        let level = "";
        if (count >= 8) level = "is-high";
        else if (count >= 4) level = "is-mid";
        else if (count > 0) level = "is-low";

        return `
          <div class="week-day ${day.isToday ? "is-today" : ""}" title="${day.dateLabel} · ${count} 个词">
            <span class="week-day__label">${day.day}</span>
            <span class="week-day__dot ${level}">${count > 0 ? count : "·"}</span>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <section class="rail-card">
        <div class="rail-head">
          <h2>${railTheme ? escapeHtml(railTheme.name) : "本组单词"}</h2>
          <span>${remaining > 0 ? `${pad(session.index + 1)} / ${pad(total)}` : "COMPLETE"}</span>
        </div>
        ${queueBody}
      </section>
      <section class="rail-card">
        <div class="rail-head">
          <h2>本周节奏</h2>
          <span>连续 ${state.streak.count || 0} 天</span>
        </div>
        <div class="week-strip">${weekDots}</div>
        <p class="week-summary">本周学习 <strong>${weekTotal}</strong> 个词</p>
        <p class="rail-quote">记忆不是一次性储存，而是在快要忘记时，再想起一次。</p>
      </section>
    `;
  }

  function renderToday() {
    ensureDailyState();
    ensureSession();
    renderHero();
    renderStudyCard();
    renderRail();
    updateChrome();
  }

  /* ---------- 页面渲染：词库 ---------- */

  function renderStatusFilters() {
    const container = $("#statusFilters");
    if (!container) return;
    const counts = getStatusCounts();
    const tabs = [
      { key: "all", label: "全部", count: WORDS.length },
      { key: "new", label: "新词", count: counts.new },
      { key: "learning", label: "学习中", count: counts.learning },
      { key: "mastered", label: "已掌握", count: counts.mastered }
    ];

    container.innerHTML = tabs
      .map(
        (tab) => `
        <button class="filter-tab ${libraryStatus === tab.key ? "is-active" : ""}" type="button"
          data-action="filter-status" data-filter="${tab.key}" aria-pressed="${libraryStatus === tab.key}">
          ${tab.label}<b>${tab.count}</b>
        </button>
      `
      )
      .join("");
  }

  function filteredWords() {
    const query = libraryQuery.trim().toLowerCase();
    return WORDS.filter((word) => {
      const record = getRecordSnapshot(word.id);
      if (libraryStatus !== "all" && record.status !== libraryStatus) return false;
      if (libraryCategory !== "all" && word.category !== libraryCategory) return false;
      if (libraryTheme !== "all" && word.themeId !== libraryTheme) return false;
      if (!query) return true;
      return [
        word.word,
        word.meaning,
        word.translation,
        word.category,
        word.level,
        word.theme,
        word.note,
        ...(word.collocations || []),
        word.confusables || ""
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }

  function themeCardTemplate(theme, index) {
    const words = WORDS.filter((word) => word.themeId === theme.id);
    const touched = words.filter((word) => {
      const record = getRecordSnapshot(word.id);
      return record.status !== "new" || record.seen > 0;
    }).length;
    const progressed = words.filter((word) => getRecordSnapshot(word.id).status === "mastered").length;
    const percent = Math.round((touched / Math.max(1, words.length)) * 100);

    return `
      <button class="theme-card ${libraryTheme === theme.id ? "is-active" : ""}" type="button"
        data-action="study-theme" data-theme="${theme.id}"
        style="--theme-tint: ${theme.tint}; --theme-accent: ${theme.accent}; --delay: ${Math.min(index * 35, 280)}ms"
        aria-label="学习${theme.name}词包，${words.length} 个词，已学过 ${touched} 个">
        <span class="theme-card__top">
          <span class="theme-card__icon">${icon(theme.icon)}</span>
          <span class="theme-card__en">${escapeHtml(theme.en)}</span>
        </span>
        <span class="theme-card__title">${escapeHtml(theme.name)}</span>
        <span class="theme-card__desc">${escapeHtml(theme.description)}</span>
        <span class="theme-card__foot">
          <span class="theme-card__count"><b>${touched}</b> / ${words.length} 学过${progressed ? ` · 掌握 ${progressed}` : ""}</span>
          <span class="theme-card__cta">开始 ${icon("arrow-right")}</span>
        </span>
        <span class="theme-card__bar" aria-hidden="true"><i style="width: ${percent}%"></i></span>
      </button>
    `;
  }

  function renderThemeStrip() {
    const strip = $("#themeStrip");
    if (strip) {
      strip.innerHTML = THEMES.map((theme, index) => themeCardTemplate(theme, index)).join("");
    }

    const filter = $("#themeFilter");
    if (filter) {
      if (filter.options.length <= 1) {
        filter.insertAdjacentHTML(
          "beforeend",
          THEMES.map((theme) => `<option value="${theme.id}">${escapeHtml(theme.name)}</option>`).join("")
        );
      }
      filter.value = libraryTheme;
    }
  }

  function wordCardTemplate(word, index) {
    const record = getRecordSnapshot(word.id);
    const statusClass = `status-pill--${record.status}`;
    const statusLabel = STATUS_LABELS[record.status] || STATUS_LABELS.new;
    const isMastered = record.status === "mastered";

    return `
      <article class="word-card ${isMastered ? "word-card--mastered" : ""}" data-word-id="${word.id}"
        style="--delay: ${Math.min(index * 24, 240)}ms">
        <div class="word-card__top">
          <span class="word-card__cat">${escapeHtml(word.category)} <em>·</em> ${escapeHtml(word.theme)}</span>
          <button class="icon-btn" type="button" data-speak="${escapeHtml(word.word)}" aria-label="朗读 ${escapeHtml(word.word)}">
            ${icon("volume")}
          </button>
        </div>
        <div class="word-card__word">${escapeHtml(word.word)}</div>
        <div class="word-card__meta">
          <span class="word-card__phonetic">${escapeHtml(word.phonetic)}</span>
          <span class="word-card__level">${escapeHtml(word.level)}</span>
        </div>
        <p class="word-card__meaning">${escapeHtml(word.meaning)}</p>
        <div class="word-card__foot">
          <span class="status-pill ${statusClass}">${statusLabel}</span>
          <button class="word-card__more" type="button" aria-label="查看 ${escapeHtml(word.word)} 的详情">
            详情 ${icon("arrow-up-right")}
          </button>
        </div>
      </article>
    `;
  }

  function renderWordGrid() {
    const grid = $("#wordGrid");
    const empty = $("#libraryEmpty");
    if (!grid || !empty) return;

    const words = filteredWords();
    const visible = words.slice(0, libraryLimit);
    grid.innerHTML = visible.map((word, index) => wordCardTemplate(word, index)).join("");
    grid.hidden = words.length === 0;
    empty.hidden = words.length !== 0;

    const pager = $("#libraryPager");
    const shown = $("#libShown");
    const matches = $("#libMatches");
    const moreLabel = $("#loadMoreLabel");
    if (pager) pager.hidden = words.length === 0 || visible.length >= words.length;
    if (shown) shown.textContent = visible.length;
    if (matches) matches.textContent = words.length;
    if (moreLabel) {
      moreLabel.textContent = `继续加载 ${Math.min(LIBRARY_PAGE_SIZE, words.length - visible.length)} 个`;
    }
  }

  function renderLibrary() {
    const summary = getStudySummary();
    const masteredElement = $("#libMastered");
    const totalElement = $("#libTotal");
    const meterFill = $("#libMeterFill");
    const searchInput = $("#librarySearch");
    const clearButton = $("#searchClear");
    const categoryFilter = $("#categoryFilter");
    const themeFilter = $("#themeFilter");
    const searchField = $(".search-box");
    const categoryField = $(".select-wrap");
    const themeField = $(".select-wrap--theme");

    if (masteredElement) masteredElement.textContent = summary.mastered;
    if (totalElement) totalElement.textContent = WORDS.length;
    if (meterFill) meterFill.style.width = `${Math.round((summary.mastered / Math.max(1, WORDS.length)) * 100)}%`;
    if (searchInput && searchInput.value !== libraryQuery) searchInput.value = libraryQuery;
    if (clearButton) clearButton.hidden = !libraryQuery;
    if (categoryFilter) categoryFilter.value = libraryCategory;
    if (themeFilter) themeFilter.value = libraryTheme;
    if (searchField) searchField.hidden = false;
    if (categoryField) categoryField.hidden = false;
    if (themeField) themeField.hidden = false;

    renderStatusFilters();
    renderThemeStrip();
    renderWordGrid();
  }

  function clearFilters() {
    libraryQuery = "";
    libraryStatus = "all";
    libraryCategory = "all";
    libraryTheme = "all";
    libraryLimit = LIBRARY_PAGE_SIZE;
    const searchInput = $("#librarySearch");
    const categoryFilter = $("#categoryFilter");
    const themeFilter = $("#themeFilter");
    if (searchInput) searchInput.value = "";
    if (categoryFilter) categoryFilter.value = "all";
    if (themeFilter) themeFilter.value = "all";
    renderLibrary();
    announce("筛选条件已清除。");
  }

  /* ---------- 页面渲染：词义挑战 ---------- */

  function shuffle(list) {
    const copy = [...list];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function buildQuizQuestions() {
    const picked = shuffle(WORDS).slice(0, Math.min(QUIZ_SIZE, WORDS.length));
    return picked.map((word) => {
      const meanings = new Set([word.meaning]);
      const distractors = [];
      const candidates = shuffle(WORDS.filter((candidate) => candidate.id !== word.id));
      for (const candidate of candidates) {
        if (meanings.has(candidate.meaning)) continue;
        meanings.add(candidate.meaning);
        distractors.push(candidate.meaning);
        if (distractors.length === 3) break;
      }
      const options = shuffle([word.meaning, ...distractors]);
      return {
        wordId: word.id,
        options,
        correctIndex: options.indexOf(word.meaning),
        selectedIndex: null
      };
    });
  }

  function quizLandingTemplate() {
    const summary = getStudySummary();
    const weak = getWeakWords(10);
    const best = state.quiz.attempts > 0 ? `${state.quiz.best}/${QUIZ_SIZE}` : "—";

    return `
      <section class="quiz-intro">
        <div class="quiz-intro__copy">
          <p class="eyebrow eyebrow--light"><span>QUICK CHECK</span><i></i><span>词义挑战</span></p>
          <h2 class="quiz-intro__title">把认识，<br><em>变成确定。</em></h2>
          <p class="quiz-intro__lead">
            随机抽取 ${QUIZ_SIZE} 个词，从四个释义里选出最接近的一个。
            答错不扣分，每一次选择都会让记忆更清楚一点。
          </p>
          <div class="quiz-intro__stats">
            <div class="quiz-stat"><b>${best}</b><span>最佳成绩</span></div>
            <div class="quiz-stat"><b>${state.quiz.attempts}</b><span>完成次数</span></div>
            <div class="quiz-stat"><b>${summary.mastered}</b><span>已掌握</span></div>
          </div>
          <div class="quiz-intro__actions">
            <button class="btn btn--primary" type="button" data-action="start-quiz">
              开始挑战 ${icon("arrow-right")}
            </button>
            ${
              weak.length
                ? `<button class="btn btn--ghost" type="button" data-action="review-weak">
                    先复习薄弱词
                  </button>`
                : ""
            }
          </div>
        </div>
        <div class="quiz-visual" aria-hidden="true">
          <div class="quiz-orbit"></div>
          <div class="quiz-mark">?</div>
          <div class="quiz-float quiz-float--one">coherent<small>连贯的</small></div>
          <div class="quiz-float quiz-float--two">thrive<small>成长</small></div>
          <div class="quiz-float quiz-float--three">subtle<small>微妙的</small></div>
        </div>
      </section>
      <div class="quiz-notes">
        <div class="quiz-note">
          <span class="quiz-note__icon">${icon("target")}</span>
          <div><strong>${QUIZ_SIZE} 道随机题</strong><p>覆盖词库中的不同分类，每次都不一样。</p></div>
        </div>
        <div class="quiz-note">
          <span class="quiz-note__icon">${icon("clock")}</span>
          <div><strong>约 2 分钟</strong><p>短暂专注，给今天的学习一个反馈。</p></div>
        </div>
        <div class="quiz-note">
          <span class="quiz-note__icon">${icon("lightbulb")}</span>
          <div><strong>即时解析</strong><p>选错也会看到正确答案，不留疑问。</p></div>
        </div>
      </div>
    `;
  }

  function quizActiveTemplate() {
    const question = quizState.questions[quizState.index];
    if (!question) return quizLandingTemplate();
    const word = WORD_MAP.get(question.wordId);
    if (!word) return quizLandingTemplate();

    const total = quizState.questions.length;
    const answered = question.selectedIndex !== null;
    const isCorrect = answered && question.selectedIndex === question.correctIndex;
    const progress = Math.round(((quizState.index + (answered ? 1 : 0)) / total) * 100);
    const isLast = quizState.index >= total - 1;
    const wordLengthClass =
      word.word.length >= 12 ? " is-xlong" : word.word.length >= 10 ? " is-long" : "";

    const options = question.options
      .map((option, index) => {
        let optionClass = "";
        if (answered) {
          if (index === question.correctIndex) optionClass = "is-correct";
          else if (index === question.selectedIndex) optionClass = "is-wrong";
        }
        return `
          <button class="quiz-option ${optionClass}" type="button" data-action="quiz-option"
            data-index="${index}" ${answered ? "disabled" : ""}>
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHtml(option)}</span>
          </button>
        `;
      })
      .join("");

    const feedback = answered
      ? `
        <div class="quiz-feedback ${isCorrect ? "" : "is-wrong"}" aria-live="polite">
          <div class="quiz-feedback__main">
            <span class="feedback-icon">${icon(isCorrect ? "check" : "x")}</span>
            <div class="quiz-feedback__text">
              <strong>${isCorrect ? "答对了。" : "再记一次。"}</strong>
              <span>${isCorrect ? `${escapeHtml(word.pos)} ${escapeHtml(word.meaning)}` : `正确答案：${escapeHtml(question.options[question.correctIndex])}`}</span>
            </div>
          </div>
          <button class="btn btn--ink" type="button" data-action="quiz-next">
            ${isLast ? "查看结果" : "下一题"} ${icon("arrow-right")}
          </button>
        </div>
      `
      : "";

    return `
      <div class="quiz-shell">
        <section class="quiz-active">
          <div class="quiz-active__top">
            <div class="quiz-active__labels">
              <span>第 <b>${quizState.index + 1}</b> / ${total} 题</span>
              <span>·</span>
              <span>${escapeHtml(word.category)} · ${escapeHtml(word.theme)}</span>
            </div>
            <span class="quiz-score">得分 <b>${quizState.score}</b></span>
          </div>
          <div class="quiz-progress"><i style="width: ${progress}%"></i></div>
          <div class="quiz-question-head">
            <h2 class="${wordLengthClass.trim()}">${escapeHtml(word.word)}</h2>
            <div class="word-meta">
              <span class="word-phonetic">${escapeHtml(word.phonetic)}</span>
              <button class="icon-btn" type="button" data-speak="${escapeHtml(word.word)}" aria-label="朗读 ${escapeHtml(word.word)}">
                ${icon("volume")}
              </button>
            </div>
          </div>
          <p class="quiz-prompt">选出最接近的中文释义</p>
          <div class="quiz-options">${options}</div>
          ${feedback}
          <div class="quiz-foot">
            <span><kbd>1</kbd>–<kbd>4</kbd> 选择答案 · <kbd>Enter</kbd> 继续</span>
            <button class="quiz-exit" type="button" data-action="quiz-exit">退出本次挑战</button>
          </div>
        </section>
      </div>
    `;
  }

  function resultMessage(score, total) {
    const ratio = score / total;
    if (score === total) return "满分。不是运气，是你真的记住了这些词。";
    if (ratio >= 0.8) return "状态很好。离熟练，只差下一次不经意的重逢。";
    if (ratio >= 0.6) return "基础已经在了。把错题再看一眼，它们会更牢固。";
    return "别急。先从错题开始，记忆本来就是一个反复靠近的过程。";
  }

  function quizResultTemplate() {
    const total = quizState.questions.length;
    const score = quizState.score;
    const ratio = total ? Math.round((score / total) * 100) : 0;
    const best = state.quiz.best;

    const review = quizState.answers
      .map((answer) => {
        const word = WORD_MAP.get(answer.wordId);
        if (!word) return "";
        return `
          <div class="review-row">
            <span class="review-mark ${answer.correct ? "is-correct" : "is-wrong"}">
              ${icon(answer.correct ? "check" : "x")}
            </span>
            <div class="review-word">
              <strong>${escapeHtml(word.word)}</strong><span>${escapeHtml(word.phonetic)}</span>
            </div>
            <div class="review-answer">
              ${escapeHtml(word.meaning)}
              ${answer.correct ? "" : `<small>你的选择：${escapeHtml(answer.selected)}</small>`}
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="quiz-shell">
        <section class="quiz-result-hero">
          <p class="result-eyebrow">CHALLENGE COMPLETE · 本轮完成</p>
          <div class="result-score"><strong>${score}</strong><span>/ ${total}</span></div>
          <p class="result-message">${resultMessage(score, total)}</p>
          <span class="result-badge">${icon("award")} 历史最佳 ${best} / ${total}</span>
          <div class="result-stats">
            <div class="result-stat"><b>${score}</b><span>答对</span></div>
            <div class="result-stat"><b>${total - score}</b><span>答错</span></div>
            <div class="result-stat"><b>${ratio}%</b><span>正确率</span></div>
          </div>
          <div class="result-actions">
            <button class="btn btn--primary" type="button" data-action="quiz-retry">
              再来一轮 ${icon("refresh")}
            </button>
            <button class="btn btn--cream" type="button" data-action="quiz-home">
              返回挑战首页
            </button>
          </div>
        </section>
        <section class="quiz-review">
          <div class="quiz-review__head">
            <h2>逐题回顾</h2>
            <span>${quizState.answers.filter((answer) => !answer.correct).length} 题值得再看一眼</span>
          </div>
          ${review}
        </section>
      </div>
    `;
  }

  function renderQuiz() {
    const landing = $("#quizLanding");
    const container = $("#quizRoot");
    if (!landing || !container) return;

    if (quizState.phase === "landing") {
      landing.hidden = false;
      landing.innerHTML = quizLandingTemplate();
      container.hidden = true;
      container.innerHTML = "";
      return;
    }

    landing.hidden = true;
    container.hidden = false;
    if (quizState.phase === "active") {
      container.innerHTML = quizActiveTemplate();
    } else {
      container.innerHTML = quizResultTemplate();
    }
  }

  function startQuiz() {
    if (PAGE !== "quiz") {
      window.location.href = "quiz.html";
      return;
    }
    quizState = {
      phase: "active",
      questions: buildQuizQuestions(),
      index: 0,
      score: 0,
      answers: []
    };
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectQuizOption(index) {
    if (quizState.phase !== "active") return;
    const question = quizState.questions[quizState.index];
    if (!question || question.selectedIndex !== null) return;
    if (!Number.isInteger(index) || index < 0 || index >= question.options.length) return;

    const selected = question.options[index];
    const correct = index === question.correctIndex;
    question.selectedIndex = index;

    if (correct) quizState.score += 1;
    quizState.answers.push({
      wordId: question.wordId,
      selected,
      correct
    });

    const result = applyAnswer(question.wordId, correct);
    saveState();
    updateChrome();
    renderQuiz();

    announce(correct ? "回答正确。" : `回答错误，正确答案是${question.options[question.correctIndex]}。`);

    if (result.crossedGoal) {
      showToast(`今日 ${DAY_GOAL} 个词完成，目标达成。`, true);
    }
  }

  function finishQuiz() {
    const total = quizState.questions.length;
    state.quiz.attempts = (Number(state.quiz.attempts) || 0) + 1;
    state.quiz.best = Math.max(Number(state.quiz.best) || 0, quizState.score);
    saveState();
    quizState.phase = "result";
    renderQuiz();
    updateChrome();
    burstConfetti(quizState.score >= Math.ceil(total * 0.8) ? 28 : 12);
    announce(`挑战完成，答对 ${quizState.score} 题，共 ${total} 题。`);
  }

  function nextQuizQuestion() {
    if (quizState.phase !== "active") return;
    const question = quizState.questions[quizState.index];
    if (!question || question.selectedIndex === null) return;

    if (quizState.index >= quizState.questions.length - 1) {
      finishQuiz();
      return;
    }

    quizState.index += 1;
    renderQuiz();
  }

  function resetQuizToLanding() {
    quizState = {
      phase: "landing",
      questions: [],
      index: 0,
      score: 0,
      answers: []
    };
    renderQuiz();
  }

  /* ---------- 页面渲染：学习统计 ---------- */

  function statsKpiTemplate(label, value, unit, note, iconName) {
    return `
      <article class="kpi-card">
        <div class="kpi-card__top">
          <span class="kpi-card__label">${label}</span>
          <span class="kpi-card__icon">${icon(iconName)}</span>
        </div>
        <div class="kpi-card__value">${value}${unit ? `<small>${unit}</small>` : ""}</div>
        <p class="kpi-card__note">${note}</p>
      </article>
    `;
  }

  function renderStats() {
    const container = $("#statsRoot");
    if (!container) return;

    ensureDailyState();
    ensureStreakValidity();

    const summary = getStudySummary();
    const total = Math.max(1, WORDS.length);
    const week = getLastDays(7);
    const weekCounts = week.map((day) => {
      if (day.key === todayKey()) {
        return Math.max(Number(state.history[day.key]) || 0, state.daily.studied.length);
      }
      return Number(state.history[day.key]) || 0;
    });
    const weekTotal = weekCounts.reduce((sum, count) => sum + count, 0);
    const maxWeek = Math.max(1, ...weekCounts);
    const masteredPercent = Math.round((summary.mastered / total) * 100);
    const todayCount = state.daily.studied.length;

    const chart = week
      .map((day, index) => {
        const count = weekCounts[index];
        const height = count > 0 ? Math.max(9, Math.round((count / maxWeek) * 100)) : 2;
        return `
          <div class="chart-col ${day.isToday ? "is-today" : ""}" title="${day.dateLabel} · ${count} 个词">
            <span class="chart-value">${count > 0 ? count : ""}</span>
            <div class="chart-bar-wrap"><div class="chart-bar" style="height: ${height}%"></div></div>
            <span class="chart-day">${day.day}</span>
            <span class="chart-date">${day.dateLabel}</span>
          </div>
        `;
      })
      .join("");

    const categoryRows = CATEGORIES.map((category) => {
      const words = WORDS.filter((word) => word.category === category);
      const mastered = words.filter((word) => getRecordSnapshot(word.id).status === "mastered").length;
      const percent = Math.round((mastered / Math.max(1, words.length)) * 100);
      return `
        <div class="category-row">
          <span class="category-name">${escapeHtml(category)}</span>
          <span class="category-bar"><i style="width: ${percent}%"></i></span>
          <span class="category-count"><b>${mastered}</b> / ${words.length}</span>
        </div>
      `;
    }).join("");

    const themeRows = THEMES.map((theme) => {
      const words = WORDS.filter((word) => word.themeId === theme.id);
      const touched = words.filter((word) => {
        const record = getRecordSnapshot(word.id);
        return record.status !== "new" || record.seen > 0;
      }).length;
      const mastered = words.filter((word) => getRecordSnapshot(word.id).status === "mastered").length;
      const percent = Math.round((mastered / Math.max(1, words.length)) * 100);

      return `
        <button class="theme-stat" type="button" data-action="study-theme" data-theme="${theme.id}"
          style="--theme-tint: ${theme.tint}; --theme-accent: ${theme.accent}"
          aria-label="学习${theme.name}词包，已学过 ${touched} 个，掌握 ${mastered} 个">
          <span class="theme-stat__top">
            <span class="theme-stat__icon">${icon(theme.icon)}</span>
            <span class="theme-stat__name"><strong>${escapeHtml(theme.name)}</strong><span>${escapeHtml(theme.en)}</span></span>
            <span class="theme-stat__score">${mastered}<small>/${words.length}</small></span>
          </span>
          <span class="theme-stat__bar" aria-hidden="true"><i style="width: ${percent}%"></i></span>
          <span class="theme-stat__meta"><span>学过 ${touched} 个</span><span>掌握 ${mastered} 个</span></span>
        </button>
      `;
    }).join("");
    const exploredThemes = THEMES.filter((theme) =>
      WORDS.some((word) => {
        if (word.themeId !== theme.id) return false;
        const record = getRecordSnapshot(word.id);
        return record.status !== "new" || record.seen > 0;
      })
    ).length;

    const weak = getWeakWords(5);
    const weakBody = weak.length
      ? `
        <div class="weak-list">
          ${weak
            .map(
              (item) => `
              <div class="weak-item" data-word-id="${item.word.id}" tabindex="0" role="button" aria-label="查看 ${escapeHtml(item.word.word)} 的详情">
                <div class="weak-word">
                  <strong>${escapeHtml(item.word.word)}</strong>
                  <span>${escapeHtml(item.word.meaning)}</span>
                </div>
                <span class="weak-count">错 ${item.record.wrong} 次</span>
              </div>
            `
            )
            .join("")}
        </div>
        <button class="btn btn--ink stats-review-button" type="button" data-action="review-weak">
          复习这些薄弱词 ${icon("arrow-right")}
        </button>
      `
      : `
        <div class="weak-empty">
          <span class="weak-empty__icon">${icon("check")}</span>
          <strong>还没有错词记录</strong>
          <p>继续学习或挑战，需要多看一眼的词会出现在这里。</p>
        </div>
      `;

    container.innerHTML = `
      <div class="stats-kpis">
        ${statsKpiTemplate("已掌握", summary.mastered, `/ ${WORDS.length}`, `${masteredPercent}% 的词库已经掌握`, "book")}
        ${statsKpiTemplate("学习中", summary.learning, "个", "正在反复遇见的词", "layers")}
        ${statsKpiTemplate("连续学习", state.streak.count || 0, "天", todayCount > 0 ? `今天已学习 ${todayCount} 个词` : "今天还没有开始", "flame")}
        ${statsKpiTemplate("平均正确率", summary.accuracy, "%", summary.totalAnswers ? `基于 ${summary.totalAnswers} 次作答` : "还没有作答记录", "target")}
      </div>

      <div class="stats-grid">
        <section class="stats-card">
          <div class="stats-card__head">
            <div>
              <h2>最近 7 天</h2>
              <p>每天真正学过的词数 · 本周共 ${weekTotal} 个</p>
            </div>
            <span class="chart-tag">近 7 天</span>
          </div>
          <div class="chart">${chart}</div>
          ${weekTotal === 0 ? `<p class="chart-empty-note">本周还没有学习记录，今天的第一个词会点亮这里。</p>` : ""}
        </section>

        <section class="stats-card">
          <div class="stats-card__head">
            <div>
              <h2>掌握进度</h2>
              <p>同一个词答对两次，才会被标记为掌握</p>
            </div>
            <span class="chart-tag">${summary.mastered} / ${WORDS.length}</span>
          </div>
          <div class="donut-area">
            <div class="donut" style="--p: ${masteredPercent}%">
              <div class="donut__center"><strong>${masteredPercent}%</strong><span>已掌握</span></div>
            </div>
            <div class="donut-legend">
              <span class="legend-item"><i></i>已掌握 <b>${summary.mastered}</b></span>
              <span class="legend-item"><i></i>学习中 <b>${summary.learning}</b></span>
              <span class="legend-item"><i></i>新词 <b>${summary.new}</b></span>
            </div>
          </div>
        </section>
      </div>

      <section class="stats-card theme-stats-card">
        <div class="stats-card__head">
          <div>
            <h2>主题足迹</h2>
            <p>12 个生活场景，点一个就能接着学 · 已探索 ${exploredThemes} / ${THEMES.length} 个</p>
          </div>
          <span class="chart-tag">场景</span>
        </div>
        <div class="theme-stat-grid">${themeRows}</div>
      </section>

      <div class="stats-grid stats-grid--bottom">
        <section class="stats-card">
          <div class="stats-card__head">
            <div>
              <h2>分类进度</h2>
              <p>四个分类，看看哪一块还需要多停留一会儿</p>
            </div>
            <span class="chart-tag">分类</span>
          </div>
          <div class="category-list">${categoryRows}</div>
        </section>

        <section class="stats-card">
          <div class="stats-card__head">
            <div>
              <h2>需要多看一眼</h2>
              <p>按错误次数整理，点击可以查看详情</p>
            </div>
            <span class="chart-tag">${weak.length ? `${weak.length} 个` : "暂无"}</span>
          </div>
          ${weakBody}
        </section>
      </div>

      <div class="stats-foot">
        <span>学习记录只保存在当前浏览器中，不会上传到任何服务器。</span>
        <button class="text-btn" type="button" data-action="reset-progress">
          ${icon("trash")} 重置学习数据
        </button>
      </div>
    `;
  }

  /* ---------- 单词详情 ---------- */

  function dialogTemplate(id) {
    const word = WORD_MAP.get(id);
    if (!word) return "";
    const record = getRecordSnapshot(id);
    const status = STATUS_LABELS[record.status] || STATUS_LABELS.new;
    const isMastered = record.status === "mastered";
    const progressText =
      record.seen > 0 ? `学习 ${record.seen} 次 · 正确 ${record.correct} 次` : "还没有学习记录";

    return `
      <div class="dialog-topline">${escapeHtml(word.category)}<i></i>${escapeHtml(word.theme)}<i></i>${escapeHtml(word.level)}</div>
      <div class="dialog-word-row">
        <div>
          <h2 class="dialog-word" id="dialogTitle">${escapeHtml(word.word)}</h2>
          <div class="dialog-phonetic">
            <span>${escapeHtml(word.phonetic)}</span>
            <button class="icon-btn" type="button" data-speak="${escapeHtml(word.word)}" aria-label="朗读 ${escapeHtml(word.word)}">
              ${icon("volume")}
            </button>
          </div>
        </div>
      </div>
      <div class="dialog-meaning">
        <span class="pos-chip">${escapeHtml(word.pos)}</span>
        <p>${escapeHtml(word.meaning)}</p>
      </div>
      <div class="dialog-example">
        <p class="en">${escapeHtml(word.example)}</p>
        <p class="cn">${escapeHtml(word.translation)}</p>
      </div>
      ${collocationsTemplate(word, "collocation-box--light")}
      <div class="dialog-note">
        ${icon("lightbulb")}
        <span>${escapeHtml(word.note)}</span>
      </div>
      ${confusableTemplate(word, "confusable-note--light")}
      <div class="dialog-bottom">
        <div class="dialog-bottom__status">
          <span class="status-pill status-pill--${record.status}">${status}</span>
          <span>${progressText}</span>
        </div>
        <button class="btn ${isMastered ? "btn--ghost" : "btn--primary"}" type="button"
          data-action="toggle-mastery" data-id="${word.id}">
          ${isMastered ? "重新加入复习" : "标记为已掌握"}
        </button>
      </div>
    `;
  }

  function openWord(id) {
    const dialog = $("#wordDialog");
    const content = $("#dialogContent");
    if (!dialog || !content || !WORD_MAP.has(id)) return;
    content.innerHTML = dialogTemplate(id);
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.classList.add("dialog-open");
  }

  function closeWordDialog() {
    const dialog = $("#wordDialog");
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    document.body.classList.remove("dialog-open");
  }

  function toggleMastery(id) {
    if (!WORD_MAP.has(id)) return;
    const record = ensureRecord(id);
    if (record.status === "mastered") {
      record.status = "learning";
      record.knownStreak = 0;
      showToast("已重新加入复习。");
    } else {
      record.status = "mastered";
      record.knownStreak = Math.max(2, Number(record.knownStreak) || 0);
      showToast("已标记为掌握。");
    }
    saveState();
    updateChrome();
    $("#dialogContent").innerHTML = dialogTemplate(id);
    if (PAGE === "library") renderLibrary();
    if (PAGE === "stats") renderStats();
    if (PAGE === "today") renderToday();
  }

  /* ---------- 复习薄弱词 ---------- */

  function reviewWeakWords() {
    const weak = getWeakWords(10);
    if (!weak.length) {
      showToast("目前还没有错词记录，先学一组吧。");
      return;
    }
    if (PAGE !== "today") {
      window.location.href = "index.html?review=weak";
      return;
    }
    startSession(weak.map((item) => item.word.id));
  }

  /* ---------- 页面框架 ---------- */

  function updateChrome() {
    ensureStreakValidity();
    const streak = state.streak.count || 0;
    const todayCount = state.daily?.studied?.length || 0;

    $$("[data-streak]").forEach((element) => {
      element.textContent = streak;
    });

    const note = $("[data-streak-note]");
    if (note) {
      if (todayCount > 0) {
        note.textContent = `今天已拾起 ${todayCount} 个词，保持这个节奏。`;
      } else if (streak > 0) {
        note.textContent = "别让火苗熄灭，今天还没有开始。";
      } else {
        note.textContent = "今天开始，记录会被点亮。";
      }
    }

    const sidebarDots = $("#sidebarWeekDots");
    if (sidebarDots) {
      const week = getLastDays(7);
      sidebarDots.innerHTML = week
        .map((day) => {
          const count =
            day.key === todayKey()
              ? Math.max(Number(state.history[day.key]) || 0, state.daily.studied.length)
              : Number(state.history[day.key]) || 0;
          return `<span class="${count > 0 ? "is-on" : ""} ${day.isToday ? "is-today" : ""}"></span>`;
        })
        .join("");
    }

    const topbarDate = $("#topbarDate");
    if (topbarDate) {
      const now = new Date();
      topbarDate.textContent = `${now.getMonth() + 1}月${now.getDate()}日 · 周${WEEK_SHORT[now.getDay()]}`;
    }
  }

  function renderPage() {
    updateChrome();
    if (PAGE === "today") renderToday();
    else if (PAGE === "library") renderLibrary();
    else if (PAGE === "quiz") renderQuiz();
    else if (PAGE === "stats") renderStats();
  }

  function applyEntryParams() {
    if (PAGE !== "today") return;
    const params = new URLSearchParams(window.location.search);
    const themeId = params.get("theme");
    const review = params.get("review");
    let changed = false;

    if (themeId && THEME_MAP.has(themeId)) {
      session = buildThemeSession(themeId);
      showToast(`「${THEME_MAP.get(themeId).name}」词包已准备好。`);
      changed = true;
    } else if (review === "weak") {
      const weak = getWeakWords(10);
      if (weak.length) {
        session = buildSession(weak.map((item) => item.word.id));
        showToast("已整理好复习词，慢慢来。");
      } else {
        showToast("目前还没有错词记录，先学一组吧。");
      }
      changed = true;
    }

    if (changed) {
      history.replaceState(null, "", window.location.pathname);
    }
  }

  /* ---------- 朗读 / 提示 / 动效 ---------- */

  function speak(word) {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      showToast("当前浏览器不支持语音朗读。");
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.84;
      utterance.pitch = 1;
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find((voice) => /^en-US/i.test(voice.lang)) || voices.find((voice) => /^en/i.test(voice.lang));
      if (preferred) utterance.voice = preferred;
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      showToast("朗读暂时不可用。");
    }
  }

  function showToast(message, warm = false) {
    const toast = $("#toast");
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle("is-warm", Boolean(warm));
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  function announce(message) {
    const region = $("#liveRegion");
    if (!region) return;
    region.textContent = "";
    window.setTimeout(() => {
      region.textContent = message;
    }, 30);
  }

  function burstConfetti(count = 24) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layer = document.createElement("div");
    layer.className = "confetti-layer";
    const colors = ["#e77756", "#f2b18f", "#f7f1e3", "#9bb5a5", "#d8c49f"];
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.setProperty("--x", `${8 + Math.random() * 84}%`);
      piece.style.setProperty("--dx", `${-90 + Math.random() * 180}px`);
      piece.style.setProperty("--d", `${1.5 + Math.random() * 1.1}s`);
      piece.style.setProperty("--delay", `${Math.random() * 0.25}s`);
      piece.style.setProperty("--c", colors[Math.floor(Math.random() * colors.length)]);
      fragment.appendChild(piece);
    }

    layer.appendChild(fragment);
    document.body.appendChild(layer);
    window.setTimeout(() => layer.remove(), 3200);
  }

  /* ---------- 重置 ---------- */

  function resetProgress() {
    const confirmed = window.confirm("确定要清除全部学习进度吗？这个操作无法撤销。");
    if (!confirmed) return;

    closeWordDialog();
    state = createDefaultState();
    state.history[todayKey()] = 0;
    saveState();
    session = null;
    resetQuizToLanding();
    ensureDailyState();
    ensureSession();
    updateChrome();
    renderPage();
    showToast("学习数据已重置。");
  }

  /* ---------- 事件 ---------- */

  function handleAction(action, element) {
    switch (action) {
      case "reveal":
        revealCurrent();
        break;
      case "answer-again":
        answerCurrent(false);
        break;
      case "answer-known":
        answerCurrent(true);
        break;
      case "restart-session":
        restartSession();
        break;
      case "go-quiz":
        if (PAGE !== "quiz") window.location.href = "quiz.html";
        break;
      case "filter-status": {
        libraryStatus = element.dataset.filter || "all";
        libraryLimit = LIBRARY_PAGE_SIZE;
        renderStatusFilters();
        renderWordGrid();
        break;
      }
      case "study-theme":
        startThemeSession(element.dataset.theme);
        break;
      case "scroll-themes": {
        const strip = $("#themeStrip");
        const direction = Number(element.dataset.dir) || 1;
        if (strip) {
          strip.scrollBy({
            left: direction * Math.max(320, strip.clientWidth * 0.72),
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
        }
        break;
      }
      case "load-more":
        libraryLimit += LIBRARY_PAGE_SIZE;
        renderWordGrid();
        announce(`已加载 ${$("#libShown")?.textContent || ""} 个词。`);
        break;
      case "clear-filters":
        clearFilters();
        break;
      case "start-quiz":
        startQuiz();
        break;
      case "quiz-option": {
        const index = Number(element.dataset.index);
        selectQuizOption(index);
        break;
      }
      case "quiz-next":
        nextQuizQuestion();
        break;
      case "quiz-retry":
        startQuiz();
        break;
      case "quiz-home":
        resetQuizToLanding();
        break;
      case "quiz-exit":
        resetQuizToLanding();
        showToast("已退出本次挑战。");
        break;
      case "review-weak":
        reviewWeakWords();
        break;
      case "toggle-mastery":
        toggleMastery(element.dataset.id);
        break;
      case "close-dialog":
        closeWordDialog();
        break;
      case "reset-progress":
        resetProgress();
        break;
      default:
        break;
    }
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const speakTarget = event.target.closest("[data-speak]");
      if (speakTarget) {
        event.preventDefault();
        speak(speakTarget.dataset.speak);
        return;
      }

      const actionTarget = event.target.closest("[data-action]");
      if (actionTarget) {
        event.preventDefault();
        handleAction(actionTarget.dataset.action, actionTarget);
        return;
      }

      const wordTarget = event.target.closest("[data-word-id]");
      if (wordTarget) {
        openWord(wordTarget.dataset.wordId);
      }
    });

    const searchInput = $("#librarySearch");
    const searchClear = $("#searchClear");
    const categoryFilter = $("#categoryFilter");
    const themeFilter = $("#themeFilter");

    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        libraryQuery = event.target.value;
        libraryLimit = LIBRARY_PAGE_SIZE;
        if (searchClear) searchClear.hidden = !libraryQuery;
        renderWordGrid();
      });
    }

    if (searchClear) {
      searchClear.addEventListener("click", (event) => {
        event.preventDefault();
        libraryQuery = "";
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }
        searchClear.hidden = true;
        libraryLimit = LIBRARY_PAGE_SIZE;
        renderWordGrid();
      });
    }

    if (categoryFilter) {
      categoryFilter.addEventListener("change", (event) => {
        libraryCategory = event.target.value;
        libraryLimit = LIBRARY_PAGE_SIZE;
        renderWordGrid();
      });
    }

    if (themeFilter) {
      themeFilter.addEventListener("change", (event) => {
        libraryTheme = event.target.value;
        libraryLimit = LIBRARY_PAGE_SIZE;
        renderThemeStrip();
        renderWordGrid();
      });
    }

    const dialog = $("#wordDialog");
    if (dialog) {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeWordDialog();
      });
      dialog.addEventListener("close", () => {
        document.body.classList.remove("dialog-open");
      });
    }

    document.addEventListener("keydown", (event) => {
      const target = event.target;
      const tagName = target?.tagName?.toLowerCase();
      if (["input", "textarea", "select"].includes(tagName) || target?.isContentEditable) return;

      const dialog = $("#wordDialog");
      if (dialog && dialog.open) return;

      if (
        (event.key === "Enter" || event.code === "Space") &&
        target?.matches?.(".word-card, .weak-item")
      ) {
        event.preventDefault();
        openWord(target.dataset.wordId);
        return;
      }

      const interactive = Boolean(
        target?.closest?.("button, a, [role='button'], [contenteditable='true']")
      );

      if (PAGE === "today") {
        if (event.code === "Space" && !interactive) {
          if (session && !session.revealed && session.index < session.ids.length) {
            event.preventDefault();
            revealCurrent();
          }
          return;
        }
        if (session && session.revealed && session.index < session.ids.length) {
          if (event.key === "1") {
            event.preventDefault();
            answerCurrent(false);
            return;
          }
          if (event.key === "2") {
            event.preventDefault();
            answerCurrent(true);
            return;
          }
        }
      }

      if (PAGE === "quiz" && quizState.phase === "active") {
        if (/^[1-4]$/.test(event.key)) {
          event.preventDefault();
          selectQuizOption(Number(event.key) - 1);
          return;
        }
        if (event.key === "Enter" && !interactive) {
          const question = quizState.questions[quizState.index];
          if (question && question.selectedIndex !== null) {
            event.preventDefault();
            nextQuizQuestion();
          }
        }
      }

    });

    window.addEventListener("beforeunload", saveState);
  }

  function init() {
    if (!WORDS.length) {
      const card = $("#studyCard");
      if (card) {
        card.innerHTML = `<div class="loading-state"><span class="loading-state__mark">!</span><p>词库加载失败，请检查 data.js。</p></div>`;
      }
      return;
    }

    ensureDailyState();
    ensureStreakValidity();
    state.history[todayKey()] = Math.max(
      Number(state.history[todayKey()]) || 0,
      state.daily.studied.length
    );
    saveState();

    if (PAGE === "today") {
      ensureSession();
      applyEntryParams();
    }

    bindEvents();
    renderPage();
  }

  init();
})();
