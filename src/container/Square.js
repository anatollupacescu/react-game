import {cellClick} from "../action/index";
import {connect} from "react-redux";
import Square from "../component/Square";

const mapDispatchToProps = (dispatch) => ({
    squareClicked(i) {
        let clickAction = cellClick(i);
        dispatch(clickAction)
    }
});

export default connect(null, mapDispatchToProps)(Square)