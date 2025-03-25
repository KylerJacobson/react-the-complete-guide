import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    function handleSelectSquare() {
        setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
        console.log("active player: ", activePlayer);
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        name="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        name="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayer={activePlayer}
                />
            </div>
            LOG
        </main>
    );
}

export default App;
