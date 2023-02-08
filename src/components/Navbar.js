import React from 'react';
import './Navbar.css';

export default function Navbar() {
	return (
		<header className='App-header'>
			<h3 className='App-header-text' id='App-site-title'>
				Beard Mediation, LLC.
			</h3>
			<ul className='App-header-nav'>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}
