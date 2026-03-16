/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
import Constants from "expo-constants"

const extra = (Constants.expoConfig?.extra ?? {}) as Record<string, unknown>

export default {
  API_URL: (extra.apiUrl as string | undefined) ?? "https://api.api-ninjas.com/v1/",
  API_KEY: (extra.apiKey as string | undefined) ?? "",
}
