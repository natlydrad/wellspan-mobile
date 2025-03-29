## 📱 Mobile Version
👉 Want to use this on your phone? [Check out the WellSpan Mobile App](https://github.com/natlydrad/wellspan-mobile)

---

## ✨ Credits
Created with 🤍🐸 by nat for sky lab.

---

## 📱 Mobile App README (for repo: `wellspan-mobile`)

# WellSpan Mobile App (React Native + Expo)

A companion mobile app to the WellSpan web app. Users input lifestyle data and receive a forecast of their quality of life and life expectancy, visualized on a chart.

---

## 📱 Features
- Clean React Native interface
- Same logic and backend API as the web version
- Line chart to visualize forecast over time
- Easy reset/start-over flow

---

## ⚙️ Tech Stack
| Tech               | Description         |
|--------------------|---------------------|
| React Native       | Frontend framework  |
| Expo               | Build & dev tool    |
| react-native-chart-kit | Chart rendering |
| Flask (API)        | Same as web app     |

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/wellspan-mobile.git
   cd wellspan-mobile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run on Expo Go:**
   ```bash
   npx expo start
   ```

4. **Ensure `.env` has:**
   ```env
   API_URL=https://wellspan-backend.onrender.com
   ```

---

## 📡 Backend API
Uses the same `/calculate` endpoint as the web app.
Make sure the backend is deployed or running locally.

---

## 🧪 Testing Tips
- Test with realistic inputs (age, height, etc.)
- If your chart is flat: check if forecast data is coming back as expected
- Use `console.log(results.qolForecast)` in ResultScreen.js to debug

---

## 🔗 Related
- Web App & API: https://github.com/yourusername/wellspan
