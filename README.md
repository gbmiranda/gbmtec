# gbmtec-site

Site da GBM Tecnologia LTDA (gbmtec.com.br): landing page com projetos, currículo, serviços e contato do Gabriel Braga.

- HTML, CSS e JS puros, sem build. Entrada: `index.html`; estilos em `assets/css`, script em `assets/js`, imagens em `assets/img`, logos em `assets/logo`.
- `marca/oficial/` guarda o logo final (SVG escuro e claro, PNGs de 16 a 2048 px, versão espelhada e PDFs de 100 mm para a prensa de couro); não vai para a imagem publicada. Contato: WhatsApp corporativo e gabriel@gbmtec.com.br (sem formulário).
- Hospedagem: UpUai Cloud, projeto `diversos`, serviço `gbmtec-site`. O `Dockerfile` copia só o que é público para um nginx (`nginx.conf.template`, porta vinda de `PORT`).
- `google261a20c75eca65b7.html` é a verificação do Search Console: não remover.
- `PRODUCT.md` e `.impeccable/` são documentos de trabalho de design e ficam fora da imagem.

Teste local: `python3 -m http.server 8766` na raiz do projeto.
