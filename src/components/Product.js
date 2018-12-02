import React, { Component } from 'react';
import Tilt from 'react-tilt';

class Product extends Component {
	render() {
		return(
		<div id={this.props.id} className="product">
			<a className="welldone" href={this.props.url} target="_blank">
			<Tilt className="wips" options={{ scale: 1.1, glare: true, maxGlare: 0.2}}>
				<img className="skeleton productimg" onload="skeleton()" src={this.props.src}/>
			</Tilt><div className="details">
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

export default Product;