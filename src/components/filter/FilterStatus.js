function FilterStatus({ inputStatus, handleInputStatus }) {
  //

  const handleInput = (ev) => {
    handleInputStatus(ev.target.value);
  };

  return (
    <fieldset className="form__status">
      <legend className='form__status--legend'>Dead or Alive?</legend >
      <div className="form__status--container">
        <label className="form__status--option" htmlFor="all">
          <input className="form__status--input" type="radio" id="all" name="status" value="all" checked={inputStatus === 'all'} onChange={handleInput} />
          <span className='form__status--label'>All<i className="fa-solid fa-reply-all"></i></span>
        </label>

        <label className="form__status--option" htmlFor="alive">
          <input className="form__status--input" type="radio" name='status' id='alive' value='alive' checked={inputStatus === 'alive'} onChange={handleInput} />
          <span className="form__status--label">Alive<i className="form__radio--icon fa-solid fa-heart"></i></span>
        </label>

        <label className="form__status--option" htmlFor="dead">
          <input className="form__status--input" type="radio" name='status' id='dead' value='dead' checked={inputStatus === 'dead'} onChange={handleInput} />
          <span className="form__status--label">Dead<i className="form__radio--icon fa-solid fa-skull"></i></span>
        </label>

      </div>

    </fieldset>

  )

}
export default FilterStatus;
