import React from 'react';
import '../styles/HeroImg.css';

export default function HeroImg() {
	return (
		<div className='App-hero-img'>
			<img
				src={require('../images/scalesofjustice_trnsp.png')}
				alt='Statue of Truth holding the Scales of Justice.'
				className='Hero-img-img'
			/>
		</div>
	);
}
