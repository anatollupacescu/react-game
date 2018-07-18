import Game from "../component/Game"
import {connect} from 'react-redux'

import {jumpTo} from '../action'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    jumpToMove(move) {
        dispatch(jumpTo(move))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);