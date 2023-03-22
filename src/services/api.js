

const parseCharacter = eachCharacter => {
  return {
    name: eachCharacter.name,
    id: eachCharacter.id,
    species: eachCharacter.species,
    alive: eachCharacter.alive,
    gender: eachCharacter.gender,
    image: eachCharacter.image,
    house: eachCharacter.house,
  }
}


const getCharactersByHouse = (inputHouse) => {
  const url = `https://hp-api.onrender.com/api/characters/house/${inputHouse}`
  return fetch(url)
    .then((response) => response.json())
    .then(data => {

      return data.map(parseCharacter)
    })

}


// const getSingleCharacter = (id) => {
//   return (
//     fetch(`https://hp-api.onrender.com/api/characters/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         return data.map(parseCharacter)

//       })
//   )
// }


const api = {
  getCharactersByHouse,
  // getSingleCharacter,
}

export default api
