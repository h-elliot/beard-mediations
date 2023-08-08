import React, { useState } from 'react';
// import '../styles/TabComponent.css';
import About from './About.js';
import Pricing from './Pricing.js';

export default function Switch() {
	const [page, setPage] = useState(false);

	function toggleSwitch() {
		setPage(!page);
	}

	function showAbout() {
		setPage(false);
		console.log('showAbout called');
	}

	function showPricing() {
		setPage(true);
		console.log('showPricing called');
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
				<article className='Switch-page'>{page ? <About /> : null}</article>
				{/* 
				<div className='Switch-pages' id='Switch-page-1'>
					<p>About about about about</p>
				</div>
				<div className='Switch-pages' id='Switch-page-2'>
					<p>Pricing pricing pricing pricing</p>
				</div> */}
			</div>
		</div>
	);
}
