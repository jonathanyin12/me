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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-lab2" />
                      </div>
                      <div className="timeline-label">
                        <h2 ><b>Broad Institute of MIT and Harvard–Aviv Regev Group </b><span>Jan. 2019 - Jun. 2020</span>
                        <div style={{paddingTop: "10px", fontSize: "15px"}}> <i>Computational Biology Researcher (MIT PRIMES)</i></div></h2>                        
                        <p><a href="https://math.mit.edu/research/highschool/primes/program.php" target="_blank">MIT PRIMES </a>
                          is a year-long research program with admission based on entrance problem sets, personal statements, and letters of recommendation. The focus of my project was to better understand receptor-ligand interactions for improved drug targeting/design.
                          Under the guidance of my mentor Dr. Hattie Chung, I read various research papers, evaluated existing methods, and developed novel deep leaning models to predict GPCR activity based on the chemical structure of ligands. I also presented my work at the annual PRIMES Conference 
                          (<a href="https://drive.google.com/file/d/10g525YIv0WBGsyOvCNNLQtYSxRqYeZBN/view?usp=sharing" target="_blank">abstract</a>; 
                          <a href="https://docs.google.com/presentation/d/11P4vmcOIl_H6CpaIJJEi8Qd81-DzZ3sP5x3iuAbdRMA/edit?usp=sharing"target="_blank"> slides</a>).</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-lightbulb" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>MAHacks V Organizer Team</b><span> Jun. 2019 - Nov. 2019</span>
                        <div style={{paddingTop: "10px", fontSize: "15px"}}> <i>Organizer of Venue and Logistics</i></div></h2>
                        <p><a href="https://mahacks.com/" target="_blank">MAHacks V</a> is a free nonprofit 24-hour high school hackathon that seeks to foster a passion for technology, entrepreneurship, and social good within the local community. 
                        Our team consists of motivated high school students from across Massachusetts who are passionate about sharing an amazing hackathon experience with other aspiring programmers.
                          As Organizer of Venue and logistics, I was responsible for finding a venue, organizing our budget, raising money through sponsorships, recruiting mentors, and planning workshops. 
                          In total, we raised over $7,500 and had nearly 100 attendees. </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
 