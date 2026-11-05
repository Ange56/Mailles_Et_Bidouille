// =====================================================================
//  Petits outils
// =====================================================================

// Crée un élément HTML : h('div', { class: 'x', text: 'Bonjour' }, [enfants])
function h(tag, props, kids) {
  var n = document.createElement(tag);
  if (props) {
    Object.keys(props).forEach(function (k) {
      if (k === 'text') n.textContent = props[k];
      else if (k === 'class') n.className = props[k];
      else n.setAttribute(k, props[k]);
    });
  }
  (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
  return n;
}

function slug(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Vignette cliquable d'une peluche (utilisée dans la galerie et dans « À découvrir aussi »)
function makeCard(p) {
  var ph = p.photos[0];
  var img = h('img', { src: ph.src, alt: ph.alt, loading: 'lazy' });
  if (ph.pos) img.style.objectPosition = 'center ' + ph.pos;
  return h('a', { class: 'card card-link', href: 'peluche.html?id=' + encodeURIComponent(p.id) }, [
    h('div', { class: 'card-img tall' }, [img]),
    h('div', { class: 'card-body compact' }, [
      h('span', { class: 'tag', text: p.type }),
      h('h3', { text: p.nom })
    ])
  ]);
}

// =====================================================================
//  Menu mobile
// =====================================================================
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

// =====================================================================
//  Agrandir une photo (toute image marquée data-zoom, même ajoutée après coup)
// =====================================================================
(function () {
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button class="lightbox-close" aria-label="Fermer">&times;</button><img alt="">';
  document.body.appendChild(box);
  var big = box.querySelector('img');

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.matches && t.matches('img[data-zoom]')) {
      big.src = t.src;
      big.alt = t.alt;
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

// =====================================================================
//  Page « Peluches » : galerie générée depuis peluches-data.js
// =====================================================================
(function () {
  var root = document.getElementById('gallery');
  if (!root || typeof PELUCHES === 'undefined') return;

  var order = [];
  var groups = {};
  PELUCHES.forEach(function (p) {
    if (!groups[p.famille]) { groups[p.famille] = []; order.push(p.famille); }
    groups[p.famille].push(p);
  });

  order.forEach(function (famille) {
    var grid = h('div', { class: 'grid-3 gallery' }, groups[famille].map(makeCard));
    root.appendChild(
      h('section', { class: 'gallery-section', id: slug(famille) }, [
        h('div', { class: 'wrap' }, [
          h('h2', { class: 'gallery-title', text: famille }),
          grid
        ])
      ])
    );
  });

  // si on arrive avec un lien du type peluches.html#les-tortues
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();

// =====================================================================
//  Page « Une peluche » : peluche.html?id=...
// =====================================================================
(function () {
  var root = document.getElementById('detail');
  if (!root || typeof PELUCHES === 'undefined') return;

  var id = new URLSearchParams(window.location.search).get('id');
  var idx = -1;
  PELUCHES.forEach(function (p, i) { if (p.id === id) idx = i; });

  if (idx < 0) {
    root.appendChild(h('div', { class: 'wrap detail-missing' }, [
      h('h1', { text: 'Peluche introuvable' }),
      h('p', { text: "Cette peluche n'existe pas (ou plus) dans la galerie." }),
      h('a', { class: 'btn btn-primary', href: 'peluches.html', text: 'Voir toutes les peluches' })
    ]));
    return;
  }

  var p = PELUCHES[idx];
  document.title = p.type + ' ' + p.nom + ' — Mailles et Bidouille';

  // --- photos ---
  function applyPhoto(img, ph) {
    img.src = ph.src;
    img.alt = ph.alt;
    img.style.objectPosition = 'center ' + (ph.pos || '30%');
  }

  var main = h('img', { 'data-zoom': '' });
  applyPhoto(main, p.photos[0]);

  var photos = h('div', { class: 'detail-photos' }, [
    h('div', { class: 'detail-main' }, [main])
  ]);

  if (p.photos.length > 1) {
    var thumbs = h('div', { class: 'thumbs' });
    p.photos.forEach(function (ph, i) {
      var timg = h('img', { src: ph.src, alt: '' });
      if (ph.pos) timg.style.objectPosition = 'center ' + ph.pos;
      var btn = h('button', { type: 'button', class: 'thumb' + (i === 0 ? ' active' : ''), 'aria-label': 'Voir la photo ' + (i + 1) }, [timg]);
      btn.addEventListener('click', function () {
        applyPhoto(main, ph);
        Array.prototype.forEach.call(thumbs.children, function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
      thumbs.appendChild(btn);
    });
    photos.appendChild(thumbs);
  }

  // --- texte ---
  var info = h('div', { class: 'detail-info' }, [
    h('span', { class: 'eyebrow', text: p.type }),
    h('h1', { text: p.nom }),
    h('p', { class: 'detail-text', text: p.description })
  ]);

  if (p.taille) {
    info.appendChild(h('p', { class: 'detail-size' }, [
      h('strong', { text: 'Taille : ' }),
      document.createTextNode(p.taille)
    ]));
  }

  info.appendChild(h('div', { class: 'notice' }, [
    h('strong', { text: 'Peluche décorative' }),
    h('p', { text: 'Cette peluche est décorative : elle n’est pas destinée aux enfants de moins de 36 mois.' })
  ]));

  info.appendChild(h('p', { class: 'detail-handmade', text: 'Chaque peluche est crochetée à la main : de légères différences sont possibles d’une pièce à l’autre.' }));
  info.appendChild(h('a', { class: 'btn btn-primary', href: 'index.html#contact', text: 'Me poser une question' }));

  // --- assemblage ---
  var wrap = h('div', { class: 'wrap' }, [
    h('a', { class: 'back-link', href: 'peluches.html', text: '← Toutes les peluches' }),
    h('div', { class: 'detail' }, [photos, info])
  ]);
  root.appendChild(wrap);

  // --- à découvrir aussi (les 3 suivantes dans la liste) ---
  var others = [];
  for (var k = 1; k <= 3 && k < PELUCHES.length; k++) {
    others.push(PELUCHES[(idx + k) % PELUCHES.length]);
  }
  if (others.length) {
    root.appendChild(h('div', { class: 'wrap see-also' }, [
      h('h2', { class: 'gallery-title', text: 'À découvrir aussi' }),
      h('div', { class: 'grid-3 gallery' }, others.map(makeCard))
    ]));
  }
})();
