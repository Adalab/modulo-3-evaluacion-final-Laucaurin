import CharacterCard from "../list/CharacterCard";

const CharacterList = ({ characterList }) => {
  const renderList = () => {
    if (characterList.length !== 0) {
      return characterList.map(eachCharacter => {
        return <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter} />
      })
    } else {
      return (
        <p>No existen personajes con el nombre</p>
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