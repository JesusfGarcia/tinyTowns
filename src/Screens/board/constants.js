import ladrilloPng from '../../images/ladrillo.png';
import piedraPng from '../../images/piedra.png';
import trigoPng from '../../images/trigo.png';
import troncoPng from '../../images/tronco.png';
import vidrioPng from '../../images/vidrio.png';
import amarilloPng from '../../images/amarillo.png';
import azulPng from '../../images/azul.png';
import grisPng from '../../images/gris.png';
import naranjaPng from '../../images/naranja.png';
import negraPng from '../../images/negra.png';
import rojaPng from '../../images/roja.png';
import verdePng from '../../images/verde.png';

export const initialState = {
  color_a_verificar: '',
  estaConstruyendo: false,
  rosaSeleccionado: false,
  posicionSeleccionada: -1,
  baraja: [
    { name: 'madera', src: troncoPng },
    { name: 'ladrillo', src: ladrilloPng },
    { name: 'trigo', src: trigoPng },
    { name: 'piedra', src: piedraPng },
    { name: 'vidrio', src: vidrioPng },
    { name: 'madera', src: troncoPng },
    { name: 'ladrillo', src: ladrilloPng },
    { name: 'trigo', src: trigoPng },
    { name: 'piedra', src: piedraPng },
    { name: 'vidrio', src: vidrioPng },
    { name: 'madera', src: troncoPng },
    { name: 'ladrillo', src: ladrilloPng },
    { name: 'trigo', src: trigoPng },
    { name: 'piedra', src: piedraPng },
    { name: 'vidrio', src: vidrioPng },
  ],
  materialSeleccionado: '',
  edificiosJugables: [],
  cottage: {
    name: 'cottage',
    description: '',
    image: '',
    icons: '',
    color: 'neutro',
    materiales: ['trigo', 'ladrillo', 'vidrio'],
    src: azulPng
  },
  naranja: [
    {
      name: 'abbey',
      color: 'naranja',
      description: '',
      src: naranjaPng
    },
    {
      name: 'chapel',
      color: 'naranja',
      description: '',
      src: naranjaPng
    },
    {
      name: 'cloister',
      color: 'naranja',
      description: '',
      src: naranjaPng
    },
    {
      name: 'temple',
      color: 'naranja',
      description: '',
      src: naranjaPng
    },
  ],
  rojo: [
    {
      name: 'farm',
      color: 'rojo',
      description: '',
      src: rojaPng
    },
    {
      name: 'granary',
      color: 'rojo',
      description: '',
      src: rojaPng
    },
    {
      name: 'greenhouse',
      color: 'rojo',
      description: '',
      src: rojaPng
    },
    {
      name: 'orchard',
      color: 'rojo',
      description: '',
      src: rojaPng
    },
  ],
  verde: [
    {
      name: 'almshouse',
      color: 'verde',
      src: verdePng
    },
    {
      name: 'feast hall',
      color: 'verde',
      src: verdePng
    },
    {
      name: 'inn',
      color: 'verde',
      src: verdePng
    },
    {
      name: 'tavern',
      color: 'verde',
      src: verdePng
    },
  ],
  gris: [
    {
      name: 'fountain',
      color: 'gris',
      src: grisPng
    },
    {
      name: 'millstone',
      color: 'gris',
      src: grisPng
    },
    {
      name: 'shed',
      color: 'gris',
      src: grisPng
    },
    {
      name: 'well',
      color: 'gris',
      src: grisPng
    },
  ],
  amarillo: [
    {
      name: 'bakery',
      color: 'amarillo',
      src: amarilloPng
    },
    {
      name: 'market',
      color: 'amarillo',
      src: amarilloPng
    },
    {
      color: 'amarillo',
      name: 'tailor',
      src: amarilloPng
    },
    {
      name: 'theater',
      color: 'amarillo',
      src: amarilloPng
    },
  ],
  azul: [
    {
      name: 'bank',
      color: 'azul',
      src: negraPng,
    },
    {
      name: 'factory',
      color: 'azul',
      src: negraPng,
    },
    {
      name: 'trading post',
      color: 'azul',
      src: negraPng,
    },

    {
      name: 'warehouse',
      color: 'azul',
      src: negraPng,
    },
  ],
  rosa: [
    {
      name: 'architect´s guild',
      color: 'rosa',
    },
    {
      name: 'archive of the second age',
      color: 'rosa',
    },
    {
      name: 'barrett castle',
      color: 'rosa',
    },
    {
      name: 'cathedral of caterina',
      color: 'rosa',
    },
    {
      name: 'fort ironweed',
      color: 'rosa',
    },
    {
      name: 'grove university',
      color: 'rosa',
    },
    {
      name: 'mandras palace',
      color: 'rosa',
    },
    {
      name: 'opaleye´s watch',
      color: 'rosa',
    },
    {
      name: 'shirne of the elder tree',
      color: 'rosa',
    },
    {
      name: 'silva forum',
      color: 'rosa',
    },
    {
      name: 'the starloom',
      color: 'rosa',
    },
    {
      name: 'statue of the bondmaker',
      color: 'rosa',
    },
  ],
  tablero: [
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 0,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 1,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 2,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 3,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 4,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 5,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 6,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 7,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 8,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 9,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 10,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 11,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 12,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 13,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 14,
      construible: false,
      construibleCon: [],
    },
    {
      material: false,
      build: false,
      item: '',
      left: null,
      right: null,
      top: null,
      bot: null,
      topRight: null,
      topLeft: null,
      botRight: null,
      botLeft: null,
      id: 15,
      construible: false,
      construibleCon: [],
    },
  ],
};
