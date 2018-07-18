import React from "react"
import Counter from "./Counter"
import Board from "./Board"

class Game extends React.Component {

    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = this.props.winner;

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.props.jumpToMove(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <Counter count={countFilled(current.squares)} />
                <div className="game-board">
                    <Board squares={current.squares} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

const reducer = (accumulator, element) => {
    if (element === "X" || element === "O") {
        accumulator++
    }
    return accumulator
};

function countFilled(squares) {
    return squares.reduce(reducer, 0)
}

export default Game

