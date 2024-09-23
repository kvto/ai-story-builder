import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-kids-story-builder_owner:huD9dUV6Bxif@ep-odd-hall-a5qzidpg.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require",
  },
  verbose: true,
  strict: true,
})