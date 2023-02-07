import React from 'react';
import App from '../App.js';

export default function HeroImg() {
	return (
		<div className='App-hero-img'>
			<img
				src={require('../images/robson-hatsukami-morgan-large.jpg')}
				alt='Landscape with a river, mountains, and stars.'
			/>
		</div>
	);
}
