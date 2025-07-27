# Etap 1: Budowanie aplikacji React
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etap 2: Serwowanie plików statycznych przez Nginx
FROM nginx:1.27-alpine
# Kopiuj zbudowane pliki z etapu 'builder'
COPY --from=builder /app/dist /usr/share/nginx/html
# Usuń domyślną konfigurację Nginx
RUN rm /etc/nginx/conf.d/default.conf
# Skopiuj naszą własną konfigurację Nginx
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
