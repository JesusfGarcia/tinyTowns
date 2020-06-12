import React, { useEffect, useReducer } from 'react';

import './styles.scss';

import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';

import Tablero from '../../Components/Board';

import maderaPhoto from '../../images/tronco.png';
import vidrioPhoto from '../../images/vidrio.png';
import piedraPhoto from '../../images/piedra.png';
import trigoPhoto from '../../images/trigo.png';
import ladrilloPhoto from '../../images/ladrillo.png';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Board = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checarNeutro = () => {
    let edificio = state.edificiosJugables[0];
    state.tablero.map(item => {
      try {
        if (
          item.item.name === 'vidrio' &&
          item.right.item.name === 'trigo' &&
          item.bot.item.name === 'ladrillo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id],
          });
        }
        if (
          item.right.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.botRight.item.name === edificio.materiales[2]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.right.id, item.bot.id, item.botRight.id],
          });
        }
        if (
          item.item.name === 'ladrillo' &&
          item.bot.item.name === 'vidrio' &&
          item.botRight.item.name === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.bot.id, item.botRight.id],
          });
        }
        if (
          item.item.name === 'vidrio' &&
          item.right.item.name === 'ladrillo' &&
          item.bot.item.name === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.bot.id, item.right.id],
          });
        }
        if (
          item.item.name === 'trigo' &&
          item.right.item.name === 'vidrio' &&
          item.botRight.item.name === 'ladrillo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.right.id, item.id, item.botRight.id],
          });
        }
        if (
          item.left.item.name === 'trigo' &&
          item.top.item.name === 'ladrillo' &&
          item.topLeft.item.name === 'vidrio'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.left.id, item.top.id, item.topLeft.id],
          });
        }
        if (
          item.item.name === 'ladrillo' &&
          item.top.item.name === 'vidrio' &&
          item.topLeft.item.name === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.top.id, item.topLeft.id],
          });
        }
        if (
          item.item.name === 'vidrio' &&
          item.left.item.name === 'ladrillo' &&
          item.top.item.name === 'trigo'
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.top.id],
          });
        }
        if (
          item.item.name === 'trigo' &&
          item.left.item.name === 'vidrio' &&
          item.topLeft.item.name
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.topLeft.id],
          });
        }
        if (
          item.item.name === 'vidrio' &&
          item.left.item.name === 'ladrillo' &&
          item.bot.item.name === 'trigo'
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
      item: item,
      idx,
    };
    dispatch({ type: actions.seleccionarCarta, payload: body });
  };

  const seleccionar_monumento = item => {
    dispatch({ type: actions.seleccionarMonumento, payload: item });
    cerrarModal();
  };

  const colocar_carta = item => {
    dispatch({ type: actions.colocarCarta, payload: item });
  };

  const cancelar_construccion = () => {
    dispatch({ type: actions.cancelarConstruccion });
  };

  const cerrarModal = () => {
    MySwal.fire({
      title: 'Monumento Seleccionado!',
    });
  };

  useEffect(() => {
    dispatch({ type: actions.barajear });
    MySwal.fire({
      title: <p>Bienvenido a Tiny Towns</p>,
      backdrop: `
      rgba(0,0,123,0.4)
    `,
      showConfirmButton: false,
      html: (
        <div>
          <button onClick={() => seleccionar_monumento(state.rosa[0])}>
            {state.rosa[0].name}
          </button>
          <button onClick={() => seleccionar_monumento(state.rosa[1])}>
            {state.rosa[1].name}
          </button>
        </div>
      ),
    });
  }, []);

  return (
    <div className='grid-container'>
      <div className='top'>Tiny Towns</div>
      <div className='relleno'>Materiales</div>
      <div className='tablero'>
        <Tablero
          colocar_carta={item => colocar_carta(item)}
          tablero={state.tablero}
        />
      </div>
      <div className='cartas'>
        {state.edificiosJugables.map((item, idx) => {
          return (
            <BuildCard
              key={idx}
              name={item.name}
              idx={idx}
              click={() => console.log('click')}
            />
          );
        })}
      </div>
      <div className='materiales'>
        {state.baraja
          .filter((card, idx) => idx < 3)
          .map((item, idx) => {
            return (
              <MaterialCard
                cartaSelected={state.posicionSeleccionada}
                key={idx}
                item={item}
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
          Abandonar
        </button>
      </div>
    </div>
  );
};

const BuildCard = ({ name, idx, click, cartaSelected }) => {
  return (
    <div className={idx === cartaSelected ? 'buildCardSelected' : 'buildCard'}>
      {name}
    </div>
  );
};

const MaterialCard = ({ item, idx, click, cartaSelected }) => {
  return (
    <div
      onClick={() => click()}
      className={
        idx === cartaSelected ? 'materialCardSelected' : 'materialCard'
      }
    >
      <img className='imageStyle' src={item.src} alt='item' />
    </div>
  );
};

export default Board;
