import { Translations } from "./en"

const ar: Translations = {
  common: {
    ok: "نعم",
    cancel: "حذف",
    back: "خلف",
  },
  quoteScreen: {
    title: "اقتباسات يومية",
    newQuotes: "اقتباسات جديدة",
    loading: "جارٍ تحميل الاقتباسات...",
    empty: "لا توجد اقتباسات بعد. اسحب للتحديث أو اضغط على اقتباسات جديدة.",
  },
  favoritesScreen: {
    title: "الاقتباسات المفضلة",
    remove: "إزالة",
    emptyTitle: "لا توجد مفضلات بعد",
    emptySubtitle: "اضغط على القلب في الاقتباس لحفظه هنا.",
  },
  tabs: {
    quotes: "اقتباسات",
    favorites: "المفضلة",
    settings: "الإعدادات",
  },
  settingsScreen: {
    title: "الإعدادات",
    subtitle: "خصّص تجربة التطبيق",
    appearance: "المظهر",
    theme: "السمة",
    language: "اللغة",
    notifications: "الإشعارات",
    pushNotifications: "إشعارات الدفع",
    pushNotificationsSubtitle: "استلم إشعارات حول التحديثات",
    about: "حول",
    version: "الإصدار",
    versionSubtitle: "معلومات إصدار التطبيق",
    themeModeLight: "فاتح",
    themeModeDark: "داكن",
    themeSystem: "النظام ({{mode}})",
  },
  welcomeScreen: {
    postscript:
      "ربما لا يكون هذا هو الشكل الذي يبدو عليه تطبيقك مالم يمنحك المصمم هذه الشاشات وشحنها في هذه الحالة",
    readyForLaunch: "تطبيقك تقريبا جاهز للتشغيل",
    exciting: "اوه هذا مثير",
  },
  errorScreen: {
    title: "هناك خطأ ما",
    friendlySubtitle:
      "هذه هي الشاشة التي سيشاهدها المستخدمون في عملية الانتاج عند حدوث خطأ. سترغب في تخصيص هذه الرسالة ( الموجودة في 'ts.en/i18n/app') وربما التخطيط ايضاً ('app/screens/ErrorScreen'). إذا كنت تريد إزالة هذا بالكامل، تحقق من 'app/app.tsp' من اجل عنصر <ErrorBoundary>.",
    reset: "اعادة تعيين التطبيق",
  },
  emptyStateComponent: {
    generic: {
      heading: "فارغة جداً....حزين",
      content: "لا توجد بيانات حتى الآن. حاول النقر فوق الزر لتحديث التطبيق او اعادة تحميله.",
      button: "لنحاول هذا مرّة أخرى",
    },
  },
}

export default ar
