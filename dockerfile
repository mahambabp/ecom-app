FROM node:20-alpine

#app dirirectory & dependencies

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

#copy source
COPY . .

#security and runtime

USER node
EXPOSE 9000

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:9000/health || exit 1

CMD ["npm", "start"]
