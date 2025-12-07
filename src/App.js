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
        <br></br>
        <a
          className="App-link"
          href="http://www.youtube.com/@yasenzhao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch my shared videos in YouTube
        </a>
      </header>
    </div>
  );
}

export default App;
