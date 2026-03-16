import { Translations } from "./en"

const fr: Translations = {
  common: {
    ok: "OK !",
    cancel: "Annuler",
    back: "Retour",
  },
  quoteScreen: {
    title: "Citations du jour",
    newQuotes: "Nouvelles citations",
    loading: "Chargement des citations...",
    empty: "Aucune citation pour l'instant. Tirez pour actualiser ou appuyez sur Nouvelles citations.",
  },
  favoritesScreen: {
    title: "Citations favorites",
    remove: "Supprimer",
    emptyTitle: "Aucun favori pour le moment",
    emptySubtitle: "Appuyez sur le cœur d’une citation pour l’enregistrer ici.",
  },
  tabs: {
    quotes: "Citations",
    favorites: "Favoris",
    settings: "Paramètres",
  },
  settingsScreen: {
    title: "Paramètres",
    subtitle: "Personnalisez votre expérience",
    appearance: "Apparence",
    theme: "Thème",
    language: "Langue",
    notifications: "Notifications",
    pushNotifications: "Notifications push",
    pushNotificationsSubtitle: "Recevez des notifications sur les mises à jour",
    about: "À propos",
    version: "Version",
    versionSubtitle: "Informations sur la version de l’application",
    themeModeLight: "Clair",
    themeModeDark: "Sombre",
    themeSystem: "Système ({{mode}})",
  },
  welcomeScreen: {
    postscript:
      "psst  — Ce n'est probablement pas à quoi ressemble votre application. (À moins que votre designer ne vous ait donné ces écrans, dans ce cas, mettez la en prod !)",
    readyForLaunch: "Votre application, presque prête pour le lancement !",
    exciting: "(ohh, c'est excitant !)",
  },
  errorScreen: {
    title: "Quelque chose s'est mal passé !",
    friendlySubtitle:
      "C'est l'écran que vos utilisateurs verront en production lorsqu'une erreur sera lancée. Vous voudrez personnaliser ce message (situé dans `app/i18n/fr.ts`) et probablement aussi la mise en page (`app/screens/ErrorScreen`). Si vous voulez le supprimer complètement, vérifiez `app/app.tsx` pour le composant <ErrorBoundary>.",
    reset: "RÉINITIALISER L'APPLICATION",
  },
  emptyStateComponent: {
    generic: {
      heading: "Si vide... si triste",
      content:
        "Aucune donnée trouvée pour le moment. Essayez de cliquer sur le bouton pour rafraîchir ou recharger l'application.",
      button: "Essayons à nouveau",
    },
  },
}

export default fr
