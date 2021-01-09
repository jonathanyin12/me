import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div>
        <section className="colorlib-education" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="fancy-collapse-panel">
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">B.S. in Computer Science and Statistics & Data Science
                          <br/>
                          <i style={{fontSize: '11px'}}>Yale University '24</i>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body">
                          <p> <b style={{fontWeight:"700", fontSize: '15px'}}>Academics:</b>                        
                            <div className="row" style={{paddingRight: "40px"}}>
                                <ul style={{listStyleType:"circle;"}}>
                                <li> Double major in Computer Science and Statistics & Data Science, GPA: 4.00/4.00</li>
                                <li> Relevant coursework: Artificial Intelligence (CPSC 470), Systems Programming and Computer Organization (CPSC 323), Data Structures and Programming Techniques (CPSC 223), Vector Calculus and Linear Algebra (MATH 230/231)</li>

                                </ul>
                            </div>
                          </p>
                          <p> <b style={{fontWeight:"700", fontSize: '15px'}}>Activities:</b>                        
                          <div className="row" style={{paddingRight: "40px"}}>
                              <ul>
                                   <li style={{marginBottom: "0.5em"}}> YHack Logistics Team</li>
                                <li style={{marginBottom: "0.5em"}}> Yale Machine Learning Advanced Study Group</li>
                                <li style={{marginBottom: "0.5em"}}> Yale Computer Society Development Team</li>
                                {/* <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>YHack Logistics Team</i></li>
                                <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>Yale Machine Learning Advanced Study Group</i></li>
                                <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>Yale Computer Society Development Team</i></li> */}
                              </ul>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">High School Diploma
                          <br/>
                          <i style={{fontSize: '11px'}}>Acton-Boxborough Regional High School '20</i>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body">
                          <p> <b style={{fontWeight:"700", fontSize: '15px'}}>Academics:</b>                        
                          <div className="row" style={{paddingRight: "40px"}}>
                              <ul style={{listStyleType:"circle;"}}>
                              <li> Salutatorian; Unweighted GPA: 3.99/4.00; Weighted GPA: 4.78/5.00 </li>
                              <li> Senior Year Courseload: Calculus BC, Physics C, English Literature & Composition, Psychology, Spanish Language</li>
                              </ul>
                            </div>
                          </p>
                          <p> <b style={{fontWeight:"700", fontSize: '15px'}}>Activities:</b>                        
                          <div className="row" style={{paddingRight: "40px"}}>
                              <ul >
                                <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>Science Olympiad Team (Sept 2016 - Jun 2020)</i> – As captain, I was responsible for teaching new members, writing tests for team selection, choosing the teams, and planning team events. 
                                  We've won the MIT, Harvard, Brown, and Yale invitationals, and also placed 9th in the nation two years in a row.</li>
                                <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>MAHacks V (Jun. 2019 - Nov. 2019)</i> –As Organizer of Venue and logistics, I was responsible for finding a venue, organizing our budget, raising money through sponsorships, recruiting mentors, and planning workshops. 
                          In total, we raised over $7,500 and reached nearly 100 attendees. </li>

                                <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>Academic Support Center (Sept 2018 - Jan 2020)</i> – As a peer tutor, I assisted students with a variety of academic subjects spanning from geometry to biology. On a typical day, I work with them through challenging assignments, help unpack confusing concepts, or review material before an exam. </li>
                                
                                <li style={{marginBottom: "1em"}}> <i style={{fontWeight:"400"}}>Middle School Math Club (Sept 2015 - Jan 2019)</i> – As a teaching assistant, I introduced new concepts and worked directly with students to help them grapple with difficult problems. When presenting a solution, I offered multiple different approaches such that students can understand intuitively. </li>
                              </ul>
                            </div>
                          </p>
                          
                          {/* <div className="row" style={{paddingRight: "40px"}}>
                            
                            <ul style={{listStyleType:"circle;"}}>
                              <li> Unweighted GPA: 4.0/4.0; Weighted GPA: 4.8/5.0; Salutatorian</li>
                              <li> Senior Year Courseload: Calculus BC, Physics C, English Literature & Composition, Psychology, Spanish Language</li>
                            </ul>
                            <div> Activities:</div>
                               Science Olympiad Team Captain, Academic Support Center Peer Tutor, Middle School Math Club Teaching Assistant 
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      );
    }
  };