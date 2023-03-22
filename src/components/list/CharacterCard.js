import { NavLink } from "react-router-dom";

const CharacterCard = ({ eachCharacter }) => {
  return (
    <NavLink to={`/character/${eachCharacter.id}`}>
      <li className='list__element'>
        <img className='list__element--img' src={eachCharacter.image} alt={eachCharacter.name} />
        <p className='list__element--name'>{eachCharacter.name}</p>
        <p className='list__element--species'>{eachCharacter.species}</p>
      </li>
    </NavLink>
  );
}

export default CharacterCard;