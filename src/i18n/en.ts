const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  quoteScreen: {
    title: "Daily Quotes",
    newQuotes: "New Quotes",
    loading: "Loading quotes...",
    empty: "No quotes yet. Pull to refresh or tap New Quotes.",
  },
  favoritesScreen: {
    title: "Favorite Quotes",
    remove: "Remove",
    emptyTitle: "No favorites yet",
    emptySubtitle: "Tap the heart on a quote to save it here.",
  },
  tabs: {
    quotes: "Quotes",
    favorites: "Favorites",
    settings: "Settings",
  },
  settingsScreen: {
    title: "Settings",
    subtitle: "Customize your app experience",
    appearance: "Appearance",
    theme: "Theme",
    language: "Language",
    notifications: "Notifications",
    pushNotifications: "Push Notifications",
    pushNotificationsSubtitle: "Receive notifications about updates",
    about: "About",
    version: "Version",
    versionSubtitle: "App version information",
    themeModeLight: "Light",
    themeModeDark: "Dark",
    themeSystem: "System ({{mode}})",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default en
export type Translations = typeof en
