* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  min-height: 100vh;
  background: #1a1a2e;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 16px;
  font-family: sans-serif;
}

.app {
  background: #16213e;
  border-radius: 20px;
  padding: 28px;
  width: 100%;
  max-width: 340px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

h1 {
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 20px;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.tab {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: #0f3460;
  color: #aaa;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.tab.active {
  background: #e94560;
  color: #fff;
}

/* Standard Calculator */
#display {
  background: #0f3460;
  color: #fff;
  font-size: 2rem;
  text-align: right;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 16px;
  min-height: 70px;
  word-break: break-all;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.buttons button {
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  background: #1a1a2e;
  color: #e0e0e0;
  transition: background 0.2s;
}

.buttons button:hover { background: #533483; }
.buttons .op { background: #e94560; color: #fff; }
.buttons .op:hover { background: #c73652; }
.buttons .zero { grid-column: span 2; text-align: left; padding-left: 24px; }

/* Age Calculator */
.age-form { display: flex; flex-direction: column; gap: 10px; }

.age-form label {
  font-size: 0.8rem;
  color: #aaa;
}

.age-form label span {
  font-size: 0.7rem;
  color: #666;
}

.age-form input {
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background: #0f3460;
  color: #fff;
  font-size: 1rem;
  width: 100%;
}

.calc-btn {
  margin-top: 6px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #e94560;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.calc-btn:hover { background: #c73652; }

.age-result { margin-top: 20px; }

.main-age {
  background: #0f3460;
  color: #fff;
  padding: 16px;
  border-radius: 10px;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 14px;
}

.age-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}

.age-card {
  background: #0f3460;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}

.age-card p { font-size: 0.75rem; color: #aaa; margin-bottom: 4px; }
.age-card h3 { font-size: 1.2rem; color: #fff; }

.next-bday {
  background: #0f3460;
  color: #ccc;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.next-bday strong { color: #fff; }
.next-bday span {
  background: #e94560;
  color: #fff;
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 20px;
}

.error { color: #e94560; font-size: 0.85rem; margin-top: 10px; }
.hidden { display: none !important; }
