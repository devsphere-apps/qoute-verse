
import React from "react"
import { FlatList, TextStyle } from "react-native"
import { Screen, Text, Col } from "@/components"
import { useQuoteStore } from "@/store/quoteStore"
import { QuoteCard } from "@/components/QuoteCard"
import { useAppTheme } from "@/theme/context"
import { ThemedStyle } from "@/theme/types"
import { $styles } from "@/theme/styles"

export default function FavoritesScreen() {
  const { favorites } = useQuoteStore()
  const { themed } = useAppTheme()

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
          ListEmptyComponent={
            <Text
              variant="body"
              color="textDim"
              style={themed($emptyText)}
              text="You haven't added any favorites yet."
            />
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
