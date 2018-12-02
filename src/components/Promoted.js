import React, { Component } from 'react';

class Promoted extends Component {
	render() {
		return(
		<div className="promoted">
			<a href="https://www.producthunt.com/posts/twiverse" target="_blank">
			<p className="promotedtext"><img src={require("../assets/shiny.png")}/>Promoted product</p>
			<div className="imgpro">
			<div className="star">
			<img src={require("../assets/star.svg")}/>
			</div>
			<img className="productimg2" src={this.props.src}/>
			</div>
			<div className="details2">
				<h4>{this.props.name}</h4>
				<h5>{this.props.desc}</h5>
				<div className="actions">
					<div className="up">
						<div className="upvote"></div>
						{this.props.up}
					</div>
				</div>
			</div>
			</a>
		</div>
		);
	}
}

export default Promoted;