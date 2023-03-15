import React from 'react';
import './Navbar.css';

export default function Navbar() {
	return (
		<header className='App-header'>
			<h3 className='Header-text' id='Header-title'>
				Beard Mediation, LLC.
			</h3>
			<div className='Header-text' id='Header-text-links'>
				<a href='https://www.dawsonsodd.com/'>About</a>
				<a href='https://www.dawsonsodd.com/'>Pricing</a>
				<a href='https://www.dawsonsodd.com/'>Credits</a>
			</div>
		</header>
	);
}
