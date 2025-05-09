# Build stage
FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/public/tasks.json /usr/share/nginx/html/tasks.json
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]