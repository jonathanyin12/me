import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div >
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jonathan Yin</a></h1>
              <span className="position">Student at Yale University <br/> Class of 2020</span>
              <span className="email"><i className="icon-mail"></i> <a style={{ color: "inherit"}} href="mailto:jonathan.yin@yale.edu">jonathan.yin@yale.edu</a></span>
              <br/>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul> 
                  <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                  <li className="active"><a href="#about" data-nav-section="about">About</a></li>
                  <li className="active"><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li className="active"><a href="#education" data-nav-section="education">Education</a></li>
                  <li className="active"><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                  <li className="active"><a href="#projects" data-nav-section="projects">Projects</a></li>

                </ul>
              </div>
            </nav>
            {/* <nav id="colorlib-main-menu">
              <div className="text-center">
                <a style={{ color: "inherit"}} href="https://www.linkedin.com/in/jonathan-yin/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"/></a>
                <a style={{ color: "inherit"}} href="https://github.com/jonathanyin12" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
              </div>
            </nav> */}
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jonathan-yin/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/jonathanyin12" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
