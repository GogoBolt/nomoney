# backend/Dockerfile

FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NHOST_SUBDOMAIN=local
ENV NHOST_REGION=local
ENV NHOST_POSTGRES_URL=postgres://postgres:postgres@postgres:5432/local
ENV NHOST_AUTH_URL=http://backend:1337/v1/auth
ENV NHOST_STORAGE_URL=http://backend:1337/v1/storage
ENV NHOST_FUNCTIONS_URL=http://backend:1337/v1/functions
ENV NHOST_DASHBOARD_URL=http://backend:1337

EXPOSE 1337

CMD ["npm", "start"]
