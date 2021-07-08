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
                    <p> <strong>Hi, I'm Jonathan.</strong> I'm a student at Yale University double majoring in Computer Science and Statistics & Data Science. In the past, I've worked as a software engineering intern at Beagle Learning and a researcher at the Broad Institute.
                    As an avid programmer, I firmly believe in technology’s ability to empower curious and motivated individuals to tackle real-world problems. From autonomous vehicles to cutting-edge language models, my fascination with programming only deepens by the day, pushing me to continue learning, exploring, and creating.
                    </p>
                    <p>In my free time, I also enjoy 3-D printing trinkets for my desk, playing board games with friends, or relaxing to lofi hip-hop beats. </p>
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
