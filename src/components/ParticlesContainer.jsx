import React, {Component} from 'react';
import Particles from 'react-particles-js';

class ParticlesContainer extends Component {
render() {
    return ( 
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // border: '1px solid red',
            background: 'linear-gradient(to left, #0f4d92 , #f8f8f8)'
            }}
        >
            <Particles 
                style={{
                    position: "absolute",
                    // border: '1px solid red',
                    }}
                params={{
                    particles: {
                        color: {
                            value: "#000000"                            
                        },
                        
                        line_linked: {
                            color:  "#000000",
                            distance: linklength(),
                        },
                        number: {
                            value: numParticles(),
                            density: {
                                enable: true,
                                value_area: 1500
                            }
                        },
                        size: {
                            value: 3
                        },
                        move: {
                            speed: speed(),
                            attract: {
                                enable: true
                            }
                            
                        },
                    },
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                              },
                            onHover: {
                                enable: false,
                                parallax: {
                                    enable:false,
                                    force:100,
                                    smooth:50,
                                },
                                resize: true
                            }
                        },
                        modes:{
                            push: {
                                quantity: 2
                            }
                        }
                    },
                    detectRetina: true
                }} 
            />
            {/* <h1>{linklength()}</h1>
            <h1>{speed()}</h1>
            <h1>{numParticles()}</h1> */}
        </div>
        )
    }
}


export default ParticlesContainer;

function linklength() {
    return Math.pow(window.devicePixelRatio, 0.6) * 175;
}
function speed() {
    return (1/Math.pow(window.devicePixelRatio, 0.3))*1.5;
}

function numParticles() {
    return 1/Math.pow(window.devicePixelRatio, 0.3)*60;
}