import { Translations } from "./en"

const es: Translations = {
  common: {
    ok: "OK",
    cancel: "Cancelar",
    back: "Volver",
  },
  quoteScreen: {
    title: "Citas diarias",
    newQuotes: "Nuevas citas",
    loading: "Cargando citas...",
    empty: "Aún no hay citas. Desliza para actualizar o toca Nuevas citas.",
  },
  favoritesScreen: {
    title: "Citas favoritas",
    remove: "Eliminar",
    emptyTitle: "Aún no hay favoritos",
    emptySubtitle: "Toca el corazón en una cita para guardarla aquí.",
  },
  tabs: {
    quotes: "Citas",
    favorites: "Favoritos",
    settings: "Ajustes",
  },
  settingsScreen: {
    title: "Ajustes",
    subtitle: "Personaliza tu experiencia en la app",
    appearance: "Apariencia",
    theme: "Tema",
    language: "Idioma",
    notifications: "Notificaciones",
    pushNotifications: "Notificaciones push",
    pushNotificationsSubtitle: "Recibe notificaciones sobre actualizaciones",
    about: "Acerca de",
    version: "Versión",
    versionSubtitle: "Información de versión de la app",
    themeModeLight: "Claro",
    themeModeDark: "Oscuro",
    themeSystem: "Sistema ({{mode}})",
  },
  welcomeScreen: {
    postscript:
      "psst — Esto probablemente no es cómo se va a ver tu app. (A menos que tu diseñador te haya enviado estas pantallas, y en ese caso, ¡lánzalas en producción!)",
    readyForLaunch: "Tu app, casi lista para su lanzamiento",
    exciting: "(¡ohh, esto es emocionante!)",
  },
  errorScreen: {
    title: "¡Algo salió mal!",
    friendlySubtitle:
      "Esta es la pantalla que verán tus usuarios en producción cuando haya un error. Vas a querer personalizar este mensaje (que está ubicado en `app/i18n/es.ts`) y probablemente también su diseño (`app/screens/ErrorScreen`). Si quieres eliminarlo completamente, revisa `app/app.tsx` y el componente <ErrorBoundary>.",
    reset: "REINICIA LA APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "Muy vacío... muy triste",
      content:
        "No se han encontrado datos por el momento. Intenta darle clic en el botón para refrescar o recargar la app.",
      button: "Intentemos de nuevo",
    },
  },
}

export default es
