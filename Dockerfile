FROM node:18-alpine AS base
RUN npm i -g pnpm

FROM base AS builder
WORKDIR /app
COPY pnpm-lock.yaml .
RUN pnpm fetch
COPY . .
RUN pnpm install --offline
RUN pnpm run build
RUN pnpm prune --prod

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
ENV ORIGIN=https://kurumemo.hoofoo.icu
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "node", "build" ]

