import React, { Component } from 'react'
import Typed from 'react-typed';
import ParticlesContainer from "./ParticlesContainer.jsx";

export default class Introduction extends Component {
  render() {
    return (
      <div style={{marginBottom: "5em"}}>
        <section  style={{height: '100vh', position: 'relative'}}  data-section="introduction">
          <ParticlesContainer/>
          <span className="animation col-md-offset-3" style={{position: "relative", top: "40%"}}>
              <Typed 
                  style={{color: "#000", zIndex:1001}}
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
                    left: "25%",
                    fontWeight:600,
                    position: "relative",
                  }}
                    id="cv"
                    className="btn hide btn-primary btn-learn" 
                    href="files/Jonathan_Yin_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer">View CV <i className="icon-download4" /></a>
            </span>
        </section>
      </div>
    )
  }
}
