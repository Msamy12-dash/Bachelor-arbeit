FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000 1999

CMD ["sh", "-c", "npm start & npx partykit dev"]