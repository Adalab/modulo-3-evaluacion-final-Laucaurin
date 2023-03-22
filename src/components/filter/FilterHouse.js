const FilterHouse = ({ handleInputHouse, inputHouse }) => {

  const handleInput = (ev) => {
    console.log('click', ev.target)
    handleInputHouse(ev.target.value)
  }

  return (
    <div className="form__species">
      <label className='form__specie--label' htmlFor="searchSpecies">House</label>
      <select className='form__species--options' type="text" name='searchSpecies' id='searchSpecies' value={inputHouse} onChange={handleInput}>

        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>

  )
}
export default FilterHouse