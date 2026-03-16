# QuoteVerse – Daily Quote App
React Native Developer Assignment – Dev Innovations Labs

QuoteVerse is a modern React Native application that provides daily motivational quotes. Built with a focus on clean UI, smooth performance, and robust architecture.

## 🚀 Core Features
- **Daily Quotes**: Fetches high-quality quotes from the [API Ninjas Quotes API](https://api-ninjas.com/api/quotes).
- **Persistent Favorites**: Save your favorite quotes locally and access them anytime.
- **Quote Sharing**: Share inspirational quotes with your friends and family using native sharing.
- **Beautiful UI**: Clean, modular, and responsive design with support for **Light and Dark modes**.
- **Themed Experience**: Enhanced with a beautiful gradient background and custom themed components.

## 🛠️ Tech Stack
- **Framework**: [Expo](https://expo.dev/) (SDK 54) with **Expo Router**
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Local Persistence**: [MMKV](https://github.com/mrousavy/react-native-mmkv) (High-performance synchronous storage)
- **Networking**: [Apisauce](https://github.com/infinitered/apisauce) (Axios-based API client)
- **Styling**: Custom design system using **Design Tokens** and **Themed Styles**
- **UI Enhancements**: `expo-linear-gradient` for beautiful backgrounds, `Ionicons` for iconography

## 📦 Project Structure
```text
src/
├── app/             # Expo Router (Tabs & Layouts)
├── components/      # Reusable UI components (Themed)
│   └── layout/      # Flexbox layout helpers (Col, Row, Box, etc.)
├── config/          # Environment & API configurations
├── i18n/            # Internationalization (i18next)
├── screens/         # Application screens
├── services/        # API and external services
├── store/           # Zustand state management
├── theme/           # Design tokens (Colors, Spacing, Typography)
└── utils/           # Helper functions and hooks
```

## ⚙️ Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [Yarn](https://yarnpkg.com/) or NPM
- [Expo Go](https://expo.dev/expo-go) (for testing) or a development client build.

### 2. Clone the Repository
```bash
git clone <your-repo-url>
cd quote-verse
```

### 3. Install Dependencies
```bash
yarn install
```

### 4. API Configuration
You'll need an API key from [API Ninjas](https://api-ninjas.com/api/quotes).
- Open `src/config/config.dev.ts` (and `config.prod.ts`).
- Replace `YOUR_API_KEY_HERE` with your actual API key.

```typescript
export default {
  API_URL: "https://api.api-ninjas.com/v1/",
  API_KEY: "your_actual_api_key_here",
}
```

### 5. Running the App
Since this project uses native modules like **MMKV**, it's recommended to run it via a development client or a prebuild.

#### Start Metro Bundler
```bash
npx expo start
```

- Press **i** for iOS Simulator.
- Press **a** for Android Emulator.
- Press **w** for Web.
- Scan the QR code with **Expo Go** (some native features may be limited in Expo Go).

## ✨ Bonus Features Implemented
- **Native Share Support**: Easily share quotes across apps.
- **Linear Gradient Background**: High-quality visual polish on every screen.
- **Dark Mode Support**: Full theme switching based on user preference or system settings.
- **Persistence**: Your favorites are saved instantly and persist across app restarts.
- **Clean Architecture**: Strictly followed a modular folder structure and clean code practices.

---
Built by **Abdul Mateen** for the Dev Innovations Labs Assignment.
