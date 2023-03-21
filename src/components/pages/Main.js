import { useEffect, useState } from 'react';

import api from '../../services/api';

import CharacterList from '../CharacterList';
import Filters from '../Filters';
// Ej img: import logoMenu from '../images/ico-menu.svg';

const Main = () => {

  const [characterList, setCharacterList] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputHouse, setInputHouse] = useState('Gryffindor');

  useEffect(() => {
    api.getCharactersByHouse(inputHouse).then(infoCharacters => {
      setCharacterList(infoCharacters);
    });
  }, [inputHouse]);


  const handleInputHouse = (value) => {

    console.log('selected house', value)
    setInputHouse(value)
  }

  const handleInputName = (value) => {
    setInputName(value)
  }



  const filterByName = eachCharacter => eachCharacter.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase())

  const filterByHouse = eachCharacter => eachCharacter.house === inputHouse;

  const renderFilteredList = () => {
    return characterList
      .filter(filterByName)
      .filter(filterByHouse);
  }

  return (
    <>
      <Filters
        inputName={inputName}
        handleInputName={handleInputName}
        inputHouse={inputHouse} handleInputHouse={handleInputHouse}
      />
      <CharacterList characterList={renderFilteredList()} />
    </>
  );
}
export default Main;