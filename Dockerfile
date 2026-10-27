FROM nginx:1.27-alpine

# O nginx oficial renderiza /etc/nginx/templates/*.template com as variáveis de ambiente.
# A UpUai injeta PORT; 8080 é o padrão local.
ENV PORT=8080

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

COPY index.html 404.html robots.txt sitemap.xml favicon.svg apple-touch-icon.png /usr/share/nginx/html/
COPY google261a20c75eca65b7.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

EXPOSE 8080
