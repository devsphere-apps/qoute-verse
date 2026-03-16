
import React, { useEffect } from "react"
import { TextStyle, ViewToken } from "react-native"
import { Screen, Text, Col } from "@/components"
import { useQuoteStore } from "@/store/quoteStore"
import { QuoteCard } from "@/components/QuoteCard"
import { Ionicons } from "@expo/vector-icons"
import { useAppTheme } from "@/theme/context"
import { ThemedStyle } from "@/theme/types"
import { $styles } from "@/theme/styles"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated"

export default function FavoritesScreen() {
  const { favorites } = useQuoteStore()
  const { themed, theme } = useAppTheme()
  const pulse = useSharedValue(1)
  const viewableItems = useSharedValue<number[]>([])

  const onViewableItemsChanged = ({ viewableItems: changedItems }: { viewableItems: ViewToken[] }) => {
    viewableItems.value = changedItems.map((item) => item.index ?? 0)
  }

  useEffect(() => {
    pulse.value = withRepeat(withTiming(1.1, { duration: 1000 }), -1, true)
  }, [pulse])

  const animatedPulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
    opacity: 0.8 + (pulse.value - 1) * 2, // Becomes more visible as it pulses
  }))

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} useGradient contentContainerStyle={$styles.flex1}>
      <Col padding="m" flex={1} gap="m">
        <Text variant="heading" color="text" tx="favoritesScreen:title" />
        <Animated.FlatList
          data={favorites}
          renderItem={({ item, index }) => (
            <QuoteCard quote={item} index={index} viewableItems={viewableItems} />
          )}
          keyExtractor={(item) => `${item.quote}-${item.author}`}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
          style={$styles.flex1}
          contentContainerStyle={{ paddingBottom: theme.spacing.l }}
          ListEmptyComponent={
            <Col padding="l" alignItems="center" gap="m" style={{ marginTop: theme.spacing.xl }}>
              <Animated.View style={animatedPulseStyle}>
                <Ionicons name="heart" size={64} color={theme.colors.error} style={{ opacity: 0.2 }} />
              </Animated.View>
              <Text
                variant="subheading"
                color="text"
                tx="favoritesScreen:emptyTitle"
                style={{ textAlign: "center" }}
              />
              <Text
                variant="body"
                color="textDim"
                style={themed($emptyText)}
                tx="favoritesScreen:emptySubtitle"
              />
            </Col>
          }
        />
      </Col>
    </Screen>
  )
}

const $emptyText: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
  textAlign: "center",
})
