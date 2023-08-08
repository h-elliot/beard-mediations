import React, { useState } from 'react';
import '../styles/Switch.css';
import About from './About.js';
import Pricing from './Pricing.js';

export default function Switch() {
	const [page, setPage] = useState(false);

	function showAbout() {
		setPage(false);
		console.log('showAbout called, page = ', page);
	}

	function showPricing() {
		setPage(true);

		console.log('showPricing called, page = ', page);
	}

	return (
		<div className='Switch-wrapper'>
			<div className='Switch-Titles-container'>
				<button
					onClick={() => showAbout()}
					className='Switch-buttons'
					id='Switch-button-1'>
					ABOUT
				</button>
				<button
					onClick={() => showPricing()}
					className='Switch-buttons'
					id='Switch-button-2'>
					PRICING
				</button>
			</div>
			<div className='Switch-page-container'>
				<article className='Switch-page'>
					{!page ? <About /> : <Pricing />}
				</article>
			</div>
		</div>
	);
}
