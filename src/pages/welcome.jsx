import { useNavigate } from "react-router-dom";
import '../App.css'

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-bg-grid" />
      <div className="welcome-glow" />

      {/* Top marquee */}
      <div className="marquee-bar top">
        <div className="marquee-track forward">
          {Array(8).fill("✦ ROCK PAPER SCISSORS").map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>

      <div className="welcome-content">
        <div className="welcome-eyebrow">First to 5 wins</div>

        <h1 className="welcome-title">
          ROCK<br />
          PAPER<br />
          <span className="accent-line">SCISSORS</span>
        </h1>

        <button className="welcome-play-btn" onClick={() => navigate('/game')}>
          PLAY NOW
        </button>

        <p className="welcome-sub">You vs. The Machine</p>
      </div>

      {/* Bottom marquee */}
      <div className="marquee-bar bottom">
        <div className="marquee-track reverse">
          {Array(8).fill("★ NO MORE BORING GAMES — PLAY ONLINE TODAY").map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
