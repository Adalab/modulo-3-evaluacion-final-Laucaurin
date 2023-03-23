import { NavLink } from "react-router-dom";

const ErrorNotFound = () => {

  return (
    <main className="error__main">
      <section className='error__page'>
        <h2 className='error__page--title'>Woops!</h2>
        <p className='error__page--text'> It´s just a 404 Error. Page not found.</p>
        <NavLink to='/' className='error__page--button' > <i class="error__link fa-sharp fa-solid fa-arrow-left"></i>Go Back</NavLink>
      </section>
    </main>
  );
}

export default ErrorNotFound;