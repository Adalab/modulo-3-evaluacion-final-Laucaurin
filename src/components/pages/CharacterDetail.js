import { useParams, NavLink } from "react-router-dom";
import gryImg from '../../images/gry.png'
import huffImg from '../../images/huff.png'
import ravImg from '../../images/rav.png'
import slyImg from '../../images/sly.png'
import ErrorNotFound from "../pages/ErrorNotFound";

const CharacterDetail = ({ findCharacter }) => {



  const params = useParams();
  const foundCharacter = findCharacter(params.id);


  const renderIconStatus = () => {
    if (foundCharacter.alive === true) {
      return (
        <>
          <i className="icons__detail fa-sharp fa-solid fa-heart-pulse"></i>
          <span>Alive</span>
        </>
      )
    } else if (foundCharacter.alive === false) {
      return (
        <>
          <i className="icons__detail fa-solid fa-skull"></i>
          <span>Dead</span>
        </>
      )

    } else {
      return <span>No references</span>
    }
  }

  const renderIconSpecies = () => {
    if (foundCharacter.species === 'human') {
      return (
        <>
          <i class="icons__detail fa-solid fa-person"></i>
          <span>Human</span>
        </>
      )
    } else {
      return (
        <>
          <i class="icons__detail fa-solid fa-person-circle-xmark"></i>
          <span>No human</span>
        </>
      )
    }
  }


  const renderIcongender = () => {
    if (foundCharacter.gender === 'female') {
      return (
        <>
          <i class="icons__detail fa-solid fa-venus"></i>
          <span>Female</span>
        </>
      )
    } else if (foundCharacter.gender === 'male') {
      return (
        <>
          <i class="icons__detail fa-sharp fa-solid fa-mars"></i>
          <span>Male</span>
        </>
      )
    } else {
      return <span>No references</span>
    }
  }

  const renderIconHouse = () => {
    if (foundCharacter.house === 'Gryffindor') {
      return <img className="icon__house" src={gryImg} alt="" />

    } else if (foundCharacter.house === 'Slytherin') {
      return <img className="icon__house" src={slyImg} alt="" />

    } else if (foundCharacter.house === 'Hufflepuff') {
      return <img className="icon__house" src={huffImg} alt="" />

    } else if (foundCharacter.house === 'Ravenclaw') {
      return <img className="icon__house" src={ravImg} alt="" />

    } else {
      return <span>No references</span>
    }
  }



  if (foundCharacter !== undefined) {
    return (
      <main className="detail__main">

        <article className="detail__container">

          <NavLink className="detail__container--link" to='/' >
            <i class="detail__link fa-sharp fa-solid fa-arrow-left"></i>

          </NavLink>




          <div className="detail__content">
            <img className="detail__img" src={foundCharacter.image !== '' ? foundCharacter.image : require('../../images/avatar7.png')} alt={foundCharacter.name} />

            <div className="detail__info">
              <h2 className="detail__info--title">{foundCharacter.name}</h2>

              <ul className="detail__info--list">
                <li className="detail__info--list--item">
                  <span>Status</span>
                  <span>{renderIconStatus()}</span>
                </li>
                <li className="detail__info--list--item">
                  <span>Species</span>
                  <span>{renderIconSpecies()}</span>
                </li>
                <li className="detail__info--list--item">
                  <span>Gender</span>
                  <span>{renderIcongender()}</span>
                </li>
                <li className="detail__info--list--house">
                  {/* <span>House</span> */}
                  <span> {renderIconHouse()}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    )
  } else {
    return (
      <ErrorNotFound />
    )
  }
}

export default CharacterDetail