# WellSpan – Mobile App

A mobile version of the WellSpan lifestyle forecasting tool, built with React Native + Expo.

Users input basic health and lifestyle data to forecast their **Life Expectancy** and **Quality of Life**, compared with the **Average American** and **Ideal** lifestyles.

## 📲 Features
- Native sliders and radio buttons for lifestyle input
- Real-time chart showing QoL projection
- Fully responsive on iOS and Android
- Connects to the same backend as the web app

## ⚙️ Tech Stack
- **React Native** + Expo
- **Backend:** Connects to Flask API (Render)
- **Charting:** `react-native-chart-kit`
- **Tested with:** Expo Go

## 🚀 Running Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/wellspan-mobile.git
cd wellspan-mobile
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run with Expo
```bash
npx expo start
```

> Use the QR code with Expo Go to preview on your phone.
>
> Be sure to update the `fetch()` URL in `FormScreen.js` to match your live backend.

---

Created with ❤️ by nat 🐸 for sky lab ⭐️.

