import { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import '../styles/App.scss';
import api from '../services/api';
import CharacterList from './list/CharacterList';
import Filters from './filter/Filters';
import CharacterDetail from './pages/CharacterDetail';
import ErrorNotFound from './pages/ErrorNotFound';
import logo from '../images/header.png'
import Loader from './pages/Loader';

// Ej img: import logoMenu from '../images/ico-menu.svg';

function App() {

  const [characterList, setCharacterList] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputHouse, setInputHouse] = useState('gryffindor');
  const [inputStatus, setInputStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.getCharactersByHouse(inputHouse)
      .then(infoCharacters => {
        setCharacterList(infoCharacters)
        setIsLoading(false);
      })

  }, [inputHouse]);


  const handleInputName = (value) => {
    setInputName(value)
  }

  const handleInputHouse = (value) => {
    setInputHouse(value)
  }

  const handleInputStatus = (value) => {
    setInputStatus(value)
  }

  const filterByName = eachCharacter => eachCharacter.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase())


  const filterByStatus = (eachCharacter) => {
    if (inputStatus === 'all') {
      return true; // Show all characters
    } else if (inputStatus === 'alive') {
      return eachCharacter.alive === true; // Show only alive characters

    } else {
      return eachCharacter.alive === false; // Show only dead characters

    };
  }

  const renderFilteredList = () => {
    return characterList
      .filter(filterByName)
      .filter(filterByStatus)
    // .sort((a, b) => a.name.localeCompare(b.name))
  }

  const findCharacter = (value) => {
    return characterList.find((eachCharacter) => eachCharacter.id === value);

  }

  const handleClickReset = () => {

    setInputName('')
    setInputHouse('gryffindor')
    setInputStatus('all')
  }
  if (isLoading === false) {
    return (
      <div className='container'>
        <header className='header'>
          <NavLink to='/' ><img className='header__img' src={logo} alt="" /></NavLink>


        </header>

        <Routes>
          <Route exact path="/" element={
            <main className='main'>
              <Filters
                inputName={inputName}
                handleInputName={handleInputName}
                inputHouse={inputHouse}
                handleInputHouse={handleInputHouse}
                inputStatus={inputStatus}
                handleInputStatus={handleInputStatus}
                handleClickReset={handleClickReset}
              />
              <CharacterList
                characterList={renderFilteredList()}
                inputName={inputName} />


            </main>
          } />

          <Route path="/character/:id" element={<CharacterDetail characterList={characterList} findCharacter={findCharacter} />} />
          <Route path='*' element={<ErrorNotFound />} />

        </Routes>

      </div>
    );
  } else {
    return (
      <Loader />
    );
  }
}

export default App;
