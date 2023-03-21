const CharacterCard = ({ eachCharacter }) => {
  return (
    <li className='list__element'>
      <img className='list__element--img' src={eachCharacter.image} alt={eachCharacter.name} />
      <p className='list__element--name'>{eachCharacter.name}</p>
      <p className='list__element--species'>{eachCharacter.species}</p>
    </li>
  );
}

export default CharacterCard;