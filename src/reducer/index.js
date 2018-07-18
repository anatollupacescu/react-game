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
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = state.xIsNext ? "X" : "O";
    return {
        history: history.concat([{squares}]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
    }
}

const jumpToStep = (state, step) => ({
    stepNumber: step,
    history: state.history.slice(0, step + 1),
    xIsNext: (step % 2) === 0
});

export default appReducer
