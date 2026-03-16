import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import { Screen, Text, Box, Col, Stack, Surface, Row, Switch } from "@/components"
import { useAppTheme } from "@/theme/context"
import { useColorScheme } from "react-native"
import { storage } from "@/utils/storage"

export default function SettingsScreen() {
  const { theme, themeContext, setThemeContextOverride } = useAppTheme()
  const systemColorScheme = useColorScheme()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [themeScheme] = useMMKVString("ignite.themeScheme", storage)

  const getThemeLabel = () => {
    if (themeContext === "dark") return "Dark"
    if (themeContext === "light") return "Light"
    return `System (${systemColorScheme === "dark" ? "Dark" : "Light"})`
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} useGradient>
      <Col padding="m" gap="l">
        {/* HEADER */}
        <Box marginBottom="s">
          <Text variant="heading" color="text">
            Settings
          </Text>
        </Box>
        <Text variant="body" color="textDim">
          Customize your app experience
        </Text>

        {/* APPEARANCE SECTION */}
        <Stack spacing="m">
          <Box marginTop="m">
            <Text variant="subheading" color="text">
              Appearance
            </Text>
          </Box>

          <Surface padding="m">
            <Stack spacing="m">
              <Row justifyContent="space-between" alignItems="center">
                <Col flex={1}>
                  <Text variant="body" color="text">
                    Theme
                  </Text>
                  <Text variant="caption" color="textDim">
                    {getThemeLabel()}
                  </Text>
                </Col>
                <Row gap="s">
                  <TouchableOpacity
                    onPress={() => setThemeContextOverride("light")}
                    activeOpacity={0.7}
                  >
                    <Box
                      padding="s"
                      backgroundColor={themeContext === "light" ? "tint" : "background"}
                      borderRadius="s"
                    >
                      <Ionicons
                        name="sunny"
                        size={20}
                        color={themeContext === "light" ? theme.colors.background : theme.colors.text}
                      />
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setThemeContextOverride("dark")}
                    activeOpacity={0.7}
                  >
                    <Box
                      padding="s"
                      backgroundColor={themeContext === "dark" ? "tint" : "background"}
                      borderRadius="s"
                    >
                      <Ionicons
                        name="moon"
                        size={20}
                        color={themeContext === "dark" ? theme.colors.background : theme.colors.text}
                      />
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setThemeContextOverride(undefined)}
                    activeOpacity={0.7}
                  >
                    <Box
                      padding="s"
                      backgroundColor={themeScheme === undefined ? "tint" : "background"}
                      borderRadius="s"
                    >
                      <Ionicons
                        name="phone-portrait"
                        size={20}
                        color={themeScheme === undefined ? theme.colors.background : theme.colors.text}
                      />
                    </Box>
                  </TouchableOpacity>
                </Row>
              </Row>
            </Stack>
          </Surface>
        </Stack>

        {/* NOTIFICATIONS SECTION */}
        <Stack spacing="m">
          <Box marginTop="m">
            <Text variant="subheading" color="text">
              Notifications
            </Text>
          </Box>

          <Surface padding="m">
            <Row justifyContent="space-between" alignItems="center">
              <Col flex={1}>
                <Text variant="body" color="text">
                  Push Notifications
                </Text>
                <Text variant="caption" color="textDim">
                  Receive notifications about updates
                </Text>
              </Col>
              <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
            </Row>
          </Surface>
        </Stack>

        {/* ABOUT SECTION */}
        <Stack spacing="m">
          <Box marginTop="m">
            <Text variant="subheading" color="text">
              About
            </Text>
          </Box>

          <Surface padding="m">
            <Stack spacing="m">
              <Row justifyContent="space-between" alignItems="center">
                <Col flex={1}>
                  <Text variant="body" color="text">
                    Version
                  </Text>
                  <Text variant="caption" color="textDim">
                    App version information
                  </Text>
                </Col>
                <Text variant="body" color="textDim">
                  1.0.0
                </Text>
              </Row>
            </Stack>
          </Surface>

          <Surface padding="m">
            <Stack spacing="m">
              <Row justifyContent="space-between" alignItems="center">
                <Col flex={1}>
                  <Text variant="body" color="text">
                    Pattern Playground
                  </Text>
                  <Text variant="caption" color="textDim">
                    Layout system demonstration
                  </Text>
                </Col>
                <Ionicons name="chevron-forward" size={20} color={theme.colors.textDim} />
              </Row>
            </Stack>
          </Surface>
        </Stack>

        {/* FOOTER SPACER */}
        <Box height={40} />
      </Col>
    </Screen>
  )
}

