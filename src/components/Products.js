import React, { Component } from 'react';
import Product from './Product.js';

class Products extends Component {
	render() {
    return (
      <div className="products">
		<div className="topone">
			<Product id="prod1" name="Product Hunt Previewer" url="https://www.producthunt.com/posts/product-hunt-previewer" desc="See how your product will look on Product Hunt 💄" up="658" src="https://ph-files.imgix.net/6e7cea8b-4786-4d1c-b214-f2ec7db66ec6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=200&fit=crop"/>
			<Product id="prod2" name="Twiverse" url="https://www.producthunt.com/posts/twiverse" desc="Discover diverse Twitter users & get more followers 🌈" up="540"  src="https://ph-files.imgix.net/6706952c-ef3f-4417-8b50-78f6550533f3?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=200&fit=crop"/>
			<Product id="prod3" name="Exposure Cards" url="https://www.producthunt.com/posts/exposure-cards" desc="Get free publicity & discover underrated content ⚡️" up="483" src="https://ph-files.imgix.net/38c63558-ce1b-4e63-b443-9e93d2844460?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=200&fit=crop"/>
		<Product id="prod4" name="Make & Shine" url="https://www.producthunt.com/posts/make-shine" desc="Grow an audience and get press coverage as an indie maker" up="517" src="https://ph-files.imgix.net/67d7b52a-414c-4107-90ba-28932a872dbd?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=200&fit=crop"/>
		<Product id="prod5" name="Women Make Podcast" url="https://www.producthunt.com/posts/women-make-podcast" desc="The podcast that puts women at the forefront 🎙️👩‍💻" up="431" src="https://ph-files.imgix.net/9c771d49-31e0-4182-885d-5631b407f7c4?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=200&h=200&fit=crop"/>
	</div>
	</div>
    );
  }
}

export default Products;