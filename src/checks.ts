import { getEnvIssues } from './env'
import { generateErrorMessage } from 'zod-error'

export const logIssues = async (): Promise<void> => {
  try {
    // Log all the environment variable issues
    const issues = getEnvIssues()
    if (issues) {
      console.error(
        'Invalid environment variables found in your .env file, check the errors below!'
      )
      console.error(
        generateErrorMessage(issues, {
          delimiter: { error: '\\n' },
        })
      )
    } else {
      console.info('The environment variables are valid!')
    }

    // Log the SuperAdmin environment variable issue (if any)
  } catch (error) {
    console.error('Error logging environment variable issues:', error)
  }
}
