import React, { Component } from 'react'
import Typed from 'react-typed';
import ParticlesContainer from "./ParticlesContainer.jsx";

export default class Introduction extends Component {
  render() {
    return (
      <div style={{marginBottom: "5em"}}>
        <section  style={{height: '100vh', position: 'relative'}}  data-section="introduction">
          <ParticlesContainer/>
          <span className="animation" style={{position: "relative"}}>
            <Typed 
                style={{color: "#000", }}
                typeSpeed={50}
                backSpeed={50}
                strings={[
                  "Hi,",
                  "My name is Jonathan.",
                  "I'm a coder...",
                  "I'm a thinker...",
                  "I'm a problem solver...",
                  "I'm Jonathan."
                ]}
                backDelay={1000}
                showCursor
                cursorChar="|"
              />
            <br/>
              <a style={{
                  marginTop: "20px",
                  fontWeight:600,
                  position: "relative",
                }}
                  id="cv"
                  className="btn btn-primary btn-learn animation2 hide " 
                  href="files/Jonathan_Yin_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer">View Resumé <i className="icon-download4" /></a>
          </span>
        </section>
      </div>
    )
  }
}
