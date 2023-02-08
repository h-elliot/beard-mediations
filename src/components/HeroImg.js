import React from 'react';
import './HeroImg.css';

export default function HeroImg() {
	return (
		<div className='App-hero-img'>
			<h1 className='Hero-img-text'>Page Title</h1>
			<img
				src={require('../images/robson-hatsukami-morgan-large.jpg')}
				alt='Landscape with a river, mountains, and stars.'
			/>
		</div>
	);
}
