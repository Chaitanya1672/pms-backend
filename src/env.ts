import z from 'zod'
import 'dotenv/config'
export const envSchema = z.object({
  NODE_ENV: z.string().refine((value) => ['development', 'production'].includes(value)),
  SERVER_PORT: z.string(),
  MONGO_DB_URL: z.string().url().optional(),
  POSTGRES_DB_URL: z.string().url().optional(),
  ALPHA_ADVANTAGE_API_KEY: z.string().optional(),
  // JWT_SECRET: z.string().min(32),

  RAPID_API_KEY: z.string().min(1, { message: 'RAPID_API_KEY is required' }),
  RAPID_API_URL: z
    .string()
    .url()
    .refine((url) => url.startsWith('https://'), {
      message: 'RAPID_API_URL must be a valid HTTPS URL',
    }),
  RAPID_API_HOST: z.string().min(1, { message: 'RAPID_API_HOST is required' }),
})

export const getEnvIssues = (): z.ZodIssue[] | void => {
  const result = envSchema.safeParse(process.env)
  if (!result.success) {
    return result.error.issues
  }
}
