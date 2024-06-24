import React from 'react';

function TeamMember(props) {
  function handleRemoveFighter() {
		props.setMoney(props.money + props.price);
		const newTeam = props.team.filter((fighter) => {
			return fighter.name !== props.name;
		});
		props.setTeam(newTeam);
		const remainingFighters = [...props.zombieFighters, props];
		props.setZombieFighters(remainingFighters);
		props.setTeamStrength(props.teamStrength - props.strength);
		props.setTeamAgility(props.teamAgility - props.agility);
  }

  return (
		<li>
			<img src={props.img} />
			<p>{props.name}</p>
			<p>Price: {props.price}</p>
			<p>Strength: {props.strength}</p>
			<p>Agility: {props.agility}</p>
			<button onClick={handleRemoveFighter}>Remove</button>
		</li>
  );
}

export default TeamMember;
