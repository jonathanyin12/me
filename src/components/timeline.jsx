import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-lab2" />
                      </div>
                      <div className="timeline-label">
                        <h2 ><b>Broad Institute of MIT and Harvard–Regev Lab </b><span>Jan. 2019 - Present</span>
                        <div style={{paddingTop: "10px", fontSize: "15px"}}> <i>Computational Biology Researcher (MIT PRIMES)</i></div></h2>                        
                        <p><a href="https://math.mit.edu/research/highschool/primes/program.php" target="_blank">MIT PRIMES </a>
                          is a research program with admission based on entrance problem sets, personal statements, and letters of recommendation. With guidance from my mentor Dr. Hattie Chung, 
                          I researched computational techniques to develop more accurate chemical representations for applications in drug design, drug discovery, and property prediction. 
                          Combining multi-view representation learning with variational autoencoders, we developed a novel unsupervised deep learning architecture to improve latent molecular representations.
                          I presented at the annual fall and spring PRIMES Conferences, and we recently submitted our work to the 2020 NeurIPS workshop, Learning Meaningful Representations of Life 

                    
                          (<a href="https://drive.google.com/file/d/1mXBgwT7DheUm0r7hF9lkXEVWNxnMwLxJ/view" target="_blank">extended abstract</a>; 
                          <a href="https://docs.google.com/presentation/d/11P4vmcOIl_H6CpaIJJEi8Qd81-DzZ3sP5x3iuAbdRMA/edit?usp=sharing"target="_blank"> slides</a>).</p>
                      </div>
                    </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2 ><b>Beagle Learning </b><span>Jul. 2020 - Aug. 2020</span>
                        <div style={{paddingTop: "10px", fontSize: "15px"}}> <i>Software Engineering Intern</i></div></h2>                        
                        <p>As an intern, I helped develop the front-end platform using React, Redux, JavaScript, HTML, and CSS. We worked in an agile environment with daily product stand-ups, weekly team meetings, and pair programming sessions.</p>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-lightbulb" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>MAHacks V Organizer Team</b><span> Jun. 2019 - Nov. 2019</span>
                        <div style={{paddingTop: "10px", fontSize: "15px"}}> <i>Organizer of Venue and Logistics</i></div></h2>
                        <p><a href="https://mahacks.com/" target="_blank">MAHacks V</a> is a free nonprofit 24-hour high school hackathon that seeks to foster a passion for technology, entrepreneurship, and social good within the local community. 
                        Our team consisted of motivated high school students from across Massachusetts who were passionate about sharing an amazing hackathon experience with other aspiring programmers.
                          As Organizer of Venue and logistics, I was responsible for finding a venue, organizing our budget, raising money through sponsorships, recruiting mentors, and planning workshops. 
                          In total, we raised over $7,500 and had nearly 100 attendees. </p>
                      </div>
                    </div>
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
 