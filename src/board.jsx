import React from 'react';
import Row from './row.jsx';

const Board = (props) => {
  const rows = [];
  for (let i = 0; i < 3; i += 1) {
    rows.push(<Row key={i} status={props.data[i]} onClick={(boxId) => props.onClick(i, boxId)} />);
  }
  return (
    <div>
      <div id="board">
        {rows}
      </div>
    </div>
  );
};

export default Board;
