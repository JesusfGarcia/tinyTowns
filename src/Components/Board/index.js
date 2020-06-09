import React from 'react'

import './styles.css'

const Board = (props) => {
	return (
		<div className='containerTab'>
			<Row items={props.items} />
		</div>
	)
}

const Row = (props) => {
	return (
		<div className='row'>
			{props.items.map((item, index) => {
				return <Square item={item} />
			})}
		</div>
	)
}

const Square = (props) => {
	return (
		<div className='squareContainer'>
			<div onClick={() => alert(props.item.builded)} className='square'></div>
		</div>
	)
}

export default Board
