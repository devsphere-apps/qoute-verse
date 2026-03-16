import { Translations } from "./en"

const ja: Translations = {
  common: {
    ok: "OK",
    cancel: "キャンセル",
    back: "戻る",
  },
  quoteScreen: {
    title: "今日の名言",
    newQuotes: "新しい名言",
    loading: "名言を読み込み中...",
    empty: "まだ名言がありません。引っ張って更新するか新しい名言を押してください。",
  },
  favoritesScreen: {
    title: "お気に入りの名言",
    remove: "削除",
    emptyTitle: "お気に入りはまだありません",
    emptySubtitle: "名言のハートをタップしてここに保存できます。",
  },
  tabs: {
    quotes: "名言",
    favorites: "お気に入り",
    settings: "設定",
  },
  settingsScreen: {
    title: "設定",
    subtitle: "アプリ体験をカスタマイズ",
    appearance: "外観",
    theme: "テーマ",
    language: "言語",
    notifications: "通知",
    pushNotifications: "プッシュ通知",
    pushNotificationsSubtitle: "更新について通知を受け取る",
    about: "情報",
    version: "バージョン",
    versionSubtitle: "アプリのバージョン情報",
    themeModeLight: "ライト",
    themeModeDark: "ダーク",
    themeSystem: "システム（{{mode}}）",
  },
  welcomeScreen: {
    postscript:
      "注目！ — このアプリはお好みの見た目では無いかもしれません(デザイナーがこのスクリーンを送ってこない限りは。もしそうなら公開しちゃいましょう！)",
    readyForLaunch: "このアプリはもう少しで公開できます！",
    exciting: "(楽しみですね！)",
  },
  errorScreen: {
    title: "問題が発生しました",
    friendlySubtitle:
      "本番では、エラーが投げられた時にこのページが表示されます。もし使うならこのメッセージに変更を加えてください(`app/i18n/jp.ts`)レイアウトはこちらで変更できます(`app/screens/ErrorScreen`)。もしこのスクリーンを取り除きたい場合は、`app/app.tsx`にある<ErrorBoundary>コンポーネントをチェックしてください",
    reset: "リセット",
  },
  emptyStateComponent: {
    generic: {
      heading: "静かだ...悲しい。",
      content:
        "データが見つかりません。ボタンを押してアプリをリロード、またはリフレッシュしてください。",
      button: "もう一度やってみよう",
    },
  },
}

export default ja
