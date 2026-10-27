FROM nginx:1.27-alpine

# A UpUai roda o contêiner como usuário comum (UID 1000) e exige um WORKDIR válido.
# Por isso o nginx usa uma config própria, com pid e temporários em /app/tmp,
# e a porta é injetada em ${PORT} na hora de subir (8080 é o padrão local).
ENV PORT=8080
WORKDIR /app
RUN mkdir -p /app/tmp && chown -R 1000:1000 /app

COPY nginx.conf.template /app/nginx.conf.template

COPY index.html 404.html robots.txt sitemap.xml favicon.svg apple-touch-icon.png /usr/share/nginx/html/
COPY google261a20c75eca65b7.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

# CSS e JS ficam 1h no cache do navegador e o HTML não: cada build carimba os links
# com o hash do conteúdo (__V__), para a página nova nunca abrir com o CSS antigo.
RUN cd /usr/share/nginx/html && v=$(cat assets/css/site.css assets/js/site.js assets/img/og.png | md5sum | cut -c1-10) \
 && sed -i "s/__V__/$v/g" index.html

EXPOSE 8080
USER 1000
CMD ["sh", "-c", "envsubst '${PORT}' < /app/nginx.conf.template > /app/tmp/nginx.conf && exec nginx -e stderr -c /app/tmp/nginx.conf -g 'daemon off;'"]
