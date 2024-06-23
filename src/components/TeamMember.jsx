import React from 'react';

function TeamMember(props) {
	return (
		<li>
			<img src={props.img} />
			<p>{props.name}</p>
			<p>Price: {props.price}</p>
			<p>Strength: {props.strength}</p>
			<p>Agility: {props.agility}</p>
		</li>
	);
}

export default TeamMember;
