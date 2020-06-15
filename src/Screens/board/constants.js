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

import abbey from '../../images/abbey.jpg';
import almhouse from '../../images/almhouse.jpg';
import catedral from '../../images/catedral.jpg';
import chapel from '../../images/chapel.jpg';
import cloister from '../../images/cloister.jpg';
import factory from '../../images/factory.JPEG';
import feastHall from '../../images/feasthall.jpg';
import fountain from '../../images/fountain.jpg';
import mandras from '../../images/mandras.jpg';
import millstone from '../../images/millstone.jpg';
import silva_forum from '../../images/silvaforum.jpg';
import tavern from '../../images/tavern.jpg';
import temple from '../../images/temple.jpg';
import tradingPost from '../../images/tradingpost.jpg';
import warehouse from '../../images/warehouse.jpg';
import well from '../../images/well.jpg';
import cottage from '../../images/cottage.jpeg';
import tailor from '../../images/tailor.jpeg';
import bakery from '../../images/bakery.jpeg';
import granary from '../../images/granary.jpeg';

export const initialState = {
  color_a_verificar: '',
  estaConstruyendo: false,
  rosaSeleccionado: false,
  posicionSeleccionada: -1,
  puntuacion: 0,
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
    image: cottage,
    color: 'neutro',
    materiales: ['trigo', 'ladrillo', 'vidrio'],
    src: azulPng,
    feed: false,
  },
  naranja: [
    {
      name: 'abbey',
      color: 'naranja',
      image: abbey,
      description: '',
      src: naranjaPng,
      materiales: ['vidrio', 'ladrillo', 'piedra', 'piedra'],
    },

    {
      name: 'cloister',
      color: 'naranja',
      image: cloister,
      description: '',
      src: naranjaPng,
      materiales: ['vidrio', 'madera', 'ladrillo', 'piedra'],
    },
    {
      name: 'temple',
      color: 'naranja',
      image: temple,
      description: '',
      src: naranjaPng,
      materiales: ['vidrio', 'ladrillo', 'ladrillo', 'piedra'],
    },
  ],
  rojo: [
    {
      name: 'granary',
      color: 'rojo',
      image: granary,
      description: '',
      src: rojaPng,
      materiales: ['trigo', 'trigo', 'madera', 'ladrillo'],
    },
  ],
  verde: [
    {
      name: 'almshouse',
      color: 'verde',
      image: almhouse,
      src: verdePng,
      materiales: ['piedra', 'piedra', 'vidrio'],
    },
    {
      name: 'feast hall',
      color: 'verde',
      image: feastHall,
      src: verdePng,
      materiales: ['madera', 'madera', 'vidrio'],
    },
    {
      name: 'tavern',
      image: tavern,
      color: 'verde',
      src: verdePng,
      materiales: ['ladrillo', 'ladrillo', 'vidrio'],
    },
  ],
  gris: [
    {
      name: 'well',
      color: 'gris',
      image: well,
      src: grisPng,
      materiales: ['madera', 'piedra'],
    },
    {
      name: 'fountain',
      color: 'gris',
      image: fountain,
      src: grisPng,
      materiales: ['madera', 'piedra'],
    },
    {
      name: 'millstone',
      color: 'gris',
      image: millstone,
      src: grisPng,
      materiales: ['madera', 'piedra'],
    },
  ],
  amarillo: [
    {
      name: 'bakery',
      color: 'amarillo',
      image: bakery,
      src: amarilloPng,
      materiales: ['trigo', 'ladrillo', 'vidrio', 'ladrillo'],
    },
    {
      color: 'amarillo',
      name: 'tailor',
      image: tailor,
      src: amarilloPng,
      materiales: ['trigo', 'piedra', 'vidrio', 'piedra'],
    },
  ],
  azul: [
    {
      name: 'factory',
      color: 'azul',
      image: factory,
      src: negraPng,
      materiales: ['madera', 'ladrillo', 'piedra', 'piedra', 'ladrillo'],
    },
    {
      name: 'trading post',
      color: 'azul',
      image: tradingPost,
      src: negraPng,
      materiales: ['piedra', 'madera', 'piedra', 'madera', 'ladrillo'],
    },

    {
      name: 'warehouse',
      color: 'azul',
      image: warehouse,
      src: negraPng,
      materiales: ['trigo', 'madera', 'trigo', 'ladrillo', 'ladrillo'],
    },
  ],
  rosa: [
    {
      name: 'cathedral of caterina',
      image: catedral,
      color: 'rosa',
      materiales: ['trigo', 'piedra', 'vidrio'],
    },
    {
      name: 'mandras palace',
      image: mandras,
      color: 'rosa',
      materiales: ['trigo', 'vidrio', 'ladrillo', 'madera'],
    },
    {
      name: 'silva forum',
      image: silva_forum,
      color: 'rosa',
      materiales: ['trigo', 'ladrillo', 'ladrillo', 'piedra', 'madera'],
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

/*
DLC
  {
      name: 'the starloom',
      color: 'rosa',
      materiales: ['vidrio', 'vidrio', 'madera', 'trigo'],
    },
    {
      name: 'statue of the bondmaker',
      color: 'rosa',
      materiales: ['madera', 'piedra', 'piedra', 'vidrio', 'trigo'],
    },
        {
      name: 'shrine of the elder tree',
      color: 'rosa',
      materiales: ['ladrillo', 'trigo', 'piedra', 'madera', 'vidrio', 'madera'],
    },
    {
      name: 'fort ironweed',
      color: 'rosa',
      materiales: ['trigo', 'ladrillo', 'piedra', 'madera', 'piedra'],
    },
    {
      name: 'grove university',
      color: 'rosa',
      materiales: ['ladrillo', 'piedra', 'vidrio', 'piedra'],
    },
        {
      name: 'architect´s guild',
      color: 'rosa',
      materiales: ['vidrio', 'trigo', 'piedra', 'madera', 'ladrillo'],
    },
    {
      name: 'archive of the second age',
      color: 'rosa',
      materiales: ['trigo', 'trigo', 'ladrillo', 'vidrio'],
    },
    {
      name: 'barrett castle',
      color: 'rosa',
      materiales: ['trigo', 'piedra', 'madera', 'vidrio', 'vidrio', 'ladrillo'],
    },
*/

/* 
        {
      name: 'shed',
      color: 'gris',
      image: shed,
      src: grisPng,
      materiales: ['madera', 'piedra'],
    },*/

/*
    {
      name: 'theater',
      color: 'amarillo',
      image: theater,
      src: amarilloPng,
      materiales: ['piedra', 'madera', 'vidrio', 'madera'],
    },
        {
      name: 'market',
      color: 'amarillo',
      image: market,
      src: amarilloPng,
      materiales: ['madera', 'piedra', 'vidrio', 'piedra'],
    },

*/

/* 
    {
      name: 'orchard',
      color: 'rojo',
      image: orchard,
      description: '',
      src: rojaPng,
      materiales: ['piedra', 'trigo', 'trigo', 'madera'],
    },

        {
      name: 'farm',
      color: 'rojo',
      image: farm,
      description: '',
      src: rojaPng,
      materiales: ['trigo', 'trigo', 'madera', 'madera'],
    },
        {
      name: 'greenhouse',
      color: 'rojo',
      image: greenhouse,
      description: '',
      src: rojaPng,
      materiales: ['trigo', 'vidrio', 'madera', 'madera'],
    },
*/

/*
{
      name: 'chapel',
      color: 'naranja',
      image: chapel,
      description: '',
      src: naranjaPng,
      materiales: ['vidrio', 'piedra', 'vidrio', 'piedra'],
    },

*/
