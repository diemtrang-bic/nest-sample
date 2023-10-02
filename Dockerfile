FROM node:16 as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .  
RUN npm run build

# Production image
FROM node:16
WORKDIR /app
COPY --from=builder /app ./
COPY . . 
ENV PORT=3000

EXPOSE $PORT
CMD ["node", "dist/main.js"]
