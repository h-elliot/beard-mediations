import React from 'react';
import HeroImg from './HeroImg.js';

export default function About() {
	return (
		<section>
			<HeroImg />
			<article className='App-main-text-section'>
				<p className='App-main-text-content'></p>
			</article>
		</section>
	);
}
