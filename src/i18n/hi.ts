import { Translations } from "./en"

const hi: Translations = {
  common: {
    ok: "ठीक है!",
    cancel: "रद्द करें",
    back: "वापस",
  },
  quoteScreen: {
    title: "दैनिक उद्धरण",
    newQuotes: "नए उद्धरण",
    loading: "उद्धरण लोड हो रहे हैं...",
    empty: "अभी कोई उद्धरण नहीं है। रिफ्रेश करने के लिए नीचे खींचें या नए उद्धरण दबाएँ।",
  },
  favoritesScreen: {
    title: "पसंदीदा उद्धरण",
    remove: "हटाएँ",
    emptyTitle: "अभी कोई पसंदीदा नहीं",
    emptySubtitle: "किसी उद्धरण को यहाँ सहेजने के लिए दिल पर टैप करें।",
  },
  tabs: {
    quotes: "उद्धरण",
    favorites: "पसंदीदा",
    settings: "सेटिंग्स",
  },
  settingsScreen: {
    title: "सेटिंग्स",
    subtitle: "अपने ऐप अनुभव को अनुकूलित करें",
    appearance: "दिखावट",
    theme: "थीम",
    language: "भाषा",
    notifications: "सूचनाएँ",
    pushNotifications: "पुश सूचनाएँ",
    pushNotificationsSubtitle: "अपडेट के बारे में सूचनाएँ प्राप्त करें",
    about: "जानकारी",
    version: "संस्करण",
    versionSubtitle: "ऐप संस्करण जानकारी",
    themeModeLight: "लाइट",
    themeModeDark: "डार्क",
    themeSystem: "सिस्टम ({{mode}})",
  },
  welcomeScreen: {
    postscript:
      "psst - शायद आपका ऐप ऐसा नहीं दिखता है। (जब तक कि आपके डिजाइनर ने आपको ये स्क्रीन नहीं दी हों, और उस स्थिति में, इसे लॉन्च करें!)",
    readyForLaunch: "आपका ऐप, लगभग लॉन्च के लिए तैयार है!",
    exciting: "(ओह, यह रोमांचक है!)",
  },
  errorScreen: {
    title: "कुछ गलत हो गया!",
    friendlySubtitle:
      "यह वह स्क्रीन है जो आपके उपयोगकर्ता संचालन में देखेंगे जब कोई त्रुटि होगी। आप इस संदेश को बदलना चाहेंगे (जो `app/i18n/hi.ts` में स्थित है) और शायद लेआउट भी (`app/screens/ErrorScreen`)। यदि आप इसे पूरी तरह से हटाना चाहते हैं, तो `app/app.tsx` में <ErrorBoundary> कंपोनेंट की जांच करें।",
    reset: "ऐप रीसेट करें",
  },
  emptyStateComponent: {
    generic: {
      heading: "इतना खाली... इतना उदास",
      content: "अभी तक कोई डेटा नहीं मिला। रीफ्रेश करने या ऐप को पुनः लोड करने के लिए बटन दबाएं।",
      button: "चलो फिर से कोशिश करते हैं",
    },
  },
}

export default hi
