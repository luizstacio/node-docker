FROM node:6.0-slim

WORKDIR /app
ADD ./app /app

EXPOSE 3000

ENTRYPOINT ["node", "/app/index.js"]