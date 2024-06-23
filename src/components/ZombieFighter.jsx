import React from 'react';

function ZombieFighter(props) {
  function handleAddFighter() {
		if (props.money - props.price >= 0) {
			props.setMoney(props.money - props.price);
			const newTeam = [...props.team, props];
			props.setTeam(newTeam);
      const remainingFighters = props.zombieFighters.filter((fighter) => {
			return fighter.name !== props.name;
		});
		props.setZombieFighters(remainingFighters);
    props.setTeamStrength(props.teamStrength + props.strength);
	props.setTeamAgility(props.teamAgility + props.agility);
		} else {
			console.log('Not enough money');
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
