import React from 'react';
import './Navbar.css';

export default function Navbar() {
	return (
		<header className='App-header'>
			<h3 className='Header-text' id='Header-title'>
				Beard Mediation, LLC.
			</h3>

			<nav className='Header-nav'>
				<a href='../pages/About'>About</a>
				<a href='../pages/Contact'>Contact</a>
			</nav>
		</header>
	);
}
