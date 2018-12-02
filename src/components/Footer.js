import React, { Component } from 'react';
var GitHubButton = require('react-github-button');
var Follow = require('react-twitter-widgets').Follow;

class Footer extends Component {
	render() {
		return(
		<div className="footer">
			<div className="me">
				<a href="https://tcodina.com" target="_blank"><img className="mypic" src={require("../assets/picture.png")}/><span className="well">Made with <img src={require("../assets/heart.png")}/> by <span>Toni Codina</span></span></a>
				<div className="follow">
				<Follow username="tcodinat"/>
				</div>
				<GitHubButton type="stargazers" size="default" namespace="tcodina" repo="todo-app" />
			</div>

		</div>
		);
	}
}

export default Footer;