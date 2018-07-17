import React from 'react';

const Square = ({value, index, squareClicked}) => (
    <button className="square" onClick={() => squareClicked(index) }>
        {value}
    </button>
);

export default Square