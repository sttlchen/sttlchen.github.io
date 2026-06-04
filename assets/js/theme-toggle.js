/* Move CV to top of hamburger dropdown whenever the greedy nav updates */
function pinCVFirst() {
  var hidden = document.querySelector('.greedy-nav .hidden-links');
  if (!hidden) return;
  var items = hidden.querySelectorAll('li');
  for (var i = 1; i < items.length; i++) {
    var a = items[i].querySelector('a');
    if (a && a.textContent.trim() === 'CV') {
      hidden.insertBefore(items[i], hidden.firstChild);
      break;
    }
  }
}
setTimeout(pinCVFirst, 150);
window.addEventListener('resize', function () { setTimeout(pinCVFirst, 150); });

(function () {
  var btn  = document.getElementById('theme-toggle');
  var root = document.documentElement;

  function currentTheme() {
    var saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (btn) {
      var icon = btn.querySelector('i');
      if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  applyTheme(currentTheme());

  if (btn) {
    btn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }
})();
