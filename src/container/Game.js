import Game from "../component/Game"
import {connect} from 'react-redux'

import {jumpTo} from '../action'

const mapStateToProps = ({history, stepNumber, xIsNext}) => ({
    history, stepNumber, xIsNext
});

const mapDispatchToProps = (dispatch) => ({
    jumpToMove(move) {
        dispatch(jumpTo(move))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);