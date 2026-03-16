
import React from "react"
import { Pressable, Share, TextStyle } from "react-native"
import { Quote } from "@/services/api/types"
import { useQuoteStore } from "@/store/quoteStore"
import { Ionicons } from "@expo/vector-icons"
import { useAppTheme } from "@/theme/context"
import { Box, Row, Col, Surface } from "@/components"
import { Text } from "@/components/Text"
import type { Theme, ThemedStyle } from "@/theme/types"
import Animated, { FadeInDown } from "react-native-reanimated"

interface QuoteCardProps {
  quote: Quote
}

type ColorKey = Exclude<keyof Theme["colors"], "palette">

function getCategoryPill(category: string, isDark: boolean): { bg: ColorKey; fg: ColorKey } {
  if (isDark) return { bg: "background", fg: "textDim" }

  switch (category.toLowerCase()) {
    case "fear":
    case "death":
    case "time":
      return { bg: "warningBackground", fg: "warning" }
    case "love":
    case "relationships":
      return { bg: "errorBackground", fg: "error" }
    case "success":
      return { bg: "successBackground", fg: "success" }
    case "wisdom":
    case "philosophy":
    case "truth":
    case "intelligence":
      return { bg: "infoBackground", fg: "info" }
    case "inspirational":
    case "courage":
    case "leadership":
      return { bg: "separator", fg: "tint" }
    default:
      return { bg: "separator", fg: "textDim" }
  }
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const { addFavorite, removeFavorite, isFavorite } = useQuoteStore()
  const { themed, theme } = useAppTheme()
  const favorite = isFavorite(quote)
  const pill = quote.category ? getCategoryPill(quote.category, theme.isDark) : null

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
    <Animated.View entering={FadeInDown.duration(180)}>
      <Surface padding="m" marginVertical="s" backgroundColor="separator">
        <Col gap="s">
          {!!quote.category && pill && (
            <Row justifyContent="space-between" alignItems="center">
              <Box
                paddingHorizontal="s"
                paddingVertical="xs"
                borderRadius="l"
                backgroundColor={pill.bg}
              >
                <Text variant="caption" color={pill.fg} text={quote.category.toUpperCase()} />
              </Box>
            </Row>
          )}
          <Text style={themed($quoteText)} color="text" text={quote.quote} />
          <Text style={themed($authorText)} color="textDim" text={`- ${quote.author}`} />
          <Row justifyContent="flex-end" gap="m" marginTop="s">
            <Pressable
              onPress={toggleFavorite}
              hitSlop={12}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <Ionicons
                name={favorite ? "heart" : "heart-outline"}
                size={24}
                color={favorite ? theme.colors.error : theme.colors.textDim}
              />
            </Pressable>
            <Pressable onPress={onShare} hitSlop={12} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Ionicons name="share-outline" size={24} color={theme.colors.textDim} />
            </Pressable>
          </Row>
        </Col>
      </Surface>
    </Animated.View>
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
