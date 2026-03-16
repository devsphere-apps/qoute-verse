import { Box, Center, Col, Row, Screen, Spacer, Stack, Surface, Text } from "@/components";
import { $styles } from "@/theme/styles";
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle";

export default function PlayLayoutScreen() {
    const $bottomInsets = useSafeAreaInsetsStyle(["bottom"]);
    return (
        <Screen
            preset="auto"
            safeAreaEdges={["top"]}
            systemBarStyle="auto"
        >

            <Col padding="m" gap="l" bottom={20}>
                <Text variant="heading" color="text">Layout Playground</Text>
                <Text variant="body" color="textDim">Explore all layout patterns and components</Text>
                {/* SECTION 1: BASIC LAYOUT COMPONENTS */}
                <Stack spacing="m">
                    <Text variant="subheading" color="text">1. Basic Layout Components</Text>
                    <Surface padding="m">
                        <Box marginBottom="s">
                            <Text variant="body" color="text">Margin & Padding</Text>
                        </Box>
                        <Row gap="s" justifyContent="space-between">
                            <Box padding="s" backgroundColor="tint" borderRadius="s" borderCurve="continuous">
                                <Text variant="caption" color="background">Item 1</Text>
                            </Box>
                            <Box padding="s" backgroundColor="tint" borderRadius="s" borderCurve="continuous">
                                <Text variant="caption" color="background">Item 2</Text>
                            </Box>
                            <Box padding="s" backgroundColor="tint" borderRadius="s" borderCurve="continuous">
                                <Text variant="caption" color="background">Item 3</Text>
                            </Box>
                        </Row>
                    </Surface>
                </Stack>

                {/* Col Example */}
                <Surface padding="m">
                    <Box marginBottom="s">
                        <Text variant="body" color="text">Col - Vertical Layout</Text>
                    </Box>
                    <Col gap="s">
                        <Box padding="s" backgroundColor="success" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Top</Text>
                        </Box>
                        <Box padding="s" backgroundColor="success" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Middle</Text>
                        </Box>
                        <Box padding="s" backgroundColor="success" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Bottom</Text>
                        </Box>
                    </Col>
                </Surface>
                {/* Stack Example */}
                <Surface padding="m">
                    <Box marginBottom="s">
                        <Text variant="body" color="text">Stack - Vertical with Spacing</Text>
                    </Box>
                    <Stack spacing="m">
                        <Box padding="s" backgroundColor="info" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Stack Item 1</Text>
                        </Box>
                        <Box padding="s" backgroundColor="info" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Stack Item 2</Text>
                        </Box>
                        <Box padding="s" backgroundColor="info" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Stack Item 3</Text>
                        </Box>
                    </Stack>
                </Surface>
                {/* Center Example */}
                <Surface padding="m" minHeight={100}>
                    <Box marginBottom="s">
                        <Text variant="body" color="text">Center - Centered Content</Text>
                    </Box>
                    <Center flex={1}>
                        <Box padding="m" backgroundColor="warning" borderRadius="m" borderCurve="continuous">
                            <Text variant="body" color="background">
                                Centered
                            </Text>
                        </Box>
                    </Center>
                </Surface>
                {/* Spacer Example */}
                <Surface padding="m">
                    <Box marginBottom="s">
                        <Text variant="body" color="text">Spacer - Fills Space</Text>
                    </Box>
                    <Row>
                        <Box padding="s" backgroundColor="tint" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Left</Text>
                        </Box>
                        <Spacer />
                        <Box padding="s" backgroundColor="tint" borderRadius="s" borderCurve="continuous">
                            <Text variant="caption" color="background">Right</Text>
                        </Box>
                    </Row>
                </Surface>
                {/* SECTION 2: SPACING PATTERNS */}
                <Stack spacing="m">
                    <Text variant="subheading" color="text">2. Spacing Patterns</Text>
                    <Surface padding="m">
                        <Box marginBottom="s">
                            <Text variant="body" color="text">Margin & Padding</Text>
                        </Box>
                        <Box
                            margin="m"
                            padding="l"
                            backgroundColor="background"
                            borderWidth={1}
                            borderColor="border"
                            borderRadius="m"
                        >
                            <Text variant="caption" color="text">margin="m" padding="l"</Text>
                        </Box>
                    </Surface>
                    <Surface padding="m">
                        <Box marginBottom="s">
                            <Text variant="body" color="text">Responsive Spacing</Text>
                        </Box>
                        <Box
                            backgroundColor="tint"
                            borderRadius="m"
                            margin={{ smallPhone: "xs", phone: "m", tablet: "xl" }}
                            padding={{ smallPhone: "s", phone: "m", tablet: "l" }}
                        >
                            <Text variant="caption" color="background">Responsive margin & padding</Text>
                        </Box>
                    </Surface>
                </Stack>
            </Col>
        </Screen>
    )
}