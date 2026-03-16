
import React from "react"
import { Share, TextStyle, ViewStyle, TouchableOpacity } from "react-native"
import { Card, CardProps } from "@/components/Card"
import { Quote } from "@/services/api/types"
import { useQuoteStore } from "@/store/quoteStore"
import { Ionicons } from "@expo/vector-icons"
import { useAppTheme } from "@/theme/context"
import { Row, Col } from "@/components"
import { Text } from "@/components/Text"
import { ThemedStyle } from "@/theme/types"

interface QuoteCardProps extends CardProps {
  quote: Quote
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, ...rest }) => {
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
    <Card {...rest} style={[themed($card), rest.style]}>
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
    </Card>
  )
}

const $card: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  padding: spacing.m,
  marginVertical: spacing.s,
  borderRadius: 16,
})

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

