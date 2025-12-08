import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="EA-logo" alt="logo" />
        <p>
          Welcome to Xiaoqi's Home Site
        </p>
      </header> */}
      <div className="home-container">
        <header className="navbar">
          <img className="logo" src={logo} alt="ea-logo" />
          <h1>Welcome to Xiaoqi's Home Site</h1>
          {/* <nav>
            <ul className="nav-list">
              <li><a href="#about">About Me</a></li>
              <li><a href="#share">My Share</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav> */}
        </header>

        <main className="main-content">
          <section id="about">
            <h2>About Me</h2>
            <p>I've worked in information technology field for more than 25 years, and have experience on IT technologies, project management, architecture design and others with real practical skills,
              <br></br>I've gained numbers of IT and management certification, including but not limited, as ITIL, PMP, CISSP, TOGAF, Business Architecture, ArchiMate, CISA, etc.,
              <br></br>and also I'm interested and using variable computing programming language, I'd like to share my knowledge through online teaching.
            </p>
          </section>
          <section id="share">
            <h2>My Shared Resources</h2>
            <a
              className="App-link"
              href="https://www.udemy.com/user/xiaoqi-zhao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn my courses in Udemy
            </a>
            <br></br><br></br>
            <a
              className="App-link"
              href="http://www.youtube.com/@yasenzhao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch my shared videos in YouTube
            </a>
          </section>
          <section id="contact">
            <h2>Contact Me</h2>
            <p>Email me at <a className="App-link" href="mailto:xiaoqizhao@outlook.com">my Email </a>
             or message me at <a className="App-Link" href="https://www.linkedin.com/in/xiaoqi-zhao">LinkedIn</a>
            </p>
          </section>
        </main>

        <footer className="footer">
          <p>© 2025 Xiaoqi Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
