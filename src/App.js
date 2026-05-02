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
            <h2>Enterprise Architecture is Broken. I Make It Executable!</h2>
            <h3>Most enterprise architecture is documentation.<br/>I turn it into systems that can be executed, queried, and understood by AI.</h3>
            <br/>
            <h2>EKA Framework™ (Executable Knowledge Architecture)</h2>
            <h3>A system that makes enterprise knowledge executable.</h3>
            <h3>The EKA Framework is defined by the EKA Core Architecture below.</h3>
            <div className="border border-gray-200 overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-md">
              <img 
                src="EKA.png" alt="EKA"
                className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>       
            <h4>
              <li>Structure - "Meta Models": Without meta-models, systems cannot scale</li>
              <li>Mearing - "Knowledge Graphs":  Without knowledge graphs, data has no meaning</li>
              <li>Execution - "AI & Agents": Without execution, architecture has no value</li>
            </h4>
            <h3>Not diagrams! Not documentation! A system that can run!</h3>
            <div className="border border-gray-200 overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-md">
              <img 
                src="EKA_Layered_Framework.png" alt="EKA Framework"
                className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div> 
            <div>
              <li>Transform enterprise architecture into AI-ready systems</li>
              <li>Build knowledge graphs with real business meaning</li>
              <li>Enable intelligent automation and decision-making</li>
              <li>Connect fragmented systems into a unified knowledge layer</li>
            </div>
          </section>
          <section id="share">
            <CourseList />
            <h3>Explore the Framework (TBA)</h3>
            <h3>App to Your System (TBA)</h3>
          </section>
          <section>            
            <h2>Who Am I?</h2>
            <p>
              I work at the intersection of Enterprise Architecture, Knowledge Graphs, and AI.<br/>
              My focus is not modeling systems —<br/>
              but making them computable, connected, and executable.<br/>
              I design frameworks that turn fragmented enterprise knowledge into structured systems that AI can understand and act on.
            </p>
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
