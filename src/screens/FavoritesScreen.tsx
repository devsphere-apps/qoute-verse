
import React from "react"
import { FlatList, TextStyle } from "react-native"
import { Screen, Text, Col } from "@/components"
import { useQuoteStore } from "@/store/quoteStore"
import { QuoteCard } from "@/components/QuoteCard"
import { Ionicons } from "@expo/vector-icons"
import { useAppTheme } from "@/theme/context"
import { ThemedStyle } from "@/theme/types"
import { $styles } from "@/theme/styles"

export default function FavoritesScreen() {
  const { favorites } = useQuoteStore()
  const { themed, theme } = useAppTheme()

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} useGradient contentContainerStyle={$styles.flex1}>
      <Col padding="m" flex={1} gap="m">
        <Text variant="heading" color="text">
          Favorite Quotes
        </Text>
        <FlatList
          data={favorites}
          renderItem={({ item }) => <QuoteCard quote={item} />}
          keyExtractor={(item) => `${item.quote}-${item.author}`}
          showsVerticalScrollIndicator={false}
          style={$styles.flex1}
          contentContainerStyle={{ paddingBottom: theme.spacing.l }}
          ListEmptyComponent={
            <Col padding="l" alignItems="center" gap="m">
              <Ionicons name="heart-outline" size={40} color={theme.colors.textDim} />
              <Text
                variant="subheading"
                color="text"
                text="No favorites yet"
                style={{ textAlign: "center" }}
              />
              <Text
                variant="body"
                color="textDim"
                style={themed($emptyText)}
                text="Tap the heart on a quote to save it here."
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
