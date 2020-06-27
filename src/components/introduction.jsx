import React, { Component } from 'react'
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import ParticlesContainer from "./ParticlesContainer.jsx";

export default class Introduction extends Component {
  render() {
    return (
      <div style={{marginBottom: "5em"}}>
        <section  style={{height: '100vh', position: 'relative'}}  data-section="introduction">
          <ParticlesContainer/>
          <div className="animation" style={{position: "relative", top: "40%"}}>
            <div className="col-md-offset-3 col-md-pull-3 slider-text">
              <div className="slider-text-inner">
                <div className="desc">
                  <Typed 
                      style={{color: "#000", zIndex:1001}}
                      typeSpeed={50}
                      backSpeed={40}
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
                  <div className="hide" id="cv">
                    <a style={{
                        marginTop: "20px",
                        fontWeight:600,
                        position: "relative",
                        zIndex: 1001
                      }}
                      className="btn btn-primary btn-learn" href="files/Jonathan_Yin_CV.pdf" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
