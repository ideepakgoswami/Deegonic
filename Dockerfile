FROM node:20-alpine AS base

# Stage 1. BUILDER
FROM base AS builder
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the application code
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application
RUN npm run build

# Stage 2. RUNNER
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Disable Next.js telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public directory for static assets
COPY --from=builder /app/public ./public

# Set the correct permissions for the built cache directory
RUN mkdir -p .next && chown -R nextjs:nodejs .next

# Grab the optimized standalone output from Next.js!
# This drastically reduces the image size by ditching `node_modules`
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

ENV PORT=3000

# Start the standalone Node.js server
CMD ["node", "server.js"]