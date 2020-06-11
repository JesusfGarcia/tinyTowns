import React, { useEffect, useReducer } from 'react';

import './styles.scss';

import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';

import Tablero from '../../Components/Board';

const Board = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checarNeutro = () => {
    let edificio = state.edificiosJugables[0];
    state.tablero.map(item => {
      try {
        if (
          item.item === 'vidrio' &&
          item.right.item === 'trigo' &&
          item.bot.item === 'ladrillo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id],
          });
        }
        if (
          item.right.item === edificio.materiales[0] &&
          item.bot.item === edificio.materiales[1] &&
          item.botRight.item === edificio.materiales[2]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.right.id, item.bot.id, item.botRight.id],
          });
        }
        if (
          item.item === 'ladrillo' &&
          item.bot.item === 'vidrio' &&
          item.botRight.item === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.bot.id, item.botRight.id],
          });
        }
        if (
          item.item === 'vidrio' &&
          item.right.item === 'ladrillo' &&
          item.bot.item === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.bot.id, item.right.id],
          });
        }
        if (
          item.item === 'trigo' &&
          item.right.item === 'vidrio' &&
          item.botRight.item === 'ladrillo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.right.id, item.id, item.botRight.id],
          });
        }
        if (
          item.left.item === 'trigo' &&
          item.top.item === 'ladrillo' &&
          item.topLeft.item === 'vidrio'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.left.id, item.top.id, item.topLeft.id],
          });
        }
        if (
          item.item === 'ladrillo' &&
          item.top.item === 'vidrio' &&
          item.topLeft.item === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.top.id, item.topLeft.id],
          });
        }
        if (
          item.item === 'vidrio' &&
          item.left.item === 'ladrillo' &&
          item.top.item === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.top.id],
          });
        }
        if (
          item.item === 'trigo' &&
          item.left.item === 'vidrio' &&
          item.topLeft.item
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.topLeft.id],
          });
        }
        if (
          item.item === 'vidrio' &&
          item.left.item === 'ladrillo' &&
          item.bot.item === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.bot.id],
          });
        }
      } catch (error) {}
    });
  };

  const verificar_construcciones = () => {
    dispatch({ type: actions.verificarConstrucciones });

    checarNeutro();
  };

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

  const cancelar_construccion = () => {
    dispatch({ type: actions.cancelarConstruccion });
  };

  useEffect(() => {
    dispatch({ type: actions.barajear });
  }, []);

  return (
    <div className='grid-container'>
      <div className='top'>Tiny Towns</div>
      <div className='tablero'>
        <Tablero
          colocar_carta={item => colocar_carta(item)}
          tablero={state.tablero}
        />
      </div>
      <div className='cartas'>
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
      </div>
      <div className='materiales'>
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
      <div className='botones'>
        {state.estaConstruyendo ? (
          <button
            className='boton-style'
            onClick={() => cancelar_construccion()}
          >
            Cancelar
          </button>
        ) : (
          <button
            className='boton-style'
            onClick={() => verificar_construcciones()}
          >
            Construir
          </button>
        )}

        <button className='boton-style' onClick={() => alert('hola')}>
          Abandonar{' '}
        </button>
      </div>
    </div>
  );
};

const MaterialCard = ({ name, idx, click }) => {
  return (
    <div onClick={() => click()} className='materialCard'>
      {name}
    </div>
  );
};

export default Board;
