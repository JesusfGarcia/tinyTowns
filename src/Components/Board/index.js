import React from 'react';

import './styles.css';

const Board = ({ tablero, colocar_carta }) => {
  return (
    <div className='containerTab'>
      {tablero.map((item, idx) => {
        return <Square colocar_carta={colocar_carta} key={idx} item={item} />;
      })}
    </div>
  );
};

const Square = ({ item, colocar_carta }) => {
  return (
    <div onClick={() => colocar_carta(item)} className='squareContainer'>
      <div className='square'>
        <p>{item.item}</p>
      </div>
    </div>
  );
};

export default Board;
