import {initialState} from './initialState'
import {CLICK, JUMP_TO_STEP} from '../action'

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK:
            return click(state, action.id);
        case JUMP_TO_STEP:
            return jumpToStep(state, action.step);
        default:
            return state
    }
};

function click(state, i) {
    var { winner } = state;
    if (winner) {
        return state
    }
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = state.xIsNext ? "X" : "O";
    winner = calculateWinner(squares);
    return {
        history: history.concat([{squares}]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        winner
    }
}

const jumpToStep = (state, step) => ({
    stepNumber: step,
    history: state.history.slice(0, step + 1),
    xIsNext: (step % 2) === 0
});

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default appReducer
