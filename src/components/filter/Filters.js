import FilterHouse from "../filter/FilterHouse";
import FilterName from "../filter/FilterName";
import FilterStatus from "../filter/FilterStatus"
import ButtonReset from "./ButtonReset";

const Filters = ({ inputName, handleInputName, handleInputHouse, inputHouse, inputStatus, handleInputStatus, handleClickReset }) => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <section className='section__form'>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterName inputName={inputName} handleInputName={handleInputName} />
        <FilterHouse inputHouse={inputHouse} handleInputHouse={handleInputHouse} />
        <FilterStatus
          inputStatus={inputStatus}
          handleInputStatus={handleInputStatus} />
        <ButtonReset
          handleClickReset={handleClickReset} />
      </form>
    </section>
  )
}
export default Filters