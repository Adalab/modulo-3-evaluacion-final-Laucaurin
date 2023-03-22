import { useParams, NavLink } from "react-router-dom";

const CharacterDetail = ({ characterList }) => {

  const { id } = useParams();

  const characterSelected = characterList.find(eachCharacter => eachCharacter.id === id)


  return (
    <article>
      <NavLink to='/' > Go back</NavLink>
      <div>
        <img src={characterSelected.image} alt={characterSelected.name} />
        <div>
          <h2>{characterSelected.name}</h2>
          <ul>
            <li>
              <span>Status</span>
              <span>{characterSelected.alive === true ? 'yes' : 'No'}</span>
            </li>
            <li>
              <span>Species</span>
              <span>{characterSelected.species}</span>
            </li>
            <li>
              <span>Gender</span>
              <span>{characterSelected.gender}</span>
            </li>
            <li>
              <span>House</span>
              <span>{characterSelected.house}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default CharacterDetail