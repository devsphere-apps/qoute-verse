import { Screen, Text } from "@/components"
import {
  Box,
  Row,
  Col,
  Stack,
  Center,
  Spacer,
  Absolute,
  Surface,
} from "@/components/layout"

export default function LayoutPlaygroundScreen() {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <Col padding="m" gap="l">
        {/* HEADER */}
        <Text variant="heading" color="text">
          Layout Playground
        </Text>
        <Text variant="body" color="textDim">
          Explore all layout patterns and components
        </Text>

        {/* SECTION 1: BASIC LAYOUT COMPONENTS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            1. Basic Layout Components
          </Text>

          {/* Row Example */}
          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Row - Horizontal Layout
              </Text>
            </Box>
            <Row gap="s" justifyContent="space-between">
              <Box padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  Item 1
                </Text>
              </Box>
              <Box padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  Item 2
                </Text>
              </Box>
              <Box padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  Item 3
                </Text>
              </Box>
            </Row>
          </Surface>

          {/* Col Example */}
          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Col - Vertical Layout
              </Text>
            </Box>
            <Col gap="s">
              <Box padding="s" backgroundColor="success" borderRadius="s">
                <Text variant="caption" color="background">
                  Top
                </Text>
              </Box>
              <Box padding="s" backgroundColor="success" borderRadius="s">
                <Text variant="caption" color="background">
                  Middle
                </Text>
              </Box>
              <Box padding="s" backgroundColor="success" borderRadius="s">
                <Text variant="caption" color="background">
                  Bottom
                </Text>
              </Box>
            </Col>
          </Surface>

          {/* Stack Example */}
          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Stack - Vertical with Spacing
              </Text>
            </Box>
            <Stack spacing="m">
              <Box padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Stack Item 1
                </Text>
              </Box>
              <Box padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Stack Item 2
                </Text>
              </Box>
              <Box padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Stack Item 3
                </Text>
              </Box>
            </Stack>
          </Surface>

          {/* Center Example */}
          <Surface padding="m" minHeight={100}>
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Center - Centered Content
              </Text>
            </Box>
            <Center flex={1}>
              <Box padding="m" backgroundColor="warning" borderRadius="m">
                <Text variant="body" color="background">
                  Centered
                </Text>
              </Box>
            </Center>
          </Surface>

          {/* Spacer Example */}
          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Spacer - Fills Space
              </Text>
            </Box>
            <Row>
              <Box padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  Left
                </Text>
              </Box>
              <Spacer />
              <Box padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  Right
                </Text>
              </Box>
            </Row>
          </Surface>
        </Stack>

        {/* SECTION 2: SPACING PATTERNS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            2. Spacing Patterns
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Margin & Padding
              </Text>
            </Box>
            <Box
              margin="m"
              padding="l"
              backgroundColor="background"
              borderWidth={1}
              borderColor="border"
              borderRadius="m"
            >
              <Text variant="caption" color="text">
                margin="m" padding="l"
              </Text>
            </Box>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Responsive Spacing
            </Text>
            </Box>
            <Box
              margin={{ smallPhone: "xs", phone: "m", tablet: "xl" }}
              padding={{ smallPhone: "s", phone: "m", tablet: "l" }}
              backgroundColor="tint"
              borderRadius="m"
            >
              <Text variant="caption" color="background">
                Responsive margin & padding
              </Text>
            </Box>
          </Surface>
        </Stack>

        {/* SECTION 3: FLEXBOX PATTERNS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            3. Flexbox Patterns
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Flex Distribution
              </Text>
            </Box>
            <Row gap="s">
              <Box flex={1} padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  flex=1
                </Text>
              </Box>
              <Box flex={2} padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  flex=2
                </Text>
              </Box>
              <Box flex={1} padding="s" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  flex=1
                </Text>
              </Box>
            </Row>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Justify Content
              </Text>
            </Box>
            <Row justifyContent="space-between" gap="s">
              <Box padding="s" backgroundColor="success" borderRadius="s">
                <Text variant="caption" color="background">
                  Start
                </Text>
              </Box>
              <Box padding="s" backgroundColor="success" borderRadius="s">
                <Text variant="caption" color="background">
                  End
                </Text>
              </Box>
            </Row>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Align Items
              </Text>
            </Box>
            <Row alignItems="center" gap="s" minHeight={80}>
              <Box padding="s" backgroundColor="warning" borderRadius="s">
                <Text variant="caption" color="background">
                  Top
                </Text>
              </Box>
              <Box padding="m" backgroundColor="warning" borderRadius="s">
                <Text variant="caption" color="background">
                  Center
                </Text>
              </Box>
              <Box padding="s" backgroundColor="warning" borderRadius="s">
                <Text variant="caption" color="background">
                  Bottom
                </Text>
              </Box>
            </Row>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Gap Property
              </Text>
            </Box>
            <Row gap="l">
              <Box padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Gap
                </Text>
              </Box>
              <Box padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Between
                </Text>
              </Box>
              <Box padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Items
                </Text>
              </Box>
            </Row>
          </Surface>
        </Stack>

        {/* SECTION 4: SIZE PATTERNS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            4. Size Patterns
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Fixed Width & Height
            </Text>
            </Box>
            <Box
              width={150}
              height={80}
              backgroundColor="tint"
              borderRadius="m"
              justifyContent="center"
              alignItems="center"
            >
              <Text variant="caption" color="background">
                150x80
              </Text>
            </Box>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Min/Max Constraints
            </Text>
            </Box>
            <Box
              width="100%"
              minHeight={60}
              maxHeight={120}
              backgroundColor="success"
              borderRadius="m"
              padding="m"
              justifyContent="center"
            >
              <Text variant="caption" color="background">
                minHeight: 60, maxHeight: 120
              </Text>
            </Box>
          </Surface>
        </Stack>

        {/* SECTION 5: BORDER PATTERNS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            5. Border Patterns
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Border Radius
            </Text>
            </Box>
            <Row gap="s" flexWrap="wrap">
              <Box padding="m" backgroundColor="tint" borderRadius="xs">
                <Text variant="caption" color="background">
                  xs
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="s">
                <Text variant="caption" color="background">
                  s
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="m">
                <Text variant="caption" color="background">
                  m
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="l">
                <Text variant="caption" color="background">
                  l
                </Text>
              </Box>
            </Row>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Border Styles
              </Text>
            </Box>
            <Stack spacing="s">
              <Box
                padding="m"
                borderWidth={2}
                borderColor="border"
                borderStyle="solid"
                borderRadius="m"
              >
                <Text variant="caption" color="text">
                  Solid Border
                </Text>
              </Box>
              <Box
                padding="m"
                borderWidth={2}
                borderColor="border"
                borderStyle="dashed"
                borderRadius="m"
              >
                <Text variant="caption" color="text">
                  Dashed Border
                </Text>
              </Box>
              <Box
                padding="m"
                borderWidth={2}
                borderColor="border"
                borderStyle="dotted"
                borderRadius="m"
              >
                <Text variant="caption" color="text">
                  Dotted Border
                </Text>
              </Box>
            </Stack>
          </Surface>
        </Stack>

        {/* SECTION 6: POSITION PATTERNS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            6. Position Patterns
          </Text>

          <Surface padding="m" minHeight={200}>
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Absolute Positioning
            </Text>
            </Box>
            <Box flex={1} position="relative" backgroundColor="background" borderRadius="m">
              <Absolute top={10} left={10} padding="s" backgroundColor="error" borderRadius="s">
                <Text variant="caption" color="background">
                  Top Left
                </Text>
              </Absolute>
              <Absolute top={10} right={10} padding="s" backgroundColor="success" borderRadius="s">
                <Text variant="caption" color="background">
                  Top Right
                </Text>
              </Absolute>
              <Absolute bottom={10} left={10} padding="s" backgroundColor="warning" borderRadius="s">
                <Text variant="caption" color="background">
                  Bottom Left
                </Text>
              </Absolute>
              <Absolute bottom={10} right={10} padding="s" backgroundColor="info" borderRadius="s">
                <Text variant="caption" color="background">
                  Bottom Right
                </Text>
              </Absolute>
            </Box>
          </Surface>
        </Stack>

        {/* SECTION 7: VISUAL EFFECTS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            7. Visual Effects
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Elevation (Android Shadow)
            </Text>
            </Box>
            <Row gap="m" flexWrap="wrap">
              <Box padding="m" backgroundColor="tint" borderRadius="m" elevation={2}>
                <Text variant="caption" color="background">
                  Elevation 2
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="m" elevation={4}>
                <Text variant="caption" color="background">
                  Elevation 4
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="m" elevation={8}>
                <Text variant="caption" color="background">
                  Elevation 8
                </Text>
              </Box>
            </Row>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              iOS Shadow
            </Text>
            </Box>
            <Box
              padding="m"
              backgroundColor="background"
              borderRadius="m"
              shadowColor="text"
              shadowOpacity={0.3}
              shadowRadius={8}
              shadowOffset={{ width: 0, height: 4 }}
            >
              <Text variant="caption" color="text">
                iOS Shadow
              </Text>
            </Box>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
                Opacity
              </Text>
            </Box>
            <Row gap="s">
              <Box padding="m" backgroundColor="tint" borderRadius="m" opacity={1}>
                <Text variant="caption" color="background">
                  Opacity 1
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="m" opacity={0.7}>
                <Text variant="caption" color="background">
                  Opacity 0.7
                </Text>
              </Box>
              <Box padding="m" backgroundColor="tint" borderRadius="m" opacity={0.4}>
                <Text variant="caption" color="background">
                  Opacity 0.4
                </Text>
              </Box>
            </Row>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Z-Index Layering
            </Text>
            </Box>
            <Box flex={1} minHeight={100} position="relative">
              <Box
                position="absolute"
                top={20}
                left={20}
                width={80}
                height={80}
                backgroundColor="error"
                borderRadius="m"
                zIndex={1}
                justifyContent="center"
                alignItems="center"
              >
                <Text variant="caption" color="background">
                  z: 1
                </Text>
              </Box>
              <Box
                position="absolute"
                top={40}
                left={40}
                width={80}
                height={80}
                backgroundColor="success"
                borderRadius="m"
                zIndex={2}
                justifyContent="center"
                alignItems="center"
              >
                <Text variant="caption" color="background">
                  z: 2
                </Text>
              </Box>
              <Box
                position="absolute"
                top={60}
                left={60}
                width={80}
                height={80}
                backgroundColor="info"
                borderRadius="m"
                zIndex={3}
                justifyContent="center"
                alignItems="center"
              >
                <Text variant="caption" color="background">
                  z: 3
                </Text>
              </Box>
            </Box>
          </Surface>
        </Stack>

        {/* SECTION 8: SURFACE COMPONENT */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            8. Surface Component
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Default Surface
            </Text>
            </Box>
            <Text variant="caption" color="textDim">
              Material-like card with default shadow and background
            </Text>
          </Surface>

          <Surface
            padding="m"
            backgroundColor="tint"
            borderRadius="l"
            shadowColor="text"
            shadowOpacity={0.2}
          >
            <Box marginBottom="s">
              <Text variant="body" color="background">
                Custom Surface
              </Text>
            </Box>
            <Text variant="caption" color="background">
              Override default props
            </Text>
          </Surface>
        </Stack>

        {/* SECTION 9: RESPONSIVE PATTERNS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            9. Responsive Patterns
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Responsive Spacing
            </Text>
            </Box>
            <Box
              padding={{ smallPhone: "xs", phone: "m", tablet: "xl" }}
              margin={{ smallPhone: "xs", phone: "m", tablet: "l" }}
              backgroundColor="tint"
              borderRadius="m"
            >
              <Text variant="caption" color="background">
                Responsive padding & margin
              </Text>
            </Box>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Responsive Flex Direction
            </Text>
            </Box>
            <Box
              flexDirection={{ smallPhone: "column", phone: "column", tablet: "row" }}
              gap="m"
            >
              <Box flex={1} padding="m" backgroundColor="success" borderRadius="m">
                <Text variant="caption" color="background">
                  Item 1
                </Text>
              </Box>
              <Box flex={1} padding="m" backgroundColor="success" borderRadius="m">
                <Text variant="caption" color="background">
                  Item 2
                </Text>
              </Box>
            </Box>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Responsive Width
            </Text>
            </Box>
            <Box
              width={{ smallPhone: "100%", phone: "80%", tablet: "50%" }}
              padding="m"
              backgroundColor="info"
              borderRadius="m"
              alignSelf="center"
            >
              <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                Responsive width
              </Text>
            </Box>
          </Surface>
        </Stack>

        {/* SECTION 10: COMPLEX COMBINATIONS */}
        <Stack spacing="m">
          <Text variant="subheading" color="text">
            10. Complex Combinations
          </Text>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Card Layout
            </Text>
            </Box>
            <Stack spacing="m">
              <Box
                padding="l"
                backgroundColor="background"
                borderWidth={1}
                borderColor="border"
                borderRadius="l"
                shadowColor="text"
                shadowOpacity={0.1}
                shadowRadius={8}
                elevation={4}
              >
                <Box marginBottom="s">
                  <Text variant="heading" color="text">
                    Card Title
                  </Text>
                </Box>
                <Box marginBottom="m">
                  <Text variant="body" color="textDim">
                    Card description with some content
                  </Text>
                </Box>
                <Row justifyContent="flex-end" gap="s">
                  <Box padding="s" backgroundColor="tint" borderRadius="s">
                    <Text variant="caption" color="background">
                      Action 1
                    </Text>
                  </Box>
                  <Box padding="s" backgroundColor="success" borderRadius="s">
                    <Text variant="caption" color="background">
                      Action 2
                    </Text>
                  </Box>
                </Row>
              </Box>
            </Stack>
          </Surface>

          <Surface padding="m">
            <Box marginBottom="s">
              <Text variant="body" color="text">
              Grid Layout
            </Text>
            </Box>
            <Stack spacing="s">
              <Row gap="s">
                <Box flex={1} padding="m" backgroundColor="tint" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 1
                  </Text>
                </Box>
                <Box flex={1} padding="m" backgroundColor="tint" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 2
                  </Text>
                </Box>
                <Box flex={1} padding="m" backgroundColor="tint" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 3
                  </Text>
                </Box>
                <Box flex={1} padding="m" backgroundColor="tint" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 4
                  </Text>
                </Box>
              </Row>
              <Row gap="s">
                <Box flex={1} padding="m" backgroundColor="success" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 4
                  </Text>
                </Box>
                <Box flex={1} padding="m" backgroundColor="success" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 5
                  </Text>
                </Box>
                <Box flex={1} padding="m" backgroundColor="success" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 6
                  </Text>
                </Box>
                <Box flex={1} padding="m" backgroundColor="success" borderRadius="m">
                  <Text variant="caption" color="background" style={{ textAlign: "center" }}>
                    Grid 7
                  </Text>
                </Box>
              </Row>
            </Stack>
          </Surface>
        </Stack>

        {/* FOOTER SPACER */}
        <Box height={10} />
      </Col>
    </Screen>
  )
}

