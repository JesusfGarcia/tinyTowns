import React, { useEffect, useReducer } from 'react';

import './styles.scss';

import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';

import Tablero from '../../Components/Board';

const Board = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const seleccionar_carta = (item, idx) => {
    let body = {
      name: item,
      idx,
    };
    dispatch({ type: actions.seleccionarCarta, payload: body });
  };

  const seleccionar_monumento = item => {
    dispatch({ type: actions.seleccionarMonumento, payload: item });
  };

  const colocar_carta = item => {
    dispatch({ type: actions.colocarCarta, payload: item });
  };

  useEffect(() => {
    dispatch({ type: actions.barajear });
  }, []);

  return (
    <div className='container'>
      <div className='materialContainer'>
        {state.baraja
          .filter((card, idx) => idx < 3)
          .map((item, idx) => {
            return (
              <MaterialCard
                key={idx}
                name={item}
                idx={idx}
                click={() => seleccionar_carta(item, idx)}
              />
            );
          })}
      </div>
      <div className='edificiosContainer'>
        {state.edificiosJugables.map((item, idx) => {
          return (
            <MaterialCard
              key={idx}
              name={item.name}
              idx={idx}
              click={() => console.log('click')}
            />
          );
        })}
      </div>
      {!state.rosaSeleccionado && (
        <div>
          <button onClick={() => seleccionar_monumento(state.rosa[0])}>
            {state.rosa[0].name}
          </button>
          <button onClick={() => seleccionar_monumento(state.rosa[1])}>
            {state.rosa[1].name}
          </button>
        </div>
      )}
      <Tablero
        colocar_carta={item => colocar_carta(item)}
        tablero={state.tablero}
      />
    </div>
  );
};

const MaterialCard = ({ name, idx, click }) => {
  return (
    <div onClick={() => click()} className='materialCard'>
      {name}
      {idx}
    </div>
  );
};

export default Board;
