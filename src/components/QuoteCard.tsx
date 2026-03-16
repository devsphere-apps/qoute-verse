
import React from "react"
import { Pressable, Share, TextStyle } from "react-native"
import { Quote } from "@/services/api/types"
import { useQuoteStore } from "@/store/quoteStore"
import { Ionicons } from "@expo/vector-icons"
import { useAppTheme } from "@/theme/context"
import { Box, Row, Col, Surface } from "@/components"
import { Text } from "@/components/Text"
import type { Theme, ThemedStyle } from "@/theme/types"
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
  withTiming,
} from "react-native-reanimated"

interface QuoteCardProps {
  quote: Quote
  index: number
  viewableItems: SharedValue<number[]>
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

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, index, viewableItems }) => {
  const { addFavorite, removeFavorite, isFavorite } = useQuoteStore()
  const { themed, theme } = useAppTheme()
  const favorite = isFavorite(quote)
  const pill = quote.category ? getCategoryPill(quote.category, theme.isDark) : null

  const animatedVisibilityStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems.value.includes(index)

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    }
  }, [index])

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
    <Animated.View
      entering={FadeInDown.duration(400).delay(index * 80).springify()}
      exiting={FadeOut.duration(300)}
      layout={LinearTransition.springify()}
      style={animatedVisibilityStyle}
    >
      <Surface padding="m" marginVertical="s" backgroundColor="separator" position="relative">
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
              <Box width={24} height={24} alignItems="center" justifyContent="center">
                <Animated.View
                  key={favorite ? "fav" : "unfav"}
                  entering={FadeIn.duration(150)}
                  exiting={FadeOut.duration(150)}
                  style={{ position: "absolute" }}
                >
                  <Ionicons
                    name={favorite ? "heart" : "heart-outline"}
                    size={24}
                    color={favorite ? theme.colors.error : theme.colors.textDim}
                  />
                </Animated.View>
              </Box>
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
