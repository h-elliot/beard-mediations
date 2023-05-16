import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
	return (
		<header className='App-header'>
			<h3 className='Header-text' id='Header-title'>
				Beard Mediations, LLC.
			</h3>
			<div className='Header-text' id='Header-text-links'>
				{/* <a href='http://localhost:3000/'>About</a> */}
				<a href='http://localhost:3000/'>Pricing</a>
				{/* <a href='http://localhost:3000/'>Credits</a> */}
			</div>
		</header>
	);
}
