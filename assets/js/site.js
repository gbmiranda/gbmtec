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
      botaoMenu.textContent = 'Menu';
    };
    botaoMenu.addEventListener('click', function () {
      var abrir = !menu.classList.contains('aberto');
      menu.classList.toggle('aberto', abrir);
      botaoMenu.setAttribute('aria-expanded', abrir ? 'true' : 'false');
      botaoMenu.textContent = abrir ? 'Fechar' : 'Menu';
    });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', fechar); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
  }

  /* Links internos sem # no endereço: rola até a seção (suave só se o CSS deixar)
     e mantém a URL limpa. A marca do topo volta ao início. */
  var limparEndereco = function () {
    if (location.hash && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
  };
  doc.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    var alvo = a && doc.getElementById(a.getAttribute('href').slice(1));
    if (!alvo) return;
    e.preventDefault();
    if (alvo.id === 'topo') window.scrollTo({ top: 0 });
    else alvo.scrollIntoView({ block: 'start' });
    if (!alvo.hasAttribute('tabindex')) alvo.setAttribute('tabindex', '-1');
    alvo.focus({ preventScroll: true });
    limparEndereco();
  });
  /* Quem chega por um link antigo com # vai à seção, e o # sai depois */
  if (location.hash) {
    var inicial = doc.getElementById(location.hash.slice(1));
    window.addEventListener('load', function () {
      if (inicial) inicial.scrollIntoView({ block: 'start' });
      limparEndereco();
    });
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
