import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseList from './pages/CourseList';
import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="home-container">
        <header className="navbar">
          <img className="logo" src={logo} alt="ea-logo" />
          <h1>Turning Enterprise Architecture into Executable Knowledge</h1> <br/> <h2>Xiaoqi Zhao (Yasen)</h2>
        </header>

        <main className="main-content">
          <section id="about">
            <h2>I build meta-model-driven systems that transform enterprise complexity into structured, AI-ready knowledge.</h2>
            <h3>Most enterprise architecture is documentation.<br/>I turn it into systems that can be executed, queried, and understood by AI.</h3>
            <br/>
            <h2>EKA Framework™ (Executable Knowledge Architecture)</h2>
            <h3>A 3-layer architecture that connects meta-models, knowledge graphs, and AI execution into one unified system.</h3>            
            <div>
              <li>Without meta-models, systems cannot scale</li>
              <li>Without knowledge graphs, data has no meaning</li>
              <li>Without execution, architecture has no value</li>
            </div>
            <br/>
            <h2>Who Am I?</h2>
            <p>
              I work at the intersection of Enterprise Architecture, Knowledge Graphs, and AI.<br/>
              My focus is not modeling systems —<br/>
              but making them computable, connected, and executable.<br/>
              I design frameworks that turn fragmented enterprise knowledge into structured systems that AI can understand and act on.
            </p>
          </section>
          <section id="share">
            <CourseList />
          </section>

          <section id="contact">
            <h2>Contact Me</h2>
            <p>Email me at <a className="App-link" href="mailto:xiaoqizhao@outlook.com">my Email </a></p>
          </section>
        </main>

        <footer className="footer">
          <p>© 2025~2026 Xiaoqi Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
