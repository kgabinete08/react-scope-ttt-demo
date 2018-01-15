import React from 'react';

const Box = (props) => {
  let text;

  if (props.status === null) {
    text = '-';
  } else if (props.status === true) {
    text = 'X';
  } else {
    text = 'O';
  }

  return (
    <div className="box" onClick={() => props.onClick()}>
      <div id="text">
        {text}
      </div>
    </div>
  );
};

export default Box;
