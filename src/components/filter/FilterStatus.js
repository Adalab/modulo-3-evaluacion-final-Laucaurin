function FilterStatus({ inputStatus, handleInputStatus }) {

  const handleInput = (ev) => {
    handleInputStatus(ev.target.value);
  };

  return (
    <fieldset className="form__status">
      <legend className='form__status--legend'>Dead or Alive?</legend >
      <div className="form__status--container">

        <label htmlFor="all">
          <input className="form__status--input" type="radio" id="all" name="status" value="all" checked={inputStatus === 'all'} onChange={handleInput} />

          <i class="form__status--icons fa-solid fa-users"></i>
        </label>


        <label className="form__status--option" htmlFor="alive">
          <input className="form__status--input" type="radio" name='status' id='alive' value='alive' checked={inputStatus === 'alive'} onChange={handleInput} />
          <i class=" form__status--icons fa-sharp fa-solid fa-heart-pulse"></i>
        </label>

        <label className="form__status--option" htmlFor="dead">
          <input className="form__status--input" type="radio" name='status' id='dead' value='dead' checked={inputStatus === 'dead'} onChange={handleInput} />
          <i className="form__status--icons fa-solid fa-skull"></i>
        </label>
      </div>
    </fieldset>
  )
}

export default FilterStatus;
