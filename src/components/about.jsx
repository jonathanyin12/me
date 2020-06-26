import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p> <strong>Hi, I'm Jonathan.</strong> I am an incoming freshman at Yale University who's passionate about computer science and artificial intelligence.
                    As an avid programmer, I firmly believe in technology’s ability to <strong>empower</strong> curious and motivated individuals to tackle <strong>real-world problems</strong>.
                    From autonomous vehicles to cutting-edge language models, my fascination with the field only deepens by the day, pushing me to continue <i>learning</i>, <i>exploring</i>, and <i>creating</i>.
                    </p>
                    <p>When I'm not coding, I also enjoy 3-D printing trinkets for my desk, playing board games with friends, or relaxing to lofi hip-hop beats. </p>
                    </div>
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
