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

  /* Abas de serviços: um painel por vez, teclado com setas */
  var abas = $$('.aba');
  var paineis = $$('.painel');
  function selecionar(aba, foco) {
    abas.forEach(function (a) {
      var ativa = a === aba;
      a.setAttribute('aria-selected', ativa ? 'true' : 'false');
      a.tabIndex = ativa ? 0 : -1;
      var p = doc.getElementById(a.getAttribute('aria-controls'));
      if (p) p.hidden = !ativa;
    });
    if (foco) aba.focus();
  }
  if (abas.length) {
    paineis.forEach(function (p) { p.hidden = p.getAttribute('aria-labelledby') !== 'aba-sob-medida'; });
    abas.forEach(function (aba, i) {
      aba.addEventListener('click', function () { selecionar(aba); });
      aba.addEventListener('keydown', function (e) {
        var ir = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') ir = abas[(i + 1) % abas.length];
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ir = abas[(i - 1 + abas.length) % abas.length];
        if (e.key === 'Home') ir = abas[0];
        if (e.key === 'End') ir = abas[abas.length - 1];
        if (ir) { e.preventDefault(); selecionar(ir, true); }
      });
    });
  }

  /* Botões "Pedir ..." marcam o tipo no formulário */
  $$('[data-pedir]').forEach(function (a) {
    a.addEventListener('click', function () {
      var tipo = a.getAttribute('data-pedir');
      var radio = $('input[name="tipo"][value="' + tipo + '"]');
      if (radio) radio.checked = true;
    });
  });

  /* Formulário: monta o e-mail no aplicativo da pessoa, sem servidor */
  var ficha = $('#ficha');
  var aviso = $('#aviso');
  var PARA = 'contato@gabaritei.com.br';

  function dizer(msg) { if (aviso) aviso.textContent = msg; }

  function ler() {
    var d = new FormData(ficha);
    return {
      nome: String(d.get('nome') || '').trim(),
      contato: String(d.get('contato') || '').trim(),
      tipo: String(d.get('tipo') || ''),
      projeto: String(d.get('projeto') || '').trim(),
      prazo: String(d.get('prazo') || '')
    };
  }

  function validar(v) {
    var faltas = [];
    [['nome', 'f-nome'], ['contato', 'f-contato'], ['projeto', 'f-projeto']].forEach(function (par) {
      var campo = doc.getElementById(par[1]);
      var vazio = !v[par[0]];
      campo.setAttribute('aria-invalid', vazio ? 'true' : 'false');
      if (vazio) faltas.push(campo);
    });
    if (faltas.length) {
      faltas[0].focus();
      dizer('Faltou preencher: ' + faltas.map(function (c) { return doc.querySelector('label[for="' + c.id + '"]').textContent.toLowerCase(); }).join(', ') + '.');
      return false;
    }
    return true;
  }

  function texto(v) {
    return [
      'Olá, Gabriel!',
      '',
      'Meu nome é ' + v.nome + '.',
      'Procuro: ' + v.tipo + '.',
      'Prazo: ' + v.prazo + '.',
      '',
      'Sobre o projeto:',
      v.projeto,
      '',
      'Pode me responder em: ' + v.contato
    ].join('\n');
  }

  if (ficha) {
    ficha.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = ler();
      if (!validar(v)) return;
      var assunto = 'Projeto: ' + v.tipo + ' (' + v.nome + ')';
      var url = 'mailto:' + PARA + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(texto(v));
      dizer('Abrindo o seu aplicativo de e-mail. Se nada abrir, use "Copiar o texto" e mande para ' + PARA + '.');
      window.location.href = url;
    });

    var copiar = $('#copiar');
    if (copiar) {
      copiar.addEventListener('click', function () {
        var v = ler();
        if (!validar(v)) return;
        var t = 'Para: ' + PARA + '\nAssunto: Projeto: ' + v.tipo + ' (' + v.nome + ')\n\n' + texto(v);
        var ok = function () { dizer('Texto copiado. Cole no seu e-mail e envie para ' + PARA + '.'); };
        var falha = function () { dizer('Não consegui copiar sozinho. Selecione o texto do projeto e envie para ' + PARA + '.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(t).then(ok, falha);
        } else {
          falha();
        }
      });
    }
    ficha.addEventListener('input', function (e) {
      if (e.target.getAttribute && e.target.getAttribute('aria-invalid') === 'true' && e.target.value.trim()) {
        e.target.setAttribute('aria-invalid', 'false');
      }
    });
  }

  /* Currículo em PDF: imprime só a trajetória (regras em @media print) */
  $$('[data-imprimir]').forEach(function (b) {
    b.addEventListener('click', function () { window.print(); });
  });

  /* Régua: o filete de cada seção se desenha uma vez ao entrar na tela */
  var reguas = $$('.bloco__cabeca');
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
