
import React from "react"
import { Share, TextStyle, TouchableOpacity } from "react-native"
import { Quote } from "@/services/api/types"
import { useQuoteStore } from "@/store/quoteStore"
import { Ionicons } from "@expo/vector-icons"
import { useAppTheme } from "@/theme/context"
import { Row, Col, Surface } from "@/components"
import { Text } from "@/components/Text"
import { ThemedStyle } from "@/theme/types"

interface QuoteCardProps {
  quote: Quote
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const { addFavorite, removeFavorite, isFavorite } = useQuoteStore()
  const { themed, theme } = useAppTheme()
  const favorite = isFavorite(quote)

  const onShare = async () => {
    try {
      await Share.share({
        message: `"${quote.quote}" - ${quote.author}`,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(quote)
    } else {
      addFavorite(quote)
    }
  }

  return (
    <Surface padding="m" marginVertical="s">
      <Col gap="s">
        <Text
          style={themed($quoteText)}
          color="text"
          text={quote.quote}
        />
        <Text
          style={themed($authorText)}
          color="textDim"
          text={`- ${quote.author}`}
        />
        <Row justifyContent="flex-end" gap="m" marginTop="s">
          <TouchableOpacity onPress={toggleFavorite}>
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={24}
              color={favorite ? theme.colors.error : theme.colors.textDim}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Ionicons
              name="share-outline"
              size={24}
              color={theme.colors.textDim}
            />
          </TouchableOpacity>
        </Row>
      </Col>
    </Surface>
  )
}

const $quoteText: ThemedStyle<TextStyle> = () => ({
  fontSize: 18,
  fontStyle: "italic",
  lineHeight: 24,
})

const $authorText: ThemedStyle<TextStyle> = () => ({
  fontSize: 16,
  textAlign: "right",
  fontWeight: "600",
})
