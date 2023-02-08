import React from 'react';
import './Navbar.css';
import useSticky from '../hooks/useSticky';

export default function Navbar() {
	const { sticky, stickyRef } = useSticky();
	return (
		<header className='App-header'>
			<h3 className='Header-text' id='Header-title'>
				Beard Mediation, LLC.
			</h3>
			<ul className='Header-nav'>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}
