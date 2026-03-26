(function () {
  // === THEME: restore immediately ===
  var saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  function isDark() {
    var dt = document.documentElement.getAttribute('data-theme');
    if (dt === 'dark') return true;
    if (dt === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    // Update ALL theme buttons on page
    document.querySelectorAll('.theme-btn').forEach(function (b) {
      b.textContent = dark ? '\u2600' : '\u263E';
    });
  }

  // === Ensure theme button exists ===
  function ensureThemeButton() {
    var existing = document.getElementById('theme-toggle');
    if (existing) {
      existing.textContent = isDark() ? '\u2600' : '\u263E';
      existing.addEventListener('click', function () { applyTheme(!isDark()); });
      return;
    }
    // Create button and insert into first nav-like container found
    var targets = [
      document.querySelector('.nav-right'),
      document.querySelector('.controls'),
      document.querySelector('nav'),
      document.querySelector('.nav-container'),
      document.querySelector('.glass-header .container')
    ];
    var parent = null;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i]) { parent = targets[i]; break; }
    }
    if (!parent) return;
    var btn = document.createElement('button');
    btn.className = 'theme-btn';
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.style.cssText = 'font-size:14px;padding:4px 10px;border:1px solid var(--border,rgba(255,255,255,0.1));border-radius:100px;background:transparent;color:var(--t3,#999);cursor:pointer;line-height:1';
    btn.textContent = isDark() ? '\u2600' : '\u263E';
    btn.addEventListener('click', function () { applyTheme(!isDark()); });
    parent.insertBefore(btn, parent.firstChild);
  }

  // === LANGUAGE toggle ===
  function setupLang() {
    var langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;
    var lang = 'ru';
    langBtn.addEventListener('click', function () {
      lang = lang === 'ru' ? 'en' : 'ru';
      langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-ru]').forEach(function (el) {
        var t = el.getAttribute('data-' + lang);
        if (!t) return;
        if (el.tagName === 'INPUT') el.value = t;
        else el.textContent = t;
      });
    });
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ensureThemeButton();
      setupLang();
    });
  } else {
    ensureThemeButton();
    setupLang();
  }
})();
