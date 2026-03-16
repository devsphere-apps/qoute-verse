import Config from "@/config"

import { api } from "./index"
import { Quote } from "./types"

export const getQuote = async (category?: string): Promise<Quote[]> => {
  if (!Config.API_KEY) {
    throw new Error("Missing EXPO_PUBLIC_API_KEY. Set it in .env and restart Metro.")
  }

  const request = async (params: Record<string, string | number | undefined>) => {
    return api.apisauce.get("quotes", params)
  }

  const params: Record<string, string | number | undefined> = {}
  if (category) params.category = category

  let response = await request(params)

  const data = response.data as unknown

  if (!response.ok) {
    const apiError =
      typeof (data as { error?: unknown } | null)?.error === "string"
        ? (data as { error: string }).error
        : undefined

    const isPremiumError = apiError?.toLowerCase().includes("premium")

    if (isPremiumError) {
      response = await request({})
      const retryData = response.data as unknown
      if (!response.ok) {
        const retryError =
          typeof (retryData as { error?: unknown } | null)?.error === "string"
            ? (retryData as { error: string }).error
            : undefined
        throw new Error(retryError ?? "Failed to fetch quotes")
      }
      if (!Array.isArray(retryData)) {
        throw new Error("Unexpected response from quotes API")
      }
      return retryData as Quote[]
    }

    throw new Error(apiError ?? "Failed to fetch quotes")
  }

  if (!Array.isArray(data)) {
    throw new Error("Unexpected response from quotes API")
  }

  return data as Quote[]
}
