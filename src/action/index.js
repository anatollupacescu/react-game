export const CLICK = 'ACTION_O';
export const JUMP_TO_STEP = 'JUMP_TO_STEP';

export const cellClick = (id) => ({
    type: CLICK,
    id
});

export const jumpTo = (step) => ({
    type: JUMP_TO_STEP,
    step
});

export default { cellClick, jumpTo }