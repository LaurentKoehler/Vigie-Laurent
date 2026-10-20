# 1. Partir d'un mini-Linux où Node 22 est déjà installé
FROM node:22-alpine

# 2. Un petit outil système dont certaines dépendances ont besoin
RUN apk add --no-cache libc6-compat

# 3. Se placer dans un dossier de travail (comme un « cd »)
WORKDIR /usr/src/app

# 4. Copier d'abord UNIQUEMENT les listes de dépendances...
COPY package.json package-lock.json ./
COPY client/package.json client/
COPY server/package.json server/

# 5. ...et installer les dépendances
RUN npm ci

# 6. Copier tout le reste du code
COPY . .

# 7. Construire le front (le fameux client/dist)
ARG VITE_API_URL=""
ARG VITE_PUBLIC_URL
RUN npm run build --workspace=client

# 8. Ce que fait la boîte quand on l'allume : démarrer Express
EXPOSE 3310
CMD ["npm", "run", "start"]