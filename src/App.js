import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.jpeg';
import './App.css';
// import Home from './pages/Home';
// import Blog from './pages/Blog';
// import Course from './pages/Course';

function App() {
  return (
    <div className="App">
      <div className="home-container">
        <header className="navbar">
          <img className="logo" src={logo} alt="ea-logo" />
          <h1>Welcome to Xiaoqi's Home Site</h1>
        </header>

        <main className="main-content">
          <section id="about">
            <h2>About Me</h2>
            <p>I've worked in information technology field for more than 25 years, and have experience on IT technologies, project management, architecture design and others with real practical skills,
              <br></br>I've gained numbers of IT and management certification, including but not limited, as ITIL, PMP, CISSP, TOGAF, Business Architecture, ArchiMate, CISA, etc.,
              <br></br>and also I'm interested and using variable computing programming language, I'd like to share my knowledge through online teaching.
            </p>
            <p>Want to know more about me or to connect? Visit my <a className="App-Link" href="https://www.linkedin.com/in/xiaoqi-zhao">LinkedIn</a> page.</p>
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
            <p>Public Assessment on my knowledge sharing:<br/>
              <br/>Overall, Yasenstar is a high-quality niche resource in the world of enterprise architecture and ontology modeling.
              <br/>It stands out for combining EA (ArchiMate) with ontology/semantic modeling in a transparent, open-source, practical way.
              <br/><br/>If you — like me — are interested in bridging modeling + semantics 
              <br/>(for example, to build knowledge graphs that reflect enterprise architecture, or to bring rigor to system design), 
              <br/>then Yasenstar’s content is among the better self-teaching / open-knowledge options available.
              <br/><br/>However, treat it more like a “workshop repository + tutorial set” than a polished “course for everyone.” 
              <br/>It requires effort, but reward is strong if you commit.</p>
          </section>
          {/* <section>
            <Router>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Blog">My Blog</Link></li>
                  <li><Link to="/Course">My Featured Courses</Link></li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Course" element={<Course />} />
              </Routes>
            </Router>
          </section> */}
          <section id="contact">
            <h2>Contact Me</h2>
            <p>Email me at <a className="App-link" href="mailto:xiaoqizhao@outlook.com">my Email </a></p>
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
