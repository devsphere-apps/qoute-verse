
import React, { useEffect } from "react"
import { FlatList, ActivityIndicator } from "react-native"
import { Screen, Text, Button, Col } from "@/components"
import { useQuoteStore } from "@/store/quoteStore"
import { QuoteCard } from "@/components/QuoteCard"
import { useAppTheme } from "@/theme/context"

export default function QuoteScreen() {
  const { quotes, loading, error, fetchQuotes } = useQuoteStore()
  const { theme } = useAppTheme()

  useEffect(() => {
    fetchQuotes("inspirational")
  }, [fetchQuotes])

  return (
    <Screen preset="auto" safeAreaEdges={["top"]} useGradient>
      <Col padding="m" flex={1} gap="m">
        <Text variant="heading" color="text">
          Daily Quotes
        </Text>
        {loading && <ActivityIndicator size="large" color={theme.colors.tint} />}
        {error && <Text color="error">{error}</Text>}
        <FlatList
          data={quotes}
          renderItem={({ item }) => <QuoteCard quote={item} />}
          keyExtractor={(item) => item.quote}
          showsVerticalScrollIndicator={false}
        />
        <Button
          tx="quoteScreen:newQuotes"
          onPress={() => fetchQuotes("inspirational")}
          disabled={loading}
        />
      </Col>
    </Screen>
  )
}

