import React, { useEffect, useReducer } from 'react';

import './styles.scss';

import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';

import Tablero from '../../Components/Board';

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
          item.topLeft.item.name === 'ladrillo'
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
  };

  const tratar_construir = item => {
    if (item.construibleCon.length === 1) {
      dispatch({ type: actions.construir, payload: item });
    }
  };

  const tareaxD = () => {
    let array = [1, 2, 3, 4, 5, 6];
    array.map(item => {
      return console.log('map', item);
    });
    for (let i = 0; i < array.length; i++) {
      console.log('for', array[i]);
    }

    array.forEach(element => {
      console.log('forEach', element);
    });
  };

  const seleccionar_tipo_construccion = item => {
    dispatch({ type: actions.color_a_verificar, payload: item.color });
    switch (item.color) {
      case 'neutro':
        checarNeutro();
        break;
      case 'naranja':
        alert('checar naranja');
        break;
      case 'rojo':
        alert('checar rojo');
        break;
      case 'verde':
        alert('checar verde');
        break;
      case 'gris':
        alert('checar gris');
        break;
      case 'amarillo':
        alert('checar amarillo');
        break;
      case 'azul':
        alert('checar azul');
        break;
      case 'rosa':
        alert('checar rosa');
        break;
      default:
        break;
    }
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
          <p>Seleccione el monumento con el que quiera jugar</p>
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
          tratar_construir={item => tratar_construir(item)}
          tablero={state.tablero}
        />
      </div>
      <div className='cartas'>
        {state.edificiosJugables.map((item, idx) => {
          return (
            <BuildCard
              key={idx}
              item={item}
              click={() => seleccionar_tipo_construccion(item)}
              cartaSelected={state.color_a_verificar === item.color}
              enabled={state.estaConstruyendo}
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
                enabled={!state.estaConstruyendo}
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

        <button className='boton-style' onClick={tareaxD}>
          Abandonar
        </button>
      </div>
    </div>
  );
};

const BuildCard = ({ item, click, cartaSelected, enabled }) => {
  return (
    <div
      onClick={enabled && click}
      className={cartaSelected ? 'buildCardSelected' : 'buildCard'}
    >
      {item.name}
    </div>
  );
};

const MaterialCard = ({ item, idx, click, cartaSelected, enabled }) => {
  return (
    <div
      onClick={enabled && click}
      className={
        idx === cartaSelected ? 'materialCardSelected' : 'materialCard'
      }
    >
      <img className='imageStyle' src={item.src} alt='item' />
    </div>
  );
};

export default Board;
