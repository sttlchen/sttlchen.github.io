/* ── Mobile nav fix ─────────────────────────────────────────────────────────
   Force ALL nav items into the hamburger dropdown on narrow screens and
   keep CV pinned to the top of the list.
   ───────────────────────────────────────────────────────────────────────── */

function fixMobileNav() {
  if (window.innerWidth >= 925) return;

  var nav          = document.getElementById('site-nav');
  if (!nav) return;

  var visibleLinks = nav.querySelector('.visible-links');
  var hiddenLinks  = nav.querySelector('.hidden-links');
  var hamburger    = nav.querySelector('button');
  if (!visibleLinks || !hiddenLinks) return;

  // Move any items already in hidden-links back to visible first (reset greedy-nav state)
  Array.from(hiddenLinks.querySelectorAll('li')).forEach(function (item) {
    visibleLinks.appendChild(item);
  });

  // Now move every non-site-title item from visible → hidden, preserving nav order
  Array.from(visibleLinks.querySelectorAll('li:not(.masthead__menu-item--lg)')).forEach(function (item) {
    hiddenLinks.appendChild(item);
  });

  // Ensure the hamburger button is shown
  if (hamburger) hamburger.classList.remove('hidden');

  // Pin CV to the top of the dropdown
  var items = hiddenLinks.querySelectorAll('li');
  for (var i = 0; i < items.length; i++) {
    var a = items[i].querySelector('a');
    if (a && a.textContent.trim() === 'CV') {
      if (i > 0) hiddenLinks.insertBefore(items[i], hiddenLinks.firstChild);
      break;
    }
  }
}

// Run after greedy-nav has had time to initialise, and again on resize
setTimeout(fixMobileNav, 200);
window.addEventListener('resize', function () { setTimeout(fixMobileNav, 200); });


/* ── Theme toggle ────────────────────────────────────────────────────────── */

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
