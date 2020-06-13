import React from 'react';

import './styles.scss';

const Board = ({ tablero, colocar_carta, tratar_construir }) => {
  return (
    <div className='containerTab'>
      {tablero.map((item, idx) => {
        return (
          <Square
            tratar_construir={tratar_construir}
            colocar_carta={colocar_carta}
            key={idx}
            item={item}
          />
        );
      })}
    </div>
  );
};

const Square = ({ item, colocar_carta, tratar_construir }) => {
  return (
    <div
      onClick={
        item.construible
          ? () => tratar_construir(item)
          : () => colocar_carta(item)
      }
      className={'squareContainer'}
    >
      <div className={item.construible ? 'squarePlus' : 'square'}>
        <img src={item.item.src} alt={item.item.name} className='imageItem' />
      </div>
    </div>
  );
};

export default Board;
