import React, { Component } from 'react'
import GitHubButton from 'react-github-btn'

export default class Projects extends Component {
  render() {
    return (
      <div>
		<section className="colorlib-work" data-section="projects">
			
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta">My Work</span>
						<h2 className="colorlib-heading animate-box">Past Projects</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
						<div className="project" style={{backgroundImage: 'url(images/Food.AI_demo.gif)'}}>
							<div className="desc color-6"> 
								<div className="con">
									<h3><a href="https://github.com/jonathanyin12/Food.AI" target="_blank">Food.AI</a></h3>
									<span>Easy calorie tracking with real-time object detection on Android.</span>
									<p className="icon">
										<span><a href="https://github.com/jonathanyin12/Food.AI" target="_blank"><i className="icon-link2" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
						<div className="project" style={{backgroundImage: 'url(images/PokemonGAN.gif)'}}>
							<div className="desc color-5">
								<div className="con">
									<h3><a href="https://github.com/jonathanyin12/PokemonGAN" target="_blank">PokémonGAN</a></h3>
									<span>A generative adversarial network that synthesizes novel Pokémon.</span>
									<p className="icon">
										<span><a href="https://github.com/jonathanyin12/PokemonGAN" target="_blank"><i className="icon-link2" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
						<div className="project" style={{backgroundImage: 'url(images/Flappy.ML_demo.gif)'}}>
							<div className="desc color-4">
								<div className="con">
									<h3><a href="https://github.com/jonathanyin12/Flappy.ML" target="_blank">Flappy.ML</a></h3>
									<span>Using neural networks and a genetic algorithm to beat Flappy Bird.</span>
									<p className="icon">
										<span><a href="https://github.com/jonathanyin12/Flappy.ML" target="_blank"><i className="icon-link2" /></a></span>

									</p>
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
