
import React, { useEffect } from "react"
import { FlatList, ActivityIndicator } from "react-native"
import { Screen, Text, Button, Col } from "@/components"
import { useQuoteStore } from "@/store/quoteStore"
import { QuoteCard } from "@/components/QuoteCard"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"

export default function QuoteScreen() {
  const { quotes, loading, error, fetchQuotes } = useQuoteStore()
  const { theme } = useAppTheme()

  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} useGradient contentContainerStyle={$styles.flex1}>
      <Col padding="m" flex={1} gap="m">
        <Text variant="heading" color="text">
          Daily Quotes
        </Text>
        {loading && <ActivityIndicator size="large" color={theme.colors.tint} />}
        {error && <Text color="error">{error}</Text>}
        <FlatList
          data={quotes}
          renderItem={({ item }) => <QuoteCard quote={item} />}
          keyExtractor={(item) => `${item.quote}-${item.author}`}
          showsVerticalScrollIndicator={false}
          style={$styles.flex1}
        />
        <Button
          tx="quoteScreen:newQuotes"
          onPress={() => fetchQuotes()}
          disabled={loading}
        />
      </Col>
    </Screen>
  )
}
