# 🖋️ QuoteVerse – Daily Quote App

**QuoteVerse** is a modern, high-performance React Native application designed for inspiration. This project was built as a developer assessment for **Dev Innovations Labs**, focusing on premium UI/UX, robust state management, and fluid animations.

---

## 🚀 Core Features
- **Daily Quotes**: Fetches real-time inspirational quotes from the [API Ninjas Quotes API](https://api-ninjas.com/api/quotes).
- **Persistent Favorites**: Save quotes locally using **MMKV** for lightning-fast persistence.
- **Native Sharing**: Share quotes directly to social media or messaging apps.
- **Dynamic Theming**: Full support for **Light and Dark modes**, respecting system preferences.
- **Internationalization**: Support for **7 languages** (AR, EN, ES, FR, HI, JA, KO).

---

## ✨ Premium Animations & UI/UX (Bonus)
This project features advanced micro-interactions and animations powered by **React Native Reanimated**:

- **Animated FlatList (Visibility-Based)**: 
  - Items smoothly **fade and scale (0.6 → 1.0)** as they enter or leave the viewport.
  - Implemented using the professional `onViewableItemsChanged` pattern for optimal performance.
- **Staggered Entrances**: List items flow into the screen with a natural **waterfall delay**, creating a premium feel.
- **Instagram-Style Favorites**: 
  - A subtle **crossfade animation** (150ms) when toggling the heart icon.
  - Absolute positioning ensures zero layout shift during the state transition.
- **Fluid Layout Transitions**: Removing favorites triggers a **Linear Layout Transition**, causing remaining items to slide smoothly into place.
- **Tactile Button Feedback**: All buttons feature a **spring-based scale-down (0.96)** on press for immediate physical feedback.
- **Pulsing Empty State**: A gentle, looping heart pulse in the Favorites screen to keep the UI "alive" even when empty.
- **Gradient Backgrounds**: Every screen is wrapped in a high-quality **Linear Gradient** for added visual depth.

---

## 🛠️ Tech Stack
- **Framework**: [Expo](https://expo.dev/) (SDK 54) with **Expo Router** (File-based navigation)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Local Storage**: [MMKV](https://github.com/mrousavy/react-native-mmkv) (Synchronous, high-performance)
- **Networking**: [Apisauce](https://github.com/infinitered/apisauce)
- **Styling**: Custom Design System with **Design Tokens** (Themed Styles)
- **Type Safety**: 100% **TypeScript**

---

## 📦 Project Structure
```text
src/
├── app/             # Expo Router (Navigation, Tabs, Layouts)
├── components/      # Atomic UI components (Themed & Animated)
│   └── layout/      # Flexbox helpers (Col, Row, Box, Surface)
├── i18n/            # Localization (i18next)
├── screens/         # Main application screens
├── services/        # API Client and Networking
├── store/           # Zustand Stores
├── theme/           # Design Tokens (Colors, Spacing, Typography)
└── utils/           # Helper hooks and utilities
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [Yarn](https://yarnpkg.com/) or NPM
- [Expo Go](https://expo.dev/expo-go) or a Development Client

### 2. Installation
```bash
git clone <your-repo-url>
cd quote-verse
yarn install
```

### 3. Environment Setup
Create a `.env` file or update your config:
```bash
EXPO_PUBLIC_API_URL=https://api.api-ninjas.com/v1/
EXPO_PUBLIC_API_KEY=your_api_key_from_api_ninjas
```

### 4. Running the App
```bash
npx expo start
```
- Press **i** for iOS Simulator.
- Press **a** for Android Emulator.

---

## 👨‍💻 Developed By
**Abdul Mateen**  
*React Native Developer Assignment – Dev Innovations Labs*
