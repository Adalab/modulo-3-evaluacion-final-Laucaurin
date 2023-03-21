import FilterName from "./FilterName";

const Filters = ({ inputName, handleInputName }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <section className='section__form'>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterName inputName={inputName} handleInputName={handleInputName} />

      </form>
    </section>
  )
}
export default Filters