import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import $ from 'jquery';

class Launch extends Component {
	onToken = (token) => {
		$(document).ready(function(){
			var exists = false;
			$(".title").html("Completed! Just one last step");
			$(".subtitle").html("Add your contact details below to get in touch with Toni Codina and start developing your own custom launch kit");
			$(".custombutton").hide();
			$(".title2").hide();
			$(".seen").hide();
			$(".features").hide();
			$(".subtitle").after("<div id='hideit'><p class='label'>Name</p><input id='name' type='text' name='name' placeholder='Toni Codina'><p class='label'>Email address</p><input id='email' type='email' name='email' placeholder='email@address.com'><div id='buttonsend'>Submit</div></div>");
			function isEmail(email) {
  				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  				return regex.test(email);
			}
			$( "#buttonsend" ).click(function() {
				if ($("#name").val() != "" && isEmail($("#email").val())) {
					var email = $("#email").val();
					var name = $("#name").val();
					$.ajax({url: "XXX", type: "post", async: false, data: {email:email, name:name}, success: function(result){
							$("#error").remove();
							$(".overlay").hide(120);
							$(".title").html("Ultimate Launch Kit");
							$(".subtitle").html("Launch successfuly on Product Hunt with custom made resources to help make your product more visible & to convert more");
							$('#hideit').remove();
							$(".custombutton").show();
							$(".title2").show();
							$(".seen").show();
							$(".features").show();
					}
				});
				} else {
					if (!exists) {
						exists = true;
						$("#buttonsend").after("<p id='error'>There has been an error. Make sure you added all the information & that it is valid. If the issue persists, send an email to discuss@tcodina.com</p>");
					}
				}
			});
		});
		//alert(`We are in business`);
  }
	render() {
		return(
		<div className="overlay">
			<div className="dark"></div>
			<div className="launch">
			<img className="close" src={require("../assets/close.svg")}/>
			<img src={require("../assets/rocket.png")}/>
			<p className="title">Ultimate Launch Kit</p>
			<p className="subtitle">Launch successfuly on Product Hunt with custom made resources to help make your product more visible & to convert more</p>
			<StripeCheckout name="Ultimate Launch Kit" description="Successfully launch on Product Hunt" token={this.onToken} email="discuss@tcodina.com" panelLabel="Get it for" allowRememberMe = {false} receipt_email={true} amount={55000} currency="USD" stripeKey="XXX">
				<button className="custombutton">
					Get it for $550
					</button>
			</StripeCheckout>
			<div className="features">
				<div className="list">
					<p>GIF animation</p>
					<p>Product media</p>
					<p>Copywriting</p>
					<p>Product optimization</p>
				</div>
				<div className="list">
					<p>Social media outreach</p>
					<p>Monetization</p>
					<p>User retention</p>
					<p>Marketing</p>
				</div>
			</div>
			<p className="title2">Made by Toni Codina, as seen in</p>
			<div className="seen">
			<a href="https://producthunt.com/@tcodinat" target="_blank"><img src={require("../assets/ph.png")}/></a>
			<a href="https://dribbble.com/tcodina" target="_blank"><img src={require("../assets/dribbble.png")}/></a>
			<a href="https://www.indiehackers.com/forum/launched-twiverse-2-days-ago-made-435-9k-views-900-registered-users-63d065bcf9" target="_blank"><img src={require("../assets/indiehackers.png")}/></a>
			<a href="https://news.ycombinator.com/item?id=18521590" target="_blank"><img src={require("../assets/hackernews.png")}/></a>
			<a href="https://diversity30.org/toni-codina/" target="_blank"><img src={require("../assets/diversity30.png")}/></a>
			<a href="https://muz.li/" target="_blank"><img src={require("../assets/muzli.png")}/></a>
			<a href="https://betalist.com/"	target="_blank"><img src={require("../assets/betalist.png")}/></a>												</div>	  
			</div>
		</div>
		);
	}
}

export default Launch;