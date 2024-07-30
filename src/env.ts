import z from 'zod'
import 'dotenv/config'
export const envSchema = z.object({
  NODE_ENV: z.string().refine((value) => ['development', 'production'].includes(value)),
  SERVER_PORT: z.string(),
  MONGO_DB_URL: z.string().url().optional(),
  POSTGRES_DB_URL: z.string().url().optional(),
  ALPHA_ADVANTAGE_API_KEY: z.string(),
  // JWT_SECRET: z.string().min(32),
})

export const getEnvIssues = (): z.ZodIssue[] | void => {
  const result = envSchema.safeParse(process.env)
  if (!result.success) {
    return result.error.issues
  }
}
