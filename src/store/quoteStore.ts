
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { MMKV } from "react-native-mmkv"
import { getQuote } from "../services/api"
import { Quote } from "../services/api/types"

const storage = new MMKV()

const mmkvStorage = {
  setItem: (name: string, value: string) => storage.set(name, value),
  getItem: (name: string) => storage.getString(name) ?? null,
  removeItem: (name: string) => storage.delete(name),
}

interface QuoteState {
  quotes: Quote[]
  favorites: Quote[]
  loading: boolean
  error: string | null
  fetchQuotes: (category: string) => Promise<void>
  addFavorite: (quote: Quote) => void
  removeFavorite: (quote: Quote) => void
  isFavorite: (quote: Quote) => boolean
}

export const useQuoteStore = create<QuoteState>()(
  persist(
    (set, get) => ({
      quotes: [],
      favorites: [],
      loading: false,
      error: null,
      fetchQuotes: async (category) => {
        set({ loading: true, error: null })
        try {
          const quotes = await getQuote(category)
          set({ quotes, loading: false })
        } catch (error) {
          set({ error: "Failed to fetch quotes", loading: false })
        }
      },
      addFavorite: (quote) =>
        set((state) => ({
          favorites: [...state.favorites, quote],
        })),
      removeFavorite: (quote) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.quote !== quote.quote),
        })),
      isFavorite: (quote) => {
        return get().favorites.some((fav) => fav.quote === quote.quote)
      },
    }),
    {
      name: "quote-storage",
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
)
