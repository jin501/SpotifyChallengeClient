import React from 'react';

const Button = ({onClick, value}) => {
  return (
    <button className="Button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
