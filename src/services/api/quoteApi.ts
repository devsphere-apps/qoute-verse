
import { Api } from "./index";
import { Quote } from "./types";

const api = new Api();

export const getQuote = async (category: string): Promise<Quote[]> => {
  const response = await api.apisauce.get(`/quotes?category=${category}`);

  if (!response.ok) {
    throw new Error("Failed to fetch quotes");
  }

  return response.data as Quote[];
};
