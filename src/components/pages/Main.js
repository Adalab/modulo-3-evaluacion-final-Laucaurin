import { useEffect, useState } from 'react';

import api from '../../services/api';

import CharacterList from '../CharacterList';
import Filters from '../Filters';
// Ej img: import logoMenu from '../images/ico-menu.svg';

const Main = () => {

  const [characterList, setCharacterList] = useState([]);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    api.getCharactersGryffindor().then(infoCharacters => {
      setCharacterList(infoCharacters)
    })
  }, [])
  console.log(characterList)

  const handleInputName = (value) => {
    setInputName(value)
  }

  const filterByName = eachCharacter => eachCharacter.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase())

  const renderFilteredList = () => {
    return characterList
      .filter(filterByName)
  }

  return (
    <>
      <Filters
        inputName={inputName}
        handleInputName={handleInputName} />
      <CharacterList characterList={renderFilteredList()} />
    </>
  );
}
export default Main;