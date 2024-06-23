import React from 'react';

function ZombieFighter(props) {
	return (
		<li>
			<img src={props.img} />
			<p>{props.name}</p>
			<p>Price: {props.price}</p>
			<p>Strength: {props.strength}</p>
			<p>Agility: {props.agility}</p>
			<button>Add</button>
		</li>
	);
}

export default ZombieFighter;
