// ---------- Menu mobile ----------
(function () {
  var burger = document.querySelector('.burger');
  var panel = document.getElementById('mobile-panel');
  if (!burger || !panel) return;

  function setOpen(open) {
    burger.classList.toggle('open', open);
    panel.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }

  burger.addEventListener('click', function () {
    setOpen(!panel.classList.contains('open'));
  });

  // referme le menu quand on clique sur un lien
  panel.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
})();

// ---------- Agrandir les photos (galerie) ----------
(function () {
  var photos = document.querySelectorAll('img[data-zoom]');
  if (!photos.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button class="lightbox-close" aria-label="Fermer">&times;</button><img alt="">';
  document.body.appendChild(box);

  var big = box.querySelector('img');

  function open(img) {
    big.src = img.src;
    big.alt = img.alt;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  photos.forEach(function (img) {
    img.addEventListener('click', function () { open(img); });
  });

  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
