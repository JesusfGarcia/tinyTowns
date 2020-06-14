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
  };//ya quedo

  const checarNaranja = () => {
    //edificio = 6
    
    let edificio = state.edificiosJugables[6];
    state.tablero.map(item => {
      try {
        
        if (
          
          item.item.name===edificio.materiales[2] &&
          item.left.item.name===edificio.materiales[1] &&
          item.right.item.name===edificio.materiales[3] &&
          item.topRight.item.name===edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id,item.left.id,item.right.id,item.topRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.bot.item.name === edificio.materiales[3] &&
          item.top.item.name === edificio.materiales[1] &&
          item.botRight.item.name === edificio.materiales[0]
        ) {
          
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.bot.id, item.top.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[1] &&
          item.botLeft.item.name === edificio.materiales[0] &&
          item.left.item.name === edificio.materiales[3]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.botLeft.id,item.left.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.top.item.name === edificio.materiales[3] &&
          item.topLeft.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.topLeft.id, item.bot.id,item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[1] &&
          item.left.item.name === edificio.materiales[3] &&
          item.topLeft.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.left.id,item.topLeft.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.top.item.name === edificio.materiales[1] &&
          item.bot.item.name === edificio.materiales[3] &&
          item.botLeft.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.top.id, item.bot.id,item.botLeft.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[3] &&
          item.left.item.name === edificio.materiales[1] &&
          item.botRight.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.left.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.top.item.name === edificio.materiales[3] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.topRight.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.top.id, item.bot.id,item.topRight.id],
          });
        }
       
      } catch (error) {}
    });
  };//ya quedo

  const checarRojo = () => {
    //edificio = 5
    let edificio = state.edificiosJugables[5];
    state.tablero.map(item => {
      try {
        if (
          item.item.name === edificio.materiales[0] &&
          item.right.item.name === edificio.materiales[1] &&
          item.bot.item.name === edificio.materiales[2] &&
          item.botRight.item.name === edificio.materiales[3]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[3] &&
          item.botRight.item.name === edificio.materiales[1]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[3] &&
          item.right.item.name === edificio.materiales[2] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.botRight.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[1] &&
          item.right.item.name === edificio.materiales[3] &&
          item.bot.item.name === edificio.materiales[0] &&
          item.botRight.item.name === edificio.materiales[2]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[1] &&
          item.right.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[3] &&
          item.botRight.item.name === edificio.materiales[2]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[0] &&
          item.right.item.name === edificio.materiales[2] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.botRight.item.name === edificio.materiales[3]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[3] &&
          item.bot.item.name === edificio.materiales[0] &&
          item.botRight.item.name === edificio.materiales[1]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
        if (
          item.item.name === edificio.materiales[3] &&
          item.right.item.name === edificio.materiales[1] &&
          item.bot.item.name === edificio.materiales[2] &&
          item.botRight.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.botRight.id],
          });
        }
       
      } catch (error) {}
    });
  };//ya quedo
  const checarVerde = () => {
    //edificio = 4
    let edificio = state.edificiosJugables[4];
    state.tablero.map(item => {
      try {
        if (
          item.item.name === edificio.materiales[1] &&
          item.right.item.name === edificio.materiales[2] &&
          item.left.item.name === edificio.materiales[0] 
         
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.left.id],
          });
        }
        if (
          item.item.name === edificio.materiales[1] &&
          item.top.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[2]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.bot.id, item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[1] &&
          item.right.item.name === edificio.materiales[0] &&
          item.left.item.name === edificio.materiales[2] 
          
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.left.id],
          });
        }
        if (
          item.item.name === edificio.materiales[1] &&
          item.top.item.name === edificio.materiales[2] &&
          item.bot.item.name === edificio.materiales[0] 
        
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.top.id, item.bot.id],
          });
        }
        
       
      } catch (error) {}
    });
  };//ya quedo

  const checarGris = () => {
    //edificio = 3
    let edificio = state.edificiosJugables[3];
    state.tablero.map(item => {
      try {
        if (
          item.item.name ===  edificio.materiales[0]&&
          item.right.item.name === edificio.materiales[1] 
          
        ) {
          dispatch({
            type: actions.pintarEspacios, 
            payload: [item.id, item.right.id],
          });
        }
        if (
          item.item.name ===  edificio.materiales[1]&&
          item.right.item.name === edificio.materiales[0] 
          
        ) {
          dispatch({
            type: actions.pintarEspacios, 
            payload: [item.id, item.right.id],
          });
        }
        if (
          item.item.name ===  edificio.materiales[0]&&
          item.bot.item.name === edificio.materiales[1] 
          
        ) {
          dispatch({
            type: actions.pintarEspacios, 
            payload: [item.id, item.bot.id],
          });
        }
        if (
          item.item.name ===  edificio.materiales[1]&&
          item.bot.item.name === edificio.materiales[0] 
          
        ) {
          dispatch({
            type: actions.pintarEspacios, 
            payload: [item.id, item.bot.id],
          });
        }
        
      } catch (error) {}
    });
  };//ya quedo

  const checarAmarillo = () => {
    //edificio = 2
    let edificio = state.edificiosJugables[2];
    state.tablero.map(item => {
      try {
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[3] &&
          item.top.item.name === edificio.materiales[0] &&
          item.left.item.name === edificio.materiales[1]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.left.id,item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[3] &&
          item.top.item.name === edificio.materiales[1]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[1] &&
          item.bot.item.name === edificio.materiales[0] &&
          item.left.item.name === edificio.materiales[3]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.left.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.left.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.top.item.name === edificio.materiales[3]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.bot.id,item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[3] &&
          item.bot.item.name === edificio.materiales[0] &&
          item.left.item.name === edificio.materiales[1]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.left.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.left.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[3] &&
          item.top.item.name === edificio.materiales[1]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.left.id, item.bot.id,item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[1] &&
          item.left.item.name === edificio.materiales[3] &&
          item.top.item.name === edificio.materiales[0]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.left.id,item.top.id],
          });
        }
        if (
          item.item.name === edificio.materiales[2] &&
          item.right.item.name === edificio.materiales[0] &&
          item.bot.item.name === edificio.materiales[1] &&
          item.top.item.name === edificio.materiales[3]
        ) {
          dispatch({
            type: actions.pintarEspacios,
            payload: [item.id, item.right.id, item.bot.id,item.top.id],
          });
        }
       
      } catch (error) {}
    });
  };//ya quedo

  const checarAzul = () => {
    //edificio = 1
    
    let edificio = state.edificiosJugables[1];
    state.tablero.map(item => {
      try {
       
        switch (edificio.name){
         
          case 'bank':
          case 'trading post':
            
            if (
              item.item.name === edificio.materiales[3] &&
              item.right.item.name === edificio.materiales[4] &&
              item.top.item.name === edificio.materiales[1] &&
              item.left.item.name === edificio.materiales[2] &&
              item.topLeft.item.name === edificio.materiales[0]
            ) {
             
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.left.id,item.top.id,item.topLeft.id],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.right.item.name === edificio.materiales[1] &&
              item.bot.item.name === edificio.materiales[4] &&
              item.top.item.name === edificio.materiales[2] &&
              item.topRight.item.name === edificio.materiales[0] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.bot.id,item.top.id,item.topRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.right.item.name === edificio.materiales[2] &&
              item.bot.item.name === edificio.materiales[1] &&
              item.left.item.name === edificio.materiales[4] &&
              item.botRight.item.name === edificio.materiales[0]
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.bot.id,item.left.id,item.botRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.topRight.item.name === edificio.materiales[0] &&
              item.right.item.name === edificio.materiales[1] &&
              item.top.item.name === edificio.materiales[2] &&
              item.bot.item.name === edificio.materiales[4] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.bot.id,item.top.id,item.topRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.right.item.name === edificio.materiales[2] &&
              item.left.item.name === edificio.materiales[4] &&
              item.top.item.name === edificio.materiales[1] &&
              item.topRight.item.name === edificio.materiales[0] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.left.id,item.top.id,item.topRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.topLeft.item.name === edificio.materiales[0] &&
              item.left.item.name === edificio.materiales[1] &&
              item.top.item.name === edificio.materiales[2] &&
              item.bot.item.name === edificio.materiales[4] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.left.id, item.bot.id,item.top.id,item.topLeft],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.botLeft.item.name === edificio.materiales[0] &&
              item.bot.item.name === edificio.materiales[1] &&
              item.left.item.name === edificio.materiales[2] &&
              item.right.item.name === edificio.materiales[4] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.left.id,item.bot.id,item.botLeft.id],
              });
            }
            if (
              item.item.name === edificio.materiales[3] &&
              item.topLeft.item.name === edificio.materiales[0] &&
              item.left.item.name === edificio.materiales[1] &&
              item.top.item.name === edificio.materiales[2] &&
              item.bot.item.name === edificio.materiales[4]
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.left.id, item.bot.id,item.top.id,item.topLeft.id],
              });
            } 
            break;
           case 'factory':
              //pendientazo
                
              break;
            case 'warehouse':
              if (
                item.topLeft.name === edificio.materiales[0] &&
                item.top.item.name === edificio.materiales[1] &&
                item.topRight.item.name === edificio.materiales[2] &&
                item.left.item.name === edificio.materiales[3] &&
                item.right.item.name === edificio.materiales[4]
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.topLeft.id, item.top.id,item.topRight.id,item.left.id,item.right.id],
                });
              }
              if (
                item.topRight.item.name === edificio.materiales[0] &&
                item.right.item.name === edificio.materiales[1] &&
                item.botRight.item.name === edificio.materiales[2] &&
                item.top.item.name === edificio.materiales[3] &&
                item.bot.item.name === edificio.materiales[4] 
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.top.id, item.topRight.id,item.right.id,item.bot.id,item.botRight.id],
                });
              }
              if (
                item.botRight.item.name === edificio.materiales[0] &&
                item.bot.item.name === edificio.materiales[1] &&
                item.botLeft.item.name === edificio.materiales[2] &&
                item.right.item.name === edificio.materiales[3] &&
                item.left.item.name === edificio.materiales[4]
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [item.left, item.right.id, item.bot.id,item.botLeft.id,item.botRight.id],
                });
              }
              if (
                item.botLeft.item.name === edificio.materiales[0] &&
                item.left.item.name === edificio.materiales[1] &&
                item.topLeft.item.name === edificio.materiales[2] &&
                item.bot.item.name === edificio.materiales[3] &&
                item.top.item.name === edificio.materiales[4] 
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [item.left.id, item.top.id, item.bot.id,item.topLeft.id,item.botLeft.id],
                });
              }
              if (
                item.topRight.item.name === edificio.materiales[0] &&
                item.top.item.name === edificio.materiales[1] &&
                item.topLeft.item.name === edificio.materiales[2] &&
                item.right.item.name === edificio.materiales[3] &&
                item.left.item.name === edificio.materiales[4] 
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [item.id, item.right.id, item.left.id,item.botRight.id,item.botLeft.id],
                });
              }
              if (
                item.topLeft.item.name === edificio.materiales[0] &&
                item.left.item.name === edificio.materiales[1] &&
                item.botLeft.item.name === edificio.materiales[2] &&
                item.top.item.name === edificio.materiales[3] &&
                item.bot.item.name === edificio.materiales[4] 
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [item.topLeft.id, item.left.id, item.bot.id,item.top.id,item.botLeft.id],
                });
              }
              if (
                item.botLeft.item.name === edificio.materiales[0] &&
                item.bot.item.name === edificio.materiales[1] &&
                item.botRight.item.name === edificio.materiales[2] &&
                item.left.item.name === edificio.materiales[3] &&
                item.right.item.name === edificio.materiales[4] 
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [item.botRight.id, item.right.id, item.left.id,item.bot.id,item.botLeft.id],
                });
              }
              if (
                item.botRight.item.name === edificio.materiales[0] &&
                item.right.item.name === edificio.materiales[1] &&
                item.topRight.item.name === edificio.materiales[2] &&
                item.bot.item.name === edificio.materiales[3] &&
                item.top.item.name === edificio.materiales[4]
              ) {
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [item.topRight.id, item.top.id, item.right.id,item.bot.id,item.botRight.id],
                });
              } 
              break;
            default:
              break;
  
        }
      } catch (error) {
        
      }
      
    });
  };//ya quedo

  const checarRosa = () => {
    //edificio = 7
    let edificio = state.edificiosJugables[7];
    state.tablero.map(item => {
      try {
       
        switch (edificio.name){
         
          case 'architect´s guild':
          
            
            if (
              item.item.name === edificio.materiales[1] &&
              item.topRight.item.name === edificio.materiales[0] &&
              item.right.item.name === edificio.materiales[2] &&
              item.bot.item.name === edificio.materiales[4] &&
              item.botLeft.item.name === edificio.materiales[3]
            ) {
             
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.right.id, item.topRight.id,item.bot.id,item.botLeft.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.botRight.item.name === edificio.materiales[0] &&
              item.bot.item.name === edificio.materiales[2] &&
              item.topLeft.item.name === edificio.materiales[3] &&
              item.left.item.name === edificio.materiales[4] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.left.id, item.topLeft.id,item.bot.id,item.botRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.botLeft.item.name === edificio.materiales[0] &&
              item.left.item.name === edificio.materiales[2] &&
              item.top.item.name === edificio.materiales[4] &&
              item.topRight.item.name === edificio.materiales[3]
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.botLeft.id, item.left.id,item.top.id,item.topRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.topLeft.item.name === edificio.materiales[0] &&
              item.top.item.name === edificio.materiales[2] &&
              item.right.item.name === edificio.materiales[4] &&
              item.botRight.item.name === edificio.materiales[3] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.topLeft.id, item.top.id,item.right.id,item.botRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.topLeft.item.name === edificio.materiales[0] &&
              item.left.item.name === edificio.materiales[2] &&
              item.bot.item.name === edificio.materiales[4] &&
              item.botRight.item.name === edificio.materiales[3] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.topLeft.id, item.left.id,item.bot.id,item.botRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.topRight.item.name === edificio.materiales[3] &&
              item.right.item.name === edificio.materiales[4] &&
              item.bot.item.name === edificio.materiales[2] &&
              item.botLeft.item.name === edificio.materiales[0] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.topRight.id, item.right.id,item.bot.id,item.botLeft.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.topLeft.item.name === edificio.materiales[3] &&
              item.top.item.name === edificio.materiales[4] &&
              item.right.item.name === edificio.materiales[2] &&
              item.botRight.item.name === edificio.materiales[0] 
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.topLeft.id, item.top.id,item.right.id,item.botRight.id],
              });
            }
            if (
              item.item.name === edificio.materiales[1] &&
              item.topRight.item.name === edificio.materiales[0] &&
              item.top.item.name === edificio.materiales[2] &&
              item.left.item.name === edificio.materiales[4] &&
              item.botLeft.item.name === edificio.materiales[3]
            ) {
              dispatch({
                type: actions.pintarEspacios,
                payload: [item.id, item.top.id, item.left.id,item.topRight.id,item.botLeft.id],
              });
            } 
            break;
           case 'barrett castle':
              //pendientazo
                
              break;
            case 'cathedral':
              if (
                item.right.name === edificio.materiales[0] &&
                item.bot.item.name === edificio.materiales[1] &&
                item.botRight.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.right.id, item.bot.id,item.botRight.id],
                });
              }
              if (
                item.bot.name === edificio.materiales[0] &&
                item.left.item.name === edificio.materiales[1] &&
                item.botLeft.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.bot.id, item.left.id,item.botLeft.id],
                });
              }if (
                item.left.name === edificio.materiales[0] &&
                item.top.item.name === edificio.materiales[1] &&
                item.topLeft.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.topLeft.id, item.top.id,item.left.id],
                });
              }if (
                item.top.name === edificio.materiales[0] &&
                item.right.item.name === edificio.materiales[1] &&
                item.topRight.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.topRight.id, item.top.id,item.right.id],
                });
              }if (
                item.left.name === edificio.materiales[0] &&
                item.bot.item.name === edificio.materiales[1] &&
                item.botLeft.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.left.id, item.bot.id,item.botLeft.id],
                });
              }if (
                item.bot.name === edificio.materiales[0] &&
                item.right.item.name === edificio.materiales[1] &&
                item.botRight.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.bot.id, item.right.id,item.botRight.id],
                });
              }if (
                item.right.name === edificio.materiales[0] &&
                item.top.item.name === edificio.materiales[1] &&
                item.topRight.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.right.id, item.top.id,item.topRight.id],
                });
              }if (
                item.top.name === edificio.materiales[0] &&
                item.left.item.name === edificio.materiales[1] &&
                item.topLeft.item.name === edificio.materiales[2] 
             
              ) {
               
                dispatch({
                  type: actions.pintarEspacios,
                  payload: [ item.topLeft.id, item.top.id,item.left.id],
                });
              }
              break;

              case 'fort ironweed':
          
            
                if (
                  item.left.name === edificio.materiales[0] &&
                  item.right.item.name === edificio.materiales[1] &&
                  item.botLeft.item.name === edificio.materiales[2] &&
                  item.bot.item.name === edificio.materiales[3] &&
                  item.botRight.item.name === edificio.materiales[4]
                ) {
                 
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.left.id, item.right.id, item.botLeft.id,item.bot.id,item.botRight.id],
                  });
                }
                if (
                  item.top.item.name === edificio.materiales[0] &&
                  item.bot.item.name === edificio.materiales[1] &&
                  item.topLeft.item.name === edificio.materiales[2] &&
                  item.left.item.name === edificio.materiales[3] &&
                  item.botLeft.item.name === edificio.materiales[4] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.top.id, item.bot.id, item.topLeft.id,item.left.id,item.botleft.id],
                  });
                }
                if (
                  item.right.item.name === edificio.materiales[0] &&
                  item.left.item.name === edificio.materiales[1] &&
                  item.topRight.item.name === edificio.materiales[2] &&
                  item.top.item.name === edificio.materiales[3] &&
                  item.topLeft.item.name === edificio.materiales[4]
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.right.id, item.left.id, item.topRight.id,item.top.id,item.topLeft.id],
                  });
                }
                if (
                  item.bot.item.name === edificio.materiales[0] &&
                  item.top.item.name === edificio.materiales[1] &&
                  item.botRight.item.name === edificio.materiales[2] &&
                  item.right.item.name === edificio.materiales[3] &&
                  item.topRight.item.name === edificio.materiales[4] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.bot.id, item.top.id, item.botRight.id,item.right.id,item.topRight.id],
                  });
                }
                if (
                  item.right.item.name === edificio.materiales[0] &&
                  item.left.item.name === edificio.materiales[1] &&
                  item.botRight.item.name === edificio.materiales[2] &&
                  item.bot.item.name === edificio.materiales[3] &&
                  item.botLeft.item.name === edificio.materiales[4] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.right.id, item.left.id, item.botRight.id,item.bot.id,item.botLeft.id],
                  });
                }
                if (
                  item.top.item.name === edificio.materiales[0] &&
                  item.bot.item.name === edificio.materiales[1] &&
                  item.topRight.item.name === edificio.materiales[2] &&
                  item.right.item.name === edificio.materiales[3] &&
                  item.botRight.item.name === edificio.materiales[4] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.top.id, item.bot.id, item.topRight.id,item.right.id,item.botRight.id],
                  });
                }
                if (
                  item.left.item.name === edificio.materiales[0] &&
                  item.right.item.name === edificio.materiales[1] &&
                  item.topLeft.item.name === edificio.materiales[2] &&
                  item.top.item.name === edificio.materiales[3] &&
                  item.topRight.item.name === edificio.materiales[4] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.left.id, item.right.id, item.top.id,item.topLeft.id,item.topRight.id],
                  });
                }
                if (
                  item.bot.item.name === edificio.materiales[0] &&
                  item.top.item.name === edificio.materiales[1] &&
                  item.botleft.item.name === edificio.materiales[2] &&
                  item.left.item.name === edificio.materiales[3] &&
                  item.topLeft.item.name === edificio.materiales[4]
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.bot.id, item.top.id, item.left.id,item.topLeft.id,item.botLeft.id],
                  });
                } 
                break;
                case 'shrine of the elder tree':
          
            
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.topLeft.item.name === edificio.materiales[0] &&
                  item.top.item.name === edificio.materiales[1] &&
                  item.topRight.item.name === edificio.materiales[2] &&
                  item.left.item.name === edificio.materiales[3] &&
                  item.right.item.name === edificio.materiales[5]
                ) {
                 
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id,item.topLeft.id, item.top.id, item.topRight.id,item.left.id,item.right.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.topRight.item.name === edificio.materiales[0] &&
                  item.right.item.name === edificio.materiales[1] &&
                  item.botRight.item.name === edificio.materiales[2] &&
                  item.top.item.name === edificio.materiales[3] &&
                  item.bot.item.name === edificio.materiales[5] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.item.id,item.topRight.id, item.right.id, item.botRight.id,item.top.id,item.bot.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.botRight.item.name === edificio.materiales[0] &&
                  item.bot.item.name === edificio.materiales[1] &&
                  item.botLeft.item.name === edificio.materiales[2] &&
                  item.right.item.name === edificio.materiales[3] &&
                  item.left.item.name === edificio.materiales[5]
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id,item.right.id, item.left.id, item.botRight.id,item.botLeft.id,item.botRight.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.botLeft.item.name === edificio.materiales[0] &&
                  item.left.item.name === edificio.materiales[1] &&
                  item.topLeft.item.name === edificio.materiales[2] &&
                  item.bot.item.name === edificio.materiales[3] &&
                  item.top.item.name === edificio.materiales[5] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id,item.botleft.id, item.left.id, item.topLeft.id,item.bot.id,item.top.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.topRight.item.name === edificio.materiales[0] &&
                  item.top.item.name === edificio.materiales[1] &&
                  item.topLeft.item.name === edificio.materiales[2] &&
                  item.right.item.name === edificio.materiales[3] &&
                  item.left.item.name === edificio.materiales[5] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id, item.left.id, item.right.id,item.top.id,item.topLeft.id,item.topRight.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.topLeft.item.name === edificio.materiales[0] &&
                  item.left.item.name === edificio.materiales[1] &&
                  item.botLeft.item.name === edificio.materiales[2] &&
                  item.top.item.name === edificio.materiales[3] &&
                  item.bot.item.name === edificio.materiales[5] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id,item.topLeft.id, item.left.id, item.botleft.id,item.top.id,item.bot.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.botLeft.item.name === edificio.materiales[0] &&
                  item.bot.item.name === edificio.materiales[1] &&
                  item.botRight.item.name === edificio.materiales[2] &&
                  item.left.item.name === edificio.materiales[3] &&
                  item.right.item.name === edificio.materiales[5] 
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id,item.left.id, item.right.id, item.bot.id,item.botRight.id,item.botLeft.id],
                  });
                }
                if (
                  item.item.name === edificio.materiales[4] &&
                  item.botRight.item.name === edificio.materiales[0] &&
                  item.right.item.name === edificio.materiales[1] &&
                  item.topRight.item.name === edificio.materiales[2] &&
                  item.bot.item.name === edificio.materiales[3] &&
                  item.botRight.item.name === edificio.materiales[5]
                ) {
                  dispatch({
                    type: actions.pintarEspacios,
                    payload: [item.id,item.bot.id, item.top.id, item.topRight.id,item.right.id,item.botRight.id],
                  });
                } 
                break;
            default:
              break;
  
        }
      } catch (error) {
        
      }
      
    });
  };
  const verificar_construcciones = () => {
    dispatch({ type: actions.verificarConstrucciones });
  };

  const tratar_construir = item => {
    if (item.construibleCon.length === 1) {
      switch (state.color_a_verificar) {
        case 'neutro':
          dispatch({ type: actions.construir, payload: item, edificio: 0 });
          break;
        case 'naranja':
          dispatch({ type: actions.construir, payload: item, edificio: 6 });
          break;
        case 'rojo':
          dispatch({ type: actions.construir, payload: item, edificio: 5 });
          break;
        case 'verde':
          dispatch({ type: actions.construir, payload: item, edificio: 4 });
          break;
        case 'gris':
          dispatch({ type: actions.construir, payload: item, edificio: 3 });
          break;
        case 'amarillo':
          dispatch({ type: actions.construir, payload: item, edificio: 2 });
          break;
        case 'azul':
          dispatch({ type: actions.construir, payload: item, edificio: 1 });
          break;
        case 'rosa':
          dispatch({ type: actions.construir, payload: item, edificio: 7 });
          break;
        default:
          break;
      }
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
        checarNaranja();
        break;
      case 'rojo':
        checarRojo();
        break;
      case 'verde':
        checarVerde();
        break;
      case 'gris':
        checarGris();
        break;
      case 'amarillo':
        checarAmarillo();
        break;
      case 'azul':
        checarAzul();
        break;
      case 'rosa':
        checarRosa();
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
