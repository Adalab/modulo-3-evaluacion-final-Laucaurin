import ErrorNotCharacter from "../pages/ErrorNotCharacter";
import CharacterCard from "../list/CharacterCard";

const CharacterList = ({ characterList, inputName }) => {
  const renderList = () => {
    if (characterList.length !== 0) {
      return characterList.map(eachCharacter => {
        return <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter} />
      })
    } else {
      return (
        <ErrorNotCharacter inputName={inputName} />
      );
    }
  }

  return (
    <section className='section__list'>
      <ul className="list">
        {renderList()}
      </ul>
    </section>
  );
}

export default CharacterList;