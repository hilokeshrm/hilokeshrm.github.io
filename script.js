/* Lokesh R M — portfolio. Small, dependency-free (same behaviour as theanve.com). */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;

  /* nav backdrop once the page moves */
  var nav = doc.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* theme toggle — system by default, then whatever was picked last */
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : mq.matches;
  }
  doc.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('lrm-theme', next); } catch (e) {}
    });
  });

  /* mobile menu */
  var btn = doc.getElementById('menuBtn');
  var menu = doc.getElementById('menu');
  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    doc.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 960) setMenu(false); });

  if ('IntersectionObserver' in window) {
    /* reveal on scroll — once */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    doc.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    /* highlight the section you're in */
    var links = [].slice.call(doc.querySelectorAll('.nav-links a'));
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) {
          var on = l.getAttribute('href') === '#' + e.target.id;
          l.classList.toggle('on', on);
          if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    doc.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  } else {
    doc.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* project brief → email (no backend) */
  var brief = doc.getElementById('brief');
  if (brief) brief.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(brief), lines = [];
    f.forEach(function (v, k) { if (v) lines.push(k + ': ' + v); });
    var subject = 'Project brief: ' + (f.get('Type') || 'New project') + ' (' + (f.get('Name') || '') + ')';
    location.href = 'mailto:' + brief.dataset.mailto + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n\n'));
  });

  /* phone hire bar: show after the hero, hide once the contact section is on screen */
  var dock = doc.getElementById('dock'), hero = doc.getElementById('top'), contact = doc.getElementById('contact');
  if (dock) {
    var shown = null;
    function sync() {
      var past = hero.getBoundingClientRect().bottom < window.innerHeight * 0.4;
      var atContact = contact.getBoundingClientRect().top < window.innerHeight;
      var on = past && !atContact;
      if (on === shown) return;
      shown = on;
      dock.classList.toggle('on', on);
      dock.setAttribute('aria-hidden', on ? 'false' : 'true');
      dock.querySelectorAll('a').forEach(function (a) { a.tabIndex = on ? 0 : -1; });
    }
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  }

  var y = doc.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
