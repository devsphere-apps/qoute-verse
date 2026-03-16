
import React, { useEffect } from "react"
import { FlatList, ActivityIndicator, RefreshControl } from "react-native"
import { Screen, Text, Button, Col } from "@/components"
import { useQuoteStore } from "@/store/quoteStore"
import { QuoteCard } from "@/components/QuoteCard"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import { spacing } from "@/theme/spacing"

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
        {!!error && <Text color="error">{error}</Text>}
        <FlatList
          data={quotes}
          renderItem={({ item }) => <QuoteCard quote={item} />}
          keyExtractor={(item) => `${item.quote}-${item.author}`}
          showsVerticalScrollIndicator={false}
          style={$styles.flex1}
          contentContainerStyle={{ paddingBottom: theme.spacing.l }}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => fetchQuotes()}
              tintColor={theme.colors.tint}
              colors={[theme.colors.tint]}
            />
          }
          ListEmptyComponent={
            loading ? (
              <Col padding="l" alignItems="center" gap="m">
                <ActivityIndicator size="large" color={theme.colors.tint} />
                <Text color="textDim" text="Loading quotes..." />
              </Col>
            ) : (
              <Col padding="l" alignItems="center" gap="m">
                <Text color="textDim" text="No quotes yet. Pull to refresh or tap New Quotes." />
              </Col>
            )
          }
        />
        <Button
          tx="quoteScreen:newQuotes"
          onPress={() => fetchQuotes()}
          disabled={loading}
          preset="filled"
          style={{ backgroundColor: theme.colors.tint, borderColor: theme.colors.tint, borderRadius:spacing.m }}
          textStyle={{ color: "#FFFFFF" }}
        />
      </Col>
    </Screen>
  )
}
