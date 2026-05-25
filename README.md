# ✂️ Rock Paper Scissors

A sleek, full-screen Rock Paper Scissors game built with React + Vite. Play against the computer in a best-of-10 match (first to 5 wins).

---

## 🎮 How to Play

- Choose **Rock**, **Paper**, or **Scissors**
- First to **5 points** wins the match
- Hit **Reset** to restart mid-game
- After a match ends, choose **Play Again** or go back **Home**

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/rock-paper-scissors.git
cd rock-paper-scissors

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🗂️ Project Structure

```
src/
├── pages/
│   ├── welcome.jsx      # Landing / home screen
│   ├── game.jsx         # Main game screen
│   └── gameover.jsx     # Match result screen
├── App.jsx              # Route definitions
├── App.css              # All component styles
├── index.css            # Global reset & base styles
└── main.jsx             # App entry point
```

---

## 🛠️ Built With

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool
- [React Router](https://reactrouter.com/) — Client-side routing
- [Google Fonts](https://fonts.google.com/) — Bebas Neue, DM Sans, Space Mono

---

## ✨ Features

- Full-screen dark themed UI
- Animated win / lose / draw circles with color glow
- Live score tracking with history dots in the footer
- Match ends automatically at 5 points
- Responsive layout

---

## 📄 License

MIT — free to use and modify.