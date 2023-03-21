import '../styles/App.scss';
import Main from './pages/Main';
// Ej img: import logoMenu from '../images/ico-menu.svg';

function App() {


  return (
    <div className='container'>
      <header className='header'>
        <h1>Harry Potter</h1>
      </header>
      <main className='main'>
        <Main />
      </main>

    </div>
  );
}
export default App;
