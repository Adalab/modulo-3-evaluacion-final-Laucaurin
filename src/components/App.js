import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import api from '../services/api';
import CharacterList from './list/CharacterList';
import Filters from './filter/Filters';
import CharacterDetail from './pages/CharacterDetail';
// Ej img: import logoMenu from '../images/ico-menu.svg';

function App() {

  const [characterList, setCharacterList] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputHouse, setInputHouse] = useState('Gryffindor');

  useEffect(() => {
    api.getCharactersByHouse(inputHouse).then(infoCharacters => {
      setCharacterList(infoCharacters);
    });
  }, [inputHouse]);


  const handleInputName = (value) => {
    setInputName(value)
  }

  const handleInputHouse = (value) => {

    console.log('selected house', value)
    setInputHouse(value)
  }

  const filterByName = eachCharacter => eachCharacter.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase())



  const renderFilteredList = () => {
    return characterList
      .filter(filterByName)
    // .filter(filterByHouse)
    // .sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <div className='container'>
      <header className='header'>
        <h1>Harry Potter</h1>
      </header>
      <main className='main'>
        <Routes>
          <Route path="/" element={
            <>
              <Filters
                inputName={inputName}
                handleInputName={handleInputName}
                inputHouse={inputHouse}
                handleInputHouse={handleInputHouse}
              />
              <CharacterList
                characterList={renderFilteredList()} />
            </>} />

          <Route path="/character/:id" element={<CharacterDetail characterList={characterList} />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Routes>


      </main>

    </div>
  );
}

export default App;
