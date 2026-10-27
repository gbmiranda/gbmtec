(function () {
  'use strict';

  var doc = document;
  var $ = function (sel, ctx) { return (ctx || doc).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); };

  /* Menu no celular */
  var botaoMenu = $('.topo__menu');
  var menu = $('#menu');
  if (botaoMenu && menu) {
    var fechar = function () {
      menu.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    };
    botaoMenu.addEventListener('click', function () {
      var abrir = !menu.classList.contains('aberto');
      menu.classList.toggle('aberto', abrir);
      botaoMenu.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', fechar); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
  }

  /* Currículo em PDF: imprime só a trajetória (regras em @media print) */
  $$('[data-imprimir]').forEach(function (b) {
    b.addEventListener('click', function () { window.print(); });
  });

  /* Régua: o filete de cada seção se desenha uma vez ao entrar na tela */
  var reguas = $$('.bloco__cabeca, .lateral__cabeca');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (itens) {
      itens.forEach(function (i) {
        if (i.isIntersecting) { i.target.classList.add('visivel'); io.unobserve(i.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.2 });
    reguas.forEach(function (r) { io.observe(r); });
  } else {
    reguas.forEach(function (r) { r.classList.add('visivel'); });
  }
})();
