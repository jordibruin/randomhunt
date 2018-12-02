import React, { Component } from 'react';
import './App.css';
import Products from './components/Products.js';
import Launch from './components/Launch.js';
import Footer from './components/Footer.js';
import MetaTags from 'react-meta-tags';
import StripeCheckout from 'react-stripe-checkout';
import $ from 'jquery';


class App extends Component {
	componentDidMount() {
	$(document).ready(function(){
		$(".overlay").hide();
		$(".overlay").addClass("okay");
		//setTimeout(function(){
		//	$(".promoted").addClass("loaded");
		//}, 500);
		function getPic() {
		$.ajax({url: "XXX", async: false, dataType:"json",success: function(result){
			var i = 0;
			$("#prod1 img").removeAttr("src");
			$("#prod2 img").removeAttr("src");
			$("#prod3 img").removeAttr("src");
			$("#prod4 img").removeAttr("src");
			$("#prod5 img").removeAttr("src");
			for (i = 0; i<=4; i++) {
				$("#prod"+(i+1)+" h4").html(result[i*5]);
				$("#prod"+(i+1)+" h5").html(result[(i*5)+2]);
				$("#prod"+(i+1)+" .up").html("<div class='upvote'></div>"+result[(i*5)+3]);
				$("#prod"+(i+1)+" img").attr("src", result[(i*5)+1]);
				$("#prod"+(i+1)+" .welldone").attr("href", result[(i*5)+4]);
			}
    	}
		});
		}
		$("productimg").addClass("skeleton");
		var colors = ["#3734C6", "#27A9F2", "#5D1823", "#571620", "rgba(195, 25, 237, 0.3)", "#8409A3", "rgba(237, 25, 229, 0.49)", "#82107E", "rgba(247, 65, 8, 0.48)", "rgba(242, 112, 39, 0)", "#C6B734", "#F2B927"];
		var solid = ["#197BED", "#ED194C", "#C319ED", "#ED19E5", "#ED6519", "#EDBE19"];
		var opacity = ["0.48", "0", "0.9", "0.9", "0.9", "0.87", "0.3", "0.87", "0.9", "0.9", "0.45", "0"];
		var current = 2;
		var solidcu = 1;
		function skeleton() {
        	$(this).removeClass("skeleton");
		};
		function changeColor() {
			$(".fancy stop:first-child").css({"stop-color": colors[current],"stop-opacity":opacity[current]});
			$(".fancy stop:last-child").css({"stop-color": colors[current],"stop-opacity":opacity[current+1]});
			$(".logo").css("background-color", solid[solidcu]);
			$(".random").css("background-color", solid[solidcu]);
			$(".up").css("background-color", solid[solidcu]);
			$(".custombutton").css("background-color", solid[solidcu]);
			$("#buttonsend").css("background-color", solid[solidcu]);
			current+=2;
			solidcu+=1;
			if (current==colors.length) {
				current = 0;
			}
			if (solidcu==solid.length) {
				solidcu = 0;
			}
		}
		var prev = 0;
		$(window).scroll(function(){
			if ($(window).width() <= 925) {
				var scrollTop = $(window).scrollTop();
				$(".promoted").toggleClass('hidden', scrollTop > prev);
  				prev = scrollTop;
			}
		});
		$( "#wippy" ).click(function() {
			$(".overlay").show(120);
		});
		$(".close").click(function() {
			$(".overlay").hide(120);
		});
		$( ".random" ).click(function() {
			getPic();
			$(".logo").addClass("spin");
			changeColor();
			setTimeout(function(){
				$(".logo").removeClass("spin");
			}, 500);
		});
		$(window).keypress(function (e) {
			if ((e.key === ' ' || e.key === 'Spacebar') && $(".overlay").is(":hidden")){
	  			e.preventDefault();
				getPic();
				$(".help").addClass("spaceone");
				$(".random").addClass("spacetwo");
				$(".random img").addClass("spacethree");
				$(".random span").addClass("spacethree");
				$(".logo").addClass("spin");
				changeColor();
				setTimeout(function(){
					$(".help").removeClass("spaceone");
					$(".random").removeClass("spacetwo");
					$(".random img").removeClass("spacethree");
					$(".random span").removeClass("spacethree");
				}, 300);
				setTimeout(function(){
					$(".logo").removeClass("spin");
				}, 500);
			}
  		});
	});
	}	
  render() {
    return (
      <div className="App">
		 <MetaTags>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link rel="shortcut icon" href="../public/images/favicon.ico"/> 
		<title>Random Hunt</title>
		<meta name="description" content="Discover random products from Product Hunt at Random Hunt, on the press of a button. An open source project by Toni Codina." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="../public/images/meta.png" />
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://exposure.cards/randomhunt"/>
<meta property="og:title" content="Random Hunt"/>
<meta property="og:description" content="Discover random products from Product Hunt at Random Hunt, on the press of a button. An open source project by Toni Codina."/>
<meta property="og:image" content="../public/images/meta.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://exposure.cards/randomhunt"/>
<meta property="twitter:title" content="Random Hunt"/>
<meta property="twitter:description" content="Discover random products from Product Hunt at Random Hunt, on the press of a button. An open source project by Toni Codina."/>
<meta property="twitter:image" content="../public/images/meta.png"/>
		</MetaTags>
		<Launch/>
		<div className="ad">
			<img className="logoad" src={require('./assets/exposure.png')}/>
			<p><a href="https://exposure.cards/growth" target="_blank">Launch your product for $49 at exposure.cards <img className="rocket" src={require('./assets/rocket.png')} /><span className="more"> to get more traffic and impressions <img className="rocket" src={require('./assets/graph.png')}/></span></a></p>
		</div>
	  <div className="wrap">
		<div className="background">
		<svg className="fancy" width="1671" height="514" viewBox="0 0 1671 514" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M202.183 258.336L26.0337 119.239C20.3819 114.776 15.4908 109.426 11.5505 103.398C-17.8567 58.4112 15.3431 -1.09371 69.071 0.302756L1469.87 36.7114C1623.97 40.7168 1718.99 206.642 1644.45 341.58L1612.38 399.644C1568.29 479.465 1463.4 501.16 1391.26 445.378C1346.94 411.102 1287.1 404.654 1236.49 428.7L1118.79 484.621C1014.17 534.325 890.286 519.365 800.507 446.186L669.438 339.35C603.579 285.669 514.631 269.894 434.329 297.655C355.303 324.974 267.805 310.154 202.183 258.336Z" fill="url(#blue)"/>
<defs>
<linearGradient id="blue" x1="1205.76" y1="423.318" x2="492.55" y2="-650.848" gradientUnits="userSpaceOnUse">
<stop stop-color="#3734C6" stop-opacity="0.48"/>
<stop offset="1" stop-color="#27A9F2" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

	<svg className="fancy2" width="1671" height="515" viewBox="0 0 1671 515" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1468.82 256.164L1644.97 395.261C1650.62 399.724 1655.51 405.074 1659.45 411.102C1688.86 456.089 1655.66 515.594 1601.93 514.197L201.133 477.789C47.0287 473.783 -47.99 307.858 26.5464 172.92L58.6193 114.856C102.71 35.0349 207.601 13.3405 279.738 69.122C324.065 103.398 383.896 109.846 434.508 85.8005L552.211 29.8795C656.829 -19.8246 780.714 -4.86452 870.493 68.3145L1001.56 175.15C1067.42 228.831 1156.37 244.606 1236.67 216.845C1315.7 189.526 1403.2 204.346 1468.82 256.164Z" fill="url(#blue)"/>
<defs>
<linearGradient id="blue" x1="465.238" y1="91.1824" x2="1178.45" y2="1165.35" gradientUnits="userSpaceOnUse">
<stop stop-color="#3466C6" stop-opacity="0.48"/>
<stop offset="1" stop-color="#2784F2" stop-opacity="0"/>
</linearGradient>
<linearGradient id="red" x1="1205.76" y1="423.318" x2="492.55" y2="-650.848" gradientUnits="userSpaceOnUse">
<stop stop-color="#5D1823" stop-opacity="0.9"/>
<stop offset="1" stop-color="#571620" stop-opacity="0.9"/>
</linearGradient>
</defs>
</svg>

	  </div>
	  <div className="header">
		<div className="logo">R</div>
       <h1>RandomHunt</h1>
   <h2>Find random products from Product Hunt on the press of a button!{window.name1}</h2>
		<div className="random">
		<img src={require('./assets/shuffle.svg')}/>
		<span>
		Shuffle
		</span>
		</div>
		<p className="help">
		Or press the spacebar
		<img src={require('./assets/gift.png')}/>
		</p>
	  </div>
	  <img className="promoted" id="wippy" src={require("./assets/launch.png")}/>
	  <Products/>
	  <Footer/>
	  </div>
      </div>
    );
  }
}

export default App;
