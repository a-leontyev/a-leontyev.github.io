// Language toggle — RU/EN via data attributes
(function () {
  var lang = 'ru';
  var btn = document.getElementById('lang-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    lang = lang === 'ru' ? 'en' : 'ru';
    btn.textContent = lang === 'ru' ? 'EN' : 'RU';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-ru]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (!text) return;
      if (el.tagName === 'INPUT') el.value = text;
      else el.textContent = text;
    });
  });
})();
