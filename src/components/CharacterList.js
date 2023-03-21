import CharacterCard from "./CharacterCard";

const CharacterList = ({ characterList }) => {
  const renderList = characterList.map(eachCharacter => {
    return <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter} />
  })
  return (
    <section className='section__list'>
      <ul className="list">
        {renderList}
      </ul>
    </section>
  );
}

export default CharacterList;