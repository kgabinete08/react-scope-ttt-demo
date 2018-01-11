import React from 'react';
import Box from './box.jsx';

const Row = (props) => {
  const boxes = [];
  for (let i = 0; i < 3; i += 1) {
    boxes.push(
      <Box key={i} status={props.status[i]} onClick={() => props.onClick(i)} />
    );
  }

  return (
    <div className="row">
      {boxes}
    </div>
  );
};

export default Row;
