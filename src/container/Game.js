import Game from "../component/Game"
import {connect} from 'react-redux'

import {jumpTo, getData} from '../action'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    jumpToMove(move) {
        dispatch(jumpTo(move))
    },
    fetchServerData() {
        let data = getData();
        dispatch(data)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);