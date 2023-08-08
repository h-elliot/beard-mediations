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
	}

	function showPricing() {
		setPage(true);
	}

	return (
		<div className='Switch-wrapper'>
			<div className='Switch-Titles-container'>
				<button className='Switch-buttons' id='Switch-button-1'>
					ABOUT
				</button>
				<button className='Switch-buttons' id='Switch-button-2'>
					PRICING
				</button>
			</div>
			<div className='Switch-page-container'>
				<div className='Switch-pages' id='Switch-page-1'>
					<p>About about about about</p>
				</div>
				<div className='Switch-pages' id='Switch-page-2'>
					<p>Pricing pricing pricing pricing</p>
				</div>
			</div>
		</div>
	);
}
