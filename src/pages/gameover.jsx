import { useNavigate, useLocation } from "react-router-dom";
import '../App.css'


function Gameover() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score;
  const playerWon = score?.player >= 5;

  return (
    <div className="gameover-page">
      <div className="gameover-bg" />
      <div className={`gameover-glow ${playerWon ? 'glow-win' : 'glow-lose'}`} />

      <div className="gameover-content">
        <div className="gameover-emoji">{playerWon ? "🏆" : "💀"}</div>

        <div className="gameover-label">match result</div>

        <h1 className="gameover-title">
          {playerWon ? "You Won!" : "You Lost!"}
        </h1>

        <div className="final-score">
          {score?.player} — {score?.computer}
        </div>

        <div className="score-sub">player · computer</div>

        <div className="divider" />

        <div className="btn-row">
          <button className="start-btn" onClick={() => navigate('/game')}>
            Play Again
          </button>
          <button className="home-btn" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gameover;
