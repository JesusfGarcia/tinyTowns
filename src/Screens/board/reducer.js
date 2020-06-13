import { actions } from './actions';

export const reducer = (state, action) => {
  const actualizar_relaciones = tablero => {
    let newTablero = [...tablero];
    let carta0 = newTablero[0];
    let carta1 = newTablero[1];
    let carta2 = newTablero[2];
    let carta3 = newTablero[3];
    let carta4 = newTablero[4];
    let carta5 = newTablero[5];
    let carta6 = newTablero[6];
    let carta7 = newTablero[7];
    let carta8 = newTablero[8];
    let carta9 = newTablero[9];
    let carta10 = newTablero[10];
    let carta11 = newTablero[11];
    let carta12 = newTablero[12];
    let carta13 = newTablero[13];
    let carta14 = newTablero[14];
    let carta15 = newTablero[15];

    for (let index = 0; index < newTablero.length; index++) {
      switch (index) {
        case 0:
          carta0 = {
            ...carta0,
            right: carta1,
            bot: carta4,
            botRight: carta5,
          };
          break;
        case 1:
          carta1 = {
            ...carta1,
            left: carta0,
            right: carta2,
            botLeft: carta4,
            bot: carta5,
            botRight: carta6,
          };
          break;
        case 2:
          carta2 = {
            ...carta2,
            left: carta1,
            right: carta3,
            bot: carta6,
            botRight: carta7,
            botLeft: carta5,
          };
          break;
        case 3:
          carta3 = {
            ...carta3,
            left: carta2,
            botLeft: carta6,
            bot: carta7,
          };
          break;
        case 4:
          carta4 = {
            ...carta4,
            top: carta0,
            topRight: carta1,
            right: carta5,
            bot: carta8,
            botRight: carta9,
          };
          break;
        case 5:
          carta5 = {
            ...carta5,
            topLeft: carta0,
            top: carta1,
            topRight: carta2,
            left: carta4,
            right: carta6,
            botLeft: carta8,
            bot: carta9,
            botRight: carta10,
          };
          break;
        case 6:
          carta6 = {
            ...carta6,
            topLeft: carta1,
            top: carta2,
            topRight: carta3,
            left: carta5,
            right: carta7,
            botLeft: carta9,
            bot: carta10,
            botRight: carta11,
          };
          break;
        case 7:
          carta7 = {
            ...carta7,
            topLeft: carta2,
            top: carta3,
            left: carta6,
            botLeft: carta10,
            bot: carta11,
          };
          break;
        case 8:
          carta8 = {
            ...carta8,
            top: carta4,
            topRight: carta5,
            right: carta9,
            bot: carta12,
            botRight: carta13,
          };
          break;
        case 9:
          carta9 = {
            ...carta9,
            topLeft: carta4,
            top: carta5,
            topRight: carta6,
            left: carta8,
            right: carta10,
            botLeft: carta12,
            bot: carta13,
            botRight: carta14,
          };
          break;
        case 10:
          carta10 = {
            ...carta10,
            topLeft: carta5,
            top: carta6,
            topRight: carta7,
            left: carta9,
            right: carta11,
            botLeft: carta13,
            bot: carta14,
            botRight: carta15,
          };
          break;
        case 11:
          carta11 = {
            ...carta11,
            topLeft: carta6,
            top: carta7,
            left: carta10,
            botLeft: carta14,
            bot: carta15,
          };
          break;
        case 12:
          carta12 = {
            ...carta12,
            top: carta8,
            topRight: carta9,
            right: carta13,
          };
          break;
        case 13:
          carta13 = {
            ...carta13,
            topLeft: carta8,
            top: carta9,
            topRight: carta10,
            left: carta12,
            right: carta14,
          };
          break;
        case 14:
          carta14 = {
            ...carta14,
            topLeft: carta9,
            top: carta10,
            topRight: carta11,
            left: carta13,
            right: carta15,
          };
          break;
        case 15:
          carta15 = {
            ...carta15,
            topLeft: carta10,
            top: carta11,
            left: carta14,
          };
          break;
        default:
          break;
      }
    }
    newTablero = [
      carta0,
      carta1,
      carta2,
      carta3,
      carta4,
      carta5,
      carta6,
      carta7,
      carta8,
      carta9,
      carta10,
      carta11,
      carta12,
      carta13,
      carta14,
      carta15,
    ];
    return newTablero;
  };

  switch (action.type) {
    case actions.barajear:
      const barajaMaterial = state.baraja.sort(() => {
        return Math.random() - 0.5;
      });
      const naranja = state.naranja.sort(() => {
        return Math.random() - 0.5;
      });
      const rojo = state.rojo.sort(() => {
        return Math.random() - 0.5;
      });
      const verde = state.verde.sort(() => {
        return Math.random() - 0.5;
      });
      const gris = state.gris.sort(() => {
        return Math.random() - 0.5;
      });
      const amarillo = state.amarillo.sort(() => {
        return Math.random() - 0.5;
      });
      const azul = state.azul.sort(() => {
        return Math.random() - 0.5;
      });
      const rosa = state.rosa.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        baraja: barajaMaterial,
        rosa,
        azul,
        amarillo,
        gris,
        verde,
        rojo,
        naranja,
        edificiosJugables: [
          state.cottage,
          azul[0],
          amarillo[0],
          gris[0],
          verde[0],
          rojo[0],
          naranja[0],
        ],
      };
    case actions.seleccionarMonumento:
      let edificiosJugables = [...state.edificiosJugables];
      edificiosJugables.push(action.payload);
      return {
        ...state,
        rosaSeleccionado: true,
        edificiosJugables: edificiosJugables,
      };
    case actions.seleccionarCarta:
      return {
        ...state,
        posicionSeleccionada: action.payload.idx,
        materialSeleccionado: action.payload.item,
      };
    case actions.colocarCarta:
      if (state.materialSeleccionado && action.payload.item === '') {
        let carta = {
          ...action.payload,
          item: state.materialSeleccionado,
          material: true,
        };
        let tablero = [...state.tablero];
        tablero.splice(action.payload.id, 1, carta);
        //movemos la baraja
        let baraja = [...state.baraja];
        baraja.splice(state.posicionSeleccionada, 1, baraja[3]);
        baraja.splice(3, 1);
        baraja.push(state.materialSeleccionado);
        const tableroUpdated = actualizar_relaciones(tablero);
        return {
          ...state,
          tablero: [...tableroUpdated],
          materialSeleccionado: '',
          posicionSeleccionada: -1,
          baraja,
        };
      }
      return {
        ...state,
      };
    case actions.verificarConstrucciones:
      return {
        ...state,
        estaConstruyendo: true,
      };
    case actions.pintarEspacios:
      let newTablero = state.tablero;
      let pushear = true;

      action.payload.map(item => {
        //comprobar si ya existe la configuración
        if (state.tablero[item].construibleCon.length <= 1) {
          if (
            state.tablero[item].construibleCon.sort().join(',') ===
            action.payload.sort().join(',')
          ) {
            console.log('hay una configuración igual');
          } else {
            return newTablero.splice(item, 1, {
              ...state.tablero[item],
              construible: true,
              construibleCon: [
                ...state.tablero[item].construibleCon,
                action.payload,
              ],
            });
          }
        } else {
          state.tablero[item].construibleCon.map(array => {
            if (array.sort().join(',') === action.payload.sort().join(',')) {
              return (pushear = false);
            }
          });
          if (pushear) {
            return newTablero.splice(item, 1, {
              ...state.tablero[item],
              construible: true,
              construibleCon: [
                ...state.tablero[item].construibleCon,
                action.payload,
              ],
            });
          }
        }
        //////////////////////////////////////////////////////
      });
      return {
        ...state,
        tablero: newTablero,
      };
    case actions.cancelarConstruccion:
      let tablero = state.tablero.map(item => {
        return {
          ...item,
          construible: false,
          construibleCon: [],
        };
      });
      return {
        ...state,
        estaConstruyendo: false,
        tablero,
        color_a_verificar: '',
      };
    case actions.color_a_verificar:
      let new_tablero = state.tablero.map(item => {
        return {
          ...item,
          construible: false,
          construibleCon: [],
        };
      });
      return {
        ...state,
        tablero: new_tablero,
        color_a_verificar: action.payload,
      };
    case actions.construir:
      let dummy = [...state.tablero];
      action.payload.construibleCon[0].map(id => {
        if (id === action.payload.id) {
          let carta = {
            ...action.payload,
            material: false,
            build: true,
            item: state.edificiosJugables[0],
            construibleCon: [],
            construible: false,
          };
          dummy.splice(id, 1, carta);
        } else {
          let carta = {
            ...dummy[id],
            material: false,
            build: false,
            item: '',
            construibleCon: [],
            construible: false,
          };
          dummy.splice(id, 1, carta);
        }
      });
      const tableroUpdated = actualizar_relaciones(dummy);
      return {
        ...state,
        tablero: tableroUpdated,
      };
    default:
      return state;
  }
};
