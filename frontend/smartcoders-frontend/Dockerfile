# Étape 1: Build Next.js
FROM node:18 AS builder

ENV NODE_ENV=production

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN pnpm install --frozen-lockfile
RUN pnpm build



# Étape 2: Serveur app + Nginx
FROM node:18 AS appbase

ENV NODE_ENV=production

RUN npm install -g pnpm

WORKDIR /app

# Copier l'app depuis le builder
COPY --from=builder /app /app

# Étape 3: Final container avec Nginx + App
FROM nginx:stable-alpine AS runner

# Copier la config Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers de l'app
COPY --from=appbase /app /app

# Installer Node et PNPM dans Nginx (pour `pnpm start`)
RUN apk add --no-cache nodejs npm && npm install -g pnpm

WORKDIR /app

EXPOSE 100

CMD ["sh", "-c", "pnpm start & nginx -g 'daemon off;'"]
