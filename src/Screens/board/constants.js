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
      src: naranjaPng,
      materiales: ['vidrio','ladrillo','piedra','piedra']
    },
    {
      name: 'chapel',
      color: 'naranja',
      description: '',
      src: naranjaPng,
      materiales: ['vidrio','piedra','vidrio','piedra']
      
    },
    {
      name: 'cloister',
      color: 'naranja',
      description: '',
      src: naranjaPng,
      materiales: ['vidrio','madera','ladrillo','piedra']
    },
    {
      name: 'temple',
      color: 'naranja',
      description: '',
      src: naranjaPng,
      materiales: ['vidrio','ladrillo','ladrillo','piedra']
    },
  ],
  rojo: [
    {
      name: 'farm',
      color: 'rojo',
      description: '',
      src: rojaPng,
      materiales: ['trigo','trigo','madera','madera']
    },
    {
      name: 'granary',
      color: 'rojo',
      description: '',
      src: rojaPng,
      materiales: ['trigo','trigo','madera','ladrillo']
    },
    {
      name: 'greenhouse',
      color: 'rojo',
      description: '',
      src: rojaPng,
      materiales: ['trigo','vidrio','madera','madera']
    },
    {
      name: 'orchard',
      color: 'rojo',
      description: '',
      src: rojaPng,
      materiales: ['piedra','trigo','trigo','madera']
    },
  ],
  verde: [
    {
      name: 'almshouse',
      color: 'verde',
      src: verdePng,
      materiales: ['piedra','piedra','vidrio']
    },
    {
      name: 'feast hall',
      color: 'verde',
      src: verdePng,
      materiales: ['madera','madera','vidrio']
    },
    {
      name: 'inn',
      color: 'verde',
      src: verdePng,
      materiales: ['trigo','piedra','vidrio']
    },
    {
      name: 'tavern',
      color: 'verde',
      src: verdePng,
      materiales: ['ladrillo','ladrillo','vidrio']
    },
  ],
  gris: [
    {
      name: 'fountain',
      color: 'gris',
      src: grisPng,
      materiales: ['madera','piedra']
    },
    {
      name: 'millstone',
      color: 'gris',
      src: grisPng,
      materiales: ['madera','piedra']
    },
    {
      name: 'shed',
      color: 'gris',
      src: grisPng,
      materiales: ['madera','piedra']
    },
    {
      name: 'well',
      color: 'gris',
      src: grisPng,
      materiales: ['madera','piedra']
    },
  ],
  amarillo: [
    {
      name: 'bakery',
      color: 'amarillo',
      src: amarilloPng,
      materiales: ['trigo','ladrillo','vidrio','ladrillo']
    },
    {
      name: 'market',
      color: 'amarillo',
      src: amarilloPng,
      materiales: ['madera','piedra','vidrio','piedra']
    },
    {
      color: 'amarillo',
      name: 'tailor',
      src: amarilloPng,
      materiales: ['trigo','piedra','vidrio','piedra']
    },
    {
      name: 'theater',
      color: 'amarillo',
      src: amarilloPng,
      materiales: ['piedra','madera','vidrio','madera']
    },
  ],
  azul: [
    {
      name: 'bank',
      color: 'azul',
      src: negraPng,
      materiales: ['trigo','trigo','madera','vidrio','ladrillo']
    },
    {
      name: 'factory',
      color: 'azul',
      src: negraPng,
      materiales: ['madera','ladrillo','piedra','piedra','ladrillo']
    },
    {
      name: 'trading post',
      color: 'azul',
      src: negraPng,
      materiales: ['piedra','madera','piedra','madera','ladrillo']
    },

    {
      name: 'warehouse',
      color: 'azul',
      src: negraPng,
      materiales: ['trigo','madera','trigo','ladrillo','ladrillo']
    },
  ],
  rosa: [
    {
      name: 'architect´s guild',
      color: 'rosa',
      materiales: ['vidrio','trigo','piedra','madera','ladrillo']
    },
    {
      name: 'archive of the second age',
      color: 'rosa',
      materiales: ['trigo','trigo','ladrillo','vidrio']
    },
    {
      name: 'barrett castle',
      color: 'rosa',
      materiales: ['trigo','piedra','madera','vidrio','vidrio','ladrillo']
    },
    {
      name: 'cathedral of caterina',
      color: 'rosa',
      materiales: ['trigo','piedra','vidrio']
    },
    {
      name: 'fort ironweed',
      color: 'rosa',
      materiales: ['trigo','ladrillo','piedra','madera','piedra']
    },
    {
      name: 'grove university',
      color: 'rosa',
      materiales: ['ladrillo','piedra','vidrio','piedra']
    },
    {
      name: 'mandras palace',
      color: 'rosa',
      materiales: ['trigo','vidrio','ladrillo','madera']
    },
    {
      name: 'opaleye´s watch',
      color: 'rosa',
      materiales: ['madera','ladrillo','vidrio','trigo','trigo','piedra']
    },
    {
      name: 'shrine of the elder tree',
      color: 'rosa',
      materiales: ['ladrillo','trigo','piedra','madera','vidrio','madera']
    },
    {
      name: 'silva forum',
      color: 'rosa',
      materiales: ['trigo','ladrillo','ladrillo','piedra','madera']
    },
    {
      name: 'the starloom',
      color: 'rosa',
      materiales: ['vidrio','vidrio','madera','trigo']
    },
    {
      name: 'statue of the bondmaker',
      color: 'rosa',
      materiales: ['madera','piedra','piedra','vidrio','trigo']
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
