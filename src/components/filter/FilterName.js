const FilterName = ({ inputName, handleInputName }) => {

  const handleInput = (ev) => {
    handleInputName(ev.target.value)
  }

  return (
    <div className="form__name">
      <label className='form__name--label' htmlFor="searchName">Search by Character</label>
      <input className='form__name--input' type="text" name='searchName' id='searchName' placeholder="Hermione..." value={inputName} onInput={handleInput} />

    </div>
  );
}

export default FilterName;