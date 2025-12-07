import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="EA-logo" alt="logo" />
        <p>
          Welcome to Xiaoqi's Home Site
        </p>
        <a
          className="App-link"
          href="https://www.udemy.com/user/xiaoqi-zhao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn my courses in Udemy
        </a>
      </header>
    </div>
  );
}

export default App;
