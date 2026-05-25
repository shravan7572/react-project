import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'

const icons = { Rock: "🪨", Paper: "📄", Scissor: "✂️" }

function Game() {
    const navigate = useNavigate()
    const [playerchoice, setplayerchoice] = useState(null)
    const [computerchoice, setcomputerchoice] = useState(null)
    const [showresult, setshowresult] = useState(null)
    const [score, setscore] = useState({ player: 0, computer: 0 })
    const [history, sethistory] = useState([])
    const [wins, setwins] = useState(0)
    const [losses, setlosses] = useState(0)
    const [draws, setdraws] = useState(0)

    function getwinner(player, computer) {
        if(player === computer) return "Draw"
        if(
            (player === "Rock" && computer === "Scissor") ||
            (player === "Paper" && computer === "Rock") ||
            (player === "Scissor" && computer === "Paper")
        ) return "Win"
        return "Lose"
    }

    function choicess(playerChoice) {
        setplayerchoice(playerChoice)
        const choices = ["Rock", "Paper", "Scissor"]
        const compChoice = choices[Math.floor(Math.random() * 3)]
        setcomputerchoice(compChoice)
        const result = getwinner(playerChoice, compChoice)
        setshowresult(result)
        sethistory(prev => [...prev, result])
    }

    useEffect(() => {
        if(showresult === "Win") {
            setscore(prev => ({ ...prev, player: prev.player + 1 }))
            setwins(prev => prev + 1)
        } else if(showresult === "Lose") {
            setscore(prev => ({ ...prev, computer: prev.computer + 1 }))
            setlosses(prev => prev + 1)
        } else if(showresult === "Draw") {
            setdraws(prev => prev + 1)
        }
    }, [showresult])

    useEffect(() => {
        if(score.player >= 5 || score.computer >= 5) {
            
          navigate('/gameover', { state: { score } })
           
        }
    }, [score])

    function resetbutton() {
        setplayerchoice(null)
        setcomputerchoice(null)
        setshowresult(null)
        setscore({ player: 0, computer: 0 })
        sethistory([])
        setwins(0)
        setlosses(0)
        setdraws(0)
    }

    return (
        <div className="page">
            <div className="topbar">
                <button className="go-home" onClick={() => navigate('/')}>
                    ← home
                </button>
                <div className="scores-row">
                    <div className="sc-pill">you <span>{score.player}</span></div>
                    <div className="sc-pill">computer <span>{score.computer}</span></div>
                </div>
            </div>

            <div className="arena">
                <div className="circle-wrap">
                    <div className="circle-label">you</div>
                    <div className={`circle ${
                        showresult === "Win" ? "win" :
                        showresult === "Lose" ? "lose" :
                        showresult === "Draw" ? "draw" : ""
                    }`}>
                        <div className="circle-icon">
                            {playerchoice ? icons[playerchoice] : "🤔"}
                        </div>
                        <div className="circle-pick">
                            {playerchoice || "waiting"}
                        </div>
                    </div>
                </div>

                <div className="vs-center">
                    <div className="vs-dot"></div>
                    <span className={`badge ${
                        showresult === "Win" ? "badge-win" :
                        showresult === "Lose" ? "badge-lose" :
                        showresult === "Draw" ? "badge-draw" :
                        "badge-idle"
                    }`}>
                        {showresult || "go!"}
                    </span>
                    <div className="vs-dot"></div>
                </div>

                <div className="circle-wrap">
                    <div className="circle-label">computer</div>
                    <div className={`circle ${
                        showresult === "Lose" ? "win" :
                        showresult === "Win" ? "lose" :
                        showresult === "Draw" ? "draw" : ""
                    }`}>
                        <div className="circle-icon">
                            {computerchoice ? icons[computerchoice] : "🤖"}
                        </div>
                        <div className="circle-pick">
                            {computerchoice || "waiting"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="btns-row">
                <button className="cbtn" onClick={() => choicess("Rock")}>
                    <span className="cbtn-icon">🪨</span>
                    <span className="cbtn-label">rock</span>
                </button>
                <button className="cbtn" onClick={() => choicess("Paper")}>
                    <span className="cbtn-icon">📄</span>
                    <span className="cbtn-label">paper</span>
                </button>
                <button className="cbtn" onClick={() => choicess("Scissor")}>
                    <span className="cbtn-icon">✂️</span>
                    <span className="cbtn-label">scissors</span>
                </button>
            </div>

            <div className="footer-row">
                <div className="stats">
                    wins <span>{wins}</span> · losses <span>{losses}</span> · draws <span>{draws}</span>
                </div>
                <div className="hist-dots">
                    {history.map((h, i) => (
                        <div key={i} className={`hdot ${
                            h === "Win" ? "w" :
                            h === "Lose" ? "l" : "d"
                        }`} />
                    ))}
                </div>
                <button className="reset-btn" onClick={resetbutton}>reset</button>
            </div>
        </div>
    )
}

export default Game