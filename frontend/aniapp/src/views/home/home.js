import logo from '../../logo.svg';
import './home.css';
import Button from '@material-ui/core/Button';
import RegisterOptions from './RegisterOptions.js';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterOptions />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
