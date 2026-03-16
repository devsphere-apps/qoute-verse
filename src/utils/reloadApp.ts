import { DevSettings } from "react-native"

export function reloadApp() {
  try {
    DevSettings.reload()
  } catch {}
}
