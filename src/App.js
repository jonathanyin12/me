import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Education from './components/education'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          < Sidebar></Sidebar>
        </div>
       <div id="colorlib-main">
         <Introduction></Introduction>
         <About></About>
         <Skills></Skills>
         <Education></Education>
         <Timeline></Timeline>
         <Projects></Projects>

        </div>
      </div>

    );
  }
}

export default App;
