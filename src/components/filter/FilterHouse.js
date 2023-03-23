const FilterHouse = ({ handleInputHouse, inputHouse }) => {

  const handleInput = (ev) => {
    handleInputHouse(ev.target.value)
  }

  return (
    <div className="form__house">
      <label className='form__house--label' htmlFor="searchhouse">Search by House</label>
      <select className='form__house--options' type="text" name='searchhouse' id='searchhouse' value={inputHouse} onChange={handleInput}>
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
    </div>
  )
}
export default FilterHouse