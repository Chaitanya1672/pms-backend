export const appConfig = {
  /** The current environment of the application (e.g., 'development', 'production'). */
  env: process.env.NODE_ENV,

  /** The default language for the application. */
  defaultLocale: 'en',

  /** An array of supported language for the application. */
  supportedLocales: ['hi', 'en', 'zh', 'fr', 'sp'],
  alphaVantageApiKey: process.env.ALPHA_VANTAGE_API_KEY as string,
  alphaVantageBaseUrl: process.env.ALPHA_VANTAGE_API_URL as string,

  rapidApiKey: process.env.RAPID_API_KEY as string,
  rapidApiBaseUrl: process.env.RAPID_API_URL as string,
  rapidApiHost: process.env.RAPID_API_HOST as string,
}
