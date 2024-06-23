import React from 'react';

function ZombieFighter(props) {
  function handleAddFighter() {
		if (props.money - props.price >= 0) {
			props.setMoney(props.money - props.price);
			const newTeam = [...props.team, props];
			props.setTeam(newTeam);
		} else {
			console.log('Not enought money');
		}
  }

  return (
		<li>
			<img src={props.img} />
			<p>{props.name}</p>
			<p>Price: {props.price}</p>
			<p>Strength: {props.strength}</p>
			<p>Agility: {props.agility}</p>
			<button onClick={handleAddFighter}>Add</button>
		</li>
  );
}

export default ZombieFighter;
