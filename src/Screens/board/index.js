import React, { useState, useEffect } from 'react'

import './styles.scss'

import Tablero from '../../Components/Board'

const Board = (props) => {
	const [baraja, setBaraja] = useState([
		'madera',
		'ladrillo',
		'trigo',
		'piedra',
		'vidrio',
		'madera',
		'ladrillo',
		'trigo',
		'piedra',
		'vidrio',
		'madera',
		'ladrillo',
		'trigo',
		'piedra',
		'vidrio',
	])
	const [edificios_jugables, setJugables] = useState([])
	const [cottage] = useState([
		{ name: 'cottage', description: '', image: '', icons: '' },
	])
	const [naranja, setNaranja] = useState([
		{
			name: 'abbey',
		},
		{
			name: 'chapel',
		},
		{
			name: 'cloister',
		},
		{
			name: 'temple',
		},
	])
	const [rojo, setRojo] = useState([
		{
			name: 'farm',
		},
		{
			name: 'granary',
		},
		{
			name: 'greenhouse',
		},
		{
			name: 'orchard',
		},
	])
	const [verde, setVerde] = useState([
		{
			name: 'almshouse',
		},
		{
			name: 'feast hall',
		},
		{
			name: 'inn',
		},
		{
			name: 'tavern',
		},
	])
	const [gris, setGris] = useState([
		{
			name: 'fountain',
		},
		{
			name: 'millstone',
		},
		{
			name: 'shed',
		},
		{
			name: 'well',
		},
	])
	const [amarillo, setAmarillo] = useState([
		{
			name: 'bakery',
		},
		{
			name: 'market',
		},
		{
			name: 'tailor',
		},
		{
			name: 'theater',
		},
	])
	const [azul, setAzul] = useState([
		{
			name: 'bank',
		},
		{
			name: 'factory',
		},
		{
			name: 'trading post',
		},
		{
			name: 'warehouse',
		},
	])

	const [rosa, setRosa] = useState([
		{
			name: 'architect´s guild',
		},
		{
			name: 'archive of the second age',
		},
		{
			name: 'barrett castle',
		},
		{
			name: 'cathedral of caterina',
		},
		{
			name: 'fort ironweed',
		},
		{
			name: 'grove university',
		},
		{
			name: 'mandras palace',
		},
		{
			name: 'opaleye´s watch',
		},
		{
			name: 'shirne of the elder tree',
		},
		{
			name: 'silva forum',
		},
		{
			name: 'the starloom',
		},
		{
			name: 'statue of the bondmaker',
		},
	])

	const barajeo_general = (array) => {
		let resultado = array.sort(() => {
			return Math.random() - 0.5
		})
		return resultado
	}
	const barajear = async () => {
		setBaraja([...barajeo_general(baraja)])
		setAzul([...barajeo_general(azul)])
		setGris([...barajeo_general(gris)])
		setNaranja([...barajeo_general(naranja)])
		setRojo([...barajeo_general(rojo)])
		setAmarillo([...barajeo_general(amarillo)])
		setVerde([...barajeo_general(verde)])
		setRosa([...barajeo_general(rosa)])
		let mazoJugable = [
			cottage[0],
			rojo[0],
			gris[0],
			naranja[0],
			verde[0],
			amarillo[0],
			azul[0],
		]
		setJugables([...mazoJugable])
	}

	const seleccionar_monumento = (idx) => {
		let array = edificios_jugables
		array.push(rosa[idx])
		setJugables([...array])
	}

	const jalar_carta = (index) => {
		if (index > 2) {
			console.log('no haga trampa loco')
		} else {
			let array = [...baraja]
			let carta_escogida = array[index]
			array.splice(index, 1, array[3])
			array.splice(3, 1)
			array.push(carta_escogida)
			setBaraja([...array])
		}
	}

	useEffect(() => {
		barajear()
	}, [])

	return (
		<div className='container'>
			<div className='materialContainer'>
				{baraja
					.filter((card, idx) => idx < 3)
					.map((item, idx) => {
						return (
							<MaterialCard
								key={idx}
								name={item}
								idx={idx}
								click={() => jalar_carta(idx)}
							/>
						)
					})}
			</div>
			<div className='edificiosContainer'>
				{edificios_jugables.map((item, idx) => {
					return (
						<MaterialCard
							key={idx}
							name={item.name}
							idx={idx}
							click={() => console.log('click')}
						/>
					)
				})}
			</div>
			<button onClick={() => seleccionar_monumento(0)}>{rosa[0].name}</button>
			<button onClick={() => seleccionar_monumento(1)}>{rosa[1].name}</button>
		</div>
	)
}

const MaterialCard = ({ name, idx, click }) => {
	return (
		<div onClick={() => click()} className='materialCard'>
			{name}
			{idx}
		</div>
	)
}

export default Board
