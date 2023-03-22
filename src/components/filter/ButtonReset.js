const ButtonReset = ({ handleClickReset }) => {

  const handleReset = () => {
    handleClickReset();
  }

  return (
    <button className="btn__reset" type='reset' onClick={handleReset}>Reset</button>
  )
}

export default ButtonReset