import React from 'react';

import {cellClick} from "../action/index";
import {connect} from "react-redux";

const Square = ({value, index, squareClicked}) => (
    <button className="square" onClick={() => squareClicked(index) }>
        {value}
    </button>
);

const mapDispatchToProps = (dispatch) => ({
    squareClicked(i) {
        dispatch(cellClick(i))
    }
})

const ConnectedSquare = connect(null, mapDispatchToProps)(Square)

export { ConnectedSquare as Square};

export default Square;