import React from 'react';
import '../styles/HeroImg.css';

export default function HeroImg() {
	return (
		<div className='App-hero-img'>
			{/* <h1 className='Hero-img-text'>Page Title</h1> */}
			<img
				src={require('../images/scalesofjustice_trnsp.png')}
				alt='Statue of Truth holding the Scales of Justice.'
				className='Hero-img-img'
			/>
		</div>
	);
}
