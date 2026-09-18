# syntax=docker/dockerfile:1

# ---- deps: install node_modules from the lockfile ----
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@11.20.0
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ---- builder: produce the standalone Next.js build ----
FROM node:22-alpine AS builder
RUN npm install -g pnpm@11.20.0
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ---- runner: minimal production image ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Content read from disk at runtime (fs.readdir/readFile relative to cwd)
COPY --from=builder --chown=nextjs:nodejs /app/_content ./_content
COPY --from=builder --chown=nextjs:nodejs ["/app/src/app/articles/(posts)", "./src/app/articles/(posts)"]

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
