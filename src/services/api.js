//Me quedo con lo que me interesa de la api
const parseCharacter = eachCharacter => {
  return {
    name: eachCharacter.name,
    id: eachCharacter.id,
    species: eachCharacter.species,
    alive: eachCharacter.alive,
    gender: eachCharacter.gender,
    image: eachCharacter.image !== "" ? eachCharacter.image : require('../images/descarga.jpeg'),
    house: eachCharacter.house,
  }
}

// const getCharactersByHouse = (inputHouse) => {
//   let url;
//   switch (inputHouse) {
//     case "Gryffindor":
//       url = "https://hp-api.onrender.com/api/characters/house/gryffindor";
//       break;
//     case "Slytherin":
//       url = "https://hp-api.onrender.com/api/characters/house/Slytherin";
//       break;
//     case "Hufflepuff":
//       url = "https://hp-api.onrender.com/api/characters/house/Hufflepuff";
//       break;
//     case "Ravenclaw":
//       url = "https://hp-api.onrender.com/api/characters/house/Ravenclaw";
//       break;
//     default:
//       throw new Error("Invalid selection");
//   }
//   return fetch(url)
//     .then((response) => response.json())
//     .then(data => {
//       return data.map(parseCharacter)
//     })
// }
const getCharactersByHouse = (inputHouse) => {
  const url = `https://hp-api.onrender.com/api/characters/house/${inputHouse}`
  return fetch(url)
    .then((response) => response.json())
    .then(data => {
      return data.map(parseCharacter)
    })
}

const getSingleCharacter = (id) => {
  return (
    fetch(`https://hp-api.onrender.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data.map(parseCharacter)

      })
  )
}


const api = {
  getCharactersByHouse,
  getSingleCharacter,
}

export default api
