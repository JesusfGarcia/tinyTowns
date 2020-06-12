import React from 'react';

import './styles.scss';

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
    <div onClick={() => colocar_carta(item)} className={'squareContainer'}>
      <div className={item.construible ? 'squarePlus' : 'square'}>
        <img src={item.item.src} alt='' className='imageItem' />
      </div>
    </div>
  );
};

export default Board;
