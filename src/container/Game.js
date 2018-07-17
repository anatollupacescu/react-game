import Game from "../component/Game"
import {connect} from 'react-redux'

const mapStateToProps = ({history, stepNumber, xIsNext}) => ({
    history, stepNumber, xIsNext
});

export default connect(mapStateToProps)(Game);