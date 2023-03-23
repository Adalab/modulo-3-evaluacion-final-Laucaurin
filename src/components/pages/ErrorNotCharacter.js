const ErrorNotCharacter = ({ inputName }) => {

  return (
    <main className="error__main">
      <section className='error__character'>
        <h2 className='error__character--title'>Woops!</h2>
        <p className='error__character--text'> No characters matching name '{inputName}'</p>
        <p className='error__character--text'> Try with another name.</p>
      </section>
    </main>
  );
}

export default ErrorNotCharacter;