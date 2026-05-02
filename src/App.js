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
          <h1>Xiaoqi Zhao (Yasen)</h1> <br/> <h2>Enterprise Architecture & Ontology Modeling Practitioner</h2>
        </header>

        <main className="main-content">
          <section id="about">
            <h2>Bridging the gap between IT Strategy, Modeling, and Semantic Technology.</h2>
            <h2>About Me</h2>
            <p>With over 25 years of hands-on experience in the Information Technology field, I specialize in transforming complex business requirements into robust architectural designs. My expertise spans IT strategy, project management, and cross-domain system architecture.
              <br/><br/>
              I hold a comprehensive suite of industry-recognized certifications—including TOGAF, ArchiMate, CISSP, PMP, ITIL, and CISA—and am deeply passionate about exploring the intersection of programming languages and semantic modeling.
              <br/><br/>
              My mission is to empower the next generation of architects by sharing practical, real-world knowledge through structured online teaching and open-source contributions
            </p>
            <p>Want to know more about me or to connect? Visit my <a className="App-Link" href="https://www.linkedin.com/in/xiaoqi-zhao">LinkedIn</a> page.</p>
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
