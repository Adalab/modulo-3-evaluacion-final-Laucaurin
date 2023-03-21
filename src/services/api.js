//Me quedo con lo que me interesa de la api
const parseCharacter = eachCharacter => {
  return {
    name: eachCharacter.name,
    id: eachCharacter.id,
    species: eachCharacter.species,
    alive: eachCharacter.alive,
    gender: eachCharacter.gender,
    image: eachCharacter.image ? eachCharacter.image : require('../images/descarga.jpeg'),
    house: eachCharacter.house,
  }
}
//Llamada a api para todos los personajes
const getCharactersGryffindor = () => {
  return (
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then(response => response.json())
      .then(data => {
        return data.map(parseCharacter)
      })
  )
}

//Llamada a api para solo un personje
const getSingleCharacter = (id) => {
  return (
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(parseCharacter)
  )
}
//Objeto a exportar para utilizar las llamadas a api
const api = {
  getCharactersGryffindor,
  getSingleCharacter,
}

export default api
