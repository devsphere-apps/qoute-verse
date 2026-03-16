import { Box, Col, Row, Screen, Surface, Text } from "@/components";
import { useAppTheme } from "@/theme/context";

export default function HomeScreen() {

    const { theme, themed } = useAppTheme();

    return (
        <Screen preset="auto" safeAreaEdges={["top"]} systemBarStyle="auto">
            <Col padding={{ smallPhone: "s", phone: "m", tablet: "l" }}>
                <Text variant="heading" color="text">Play with exsiting components</Text>
                <Box marginTop="m">
                    <Text variant="body" color="text">This is a body text</Text>
                </Box>
                <Box marginTop="m">
                    <Text variant="subheading" color="text">This is a subheading text</Text>
                </Box>
                <Box marginTop="m">
                    <Text variant="caption" color="text">This is a caption text</Text>
                </Box>
            </Col>
        </Screen>
    )
}
