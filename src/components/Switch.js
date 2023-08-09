import React, { useState } from 'react';
import '../styles/Switch.css';
import About from './About.js';
import Pricing from './Pricing.js';

export default function Switch() {
	const [page, setPage] = useState(false);

	const switchButtons = document.querySelector('.Switch-buttons');

	function switchPage() {
		setPage(!page);
		console.log('switchPage called, page = ', page);
	}

	return (
		<div className='Switch-wrapper'>
			<div className='Switch-Titles-container'>
				<button
					onClick={() => switchPage()}
					className='Switch-buttons'
					id='Switch-button-1'>
					{page ? (
						<h4 className='Switch-button-text'>Read About</h4>
					) : (
						<h4 className='Switch-button-text'>See Pricing</h4>
					)}
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
