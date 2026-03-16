import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import { I18nManager, TouchableOpacity } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import i18n from "i18next"
import { useTranslation } from "react-i18next"
import { Screen, Text, Box, Col, Stack, Surface, Row, Switch } from "@/components"
import { useAppTheme } from "@/theme/context"
import { useColorScheme } from "react-native"
import { storage } from "@/utils/storage"
import { reloadApp } from "@/utils/reloadApp"

export default function SettingsScreen() {
  const { theme, themeContext, setThemeContextOverride } = useAppTheme()
  const systemColorScheme = useColorScheme()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [themeScheme] = useMMKVString("ignite.themeScheme", storage)
  const [languageTag, setLanguageTag] = useMMKVString("ignite.languageTag", storage)
  const { t } = useTranslation()

  const getThemeLabel = () => {
    const mode = systemColorScheme === "dark" ? t("settingsScreen:themeModeDark") : t("settingsScreen:themeModeLight")
    if (themeContext === "dark") return t("settingsScreen:themeModeDark")
    if (themeContext === "light") return t("settingsScreen:themeModeLight")
    return t("settingsScreen:themeSystem", { mode })
  }

  const currentLanguage = languageTag || i18n.language || "en"
  const languages = [
    { tag: "en", label: "EN" },
    { tag: "ar", label: "AR" },
    { tag: "es", label: "ES" },
    { tag: "fr", label: "FR" },
    { tag: "hi", label: "HI" },
    { tag: "ja", label: "JA" },
    { tag: "ko", label: "KO" },
  ]

  const applyLanguage = async (tag: string) => {
    const shouldBeRTL = tag.startsWith("ar")
    const rtlChanged = I18nManager.isRTL !== shouldBeRTL

    setLanguageTag(tag)
    await i18n.changeLanguage(tag)

    if (rtlChanged) {
      I18nManager.allowRTL(shouldBeRTL)
      I18nManager.forceRTL(shouldBeRTL)
      reloadApp()
    }
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} useGradient>
      <Col padding="m" gap="l">
        {/* HEADER */}
        <Box marginBottom="s">
          <Text variant="heading" color="text" tx="settingsScreen:title" />
        </Box>
        <Text variant="body" color="textDim" tx="settingsScreen:subtitle" />

        {/* APPEARANCE SECTION */}
        <Stack spacing="m">
          <Box marginTop="m">
            <Text variant="subheading" color="text" tx="settingsScreen:appearance" />
          </Box>

          <Surface padding="m">
            <Stack spacing="m">
              <Row justifyContent="space-between" alignItems="center">
                <Col flex={1}>
                  <Text variant="body" color="text" tx="settingsScreen:theme" />
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

          <Surface padding="m">
            <Stack spacing="m">
              <Row justifyContent="space-between" alignItems="center">
                <Col flex={1}>
                  <Text variant="body" color="text" tx="settingsScreen:language" />
                  <Text variant="caption" color="textDim">
                    {currentLanguage}
                  </Text>
                </Col>
                <Row gap="s" flexWrap="wrap" justifyContent="flex-end">
                  {languages.map((lang) => {
                    const selected = currentLanguage.startsWith(lang.tag)
                    return (
                      <TouchableOpacity
                        key={lang.tag}
                        onPress={async () => {
                          await applyLanguage(lang.tag)
                        }}
                        activeOpacity={0.7}
                      >
                        <Box
                          paddingHorizontal="s"
                          paddingVertical="xs"
                          backgroundColor={selected ? "tint" : "background"}
                          borderRadius="s"
                        >
                          <Text
                            variant="caption"
                            color={selected ? "background" : "text"}
                            text={lang.label}
                          />
                        </Box>
                      </TouchableOpacity>
                    )
                  })}
                </Row>
              </Row>
            </Stack>
          </Surface>
        </Stack>

        {/* NOTIFICATIONS SECTION */}
        <Stack spacing="m">
          <Box marginTop="m">
            <Text variant="subheading" color="text" tx="settingsScreen:notifications" />
          </Box>

          <Surface padding="m">
            <Row justifyContent="space-between" alignItems="center">
              <Col flex={1}>
                <Text variant="body" color="text" tx="settingsScreen:pushNotifications" />
                <Text variant="caption" color="textDim" tx="settingsScreen:pushNotificationsSubtitle" />
              </Col>
              <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
            </Row>
          </Surface>
        </Stack>

        {/* ABOUT SECTION */}
        <Stack spacing="m">
          <Box marginTop="m">
            <Text variant="subheading" color="text" tx="settingsScreen:about" />
          </Box>

          <Surface padding="m">
            <Stack spacing="m">
              <Row justifyContent="space-between" alignItems="center">
                <Col flex={1}>
                  <Text variant="body" color="text" tx="settingsScreen:version" />
                  <Text variant="caption" color="textDim" tx="settingsScreen:versionSubtitle" />
                </Col>
                <Text variant="body" color="textDim">
                  1.0.0
                </Text>
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
