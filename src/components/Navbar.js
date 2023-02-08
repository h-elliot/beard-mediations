import React from 'react';
import './Navbar.css';
// import useSticky from '../hooks/useSticky';

export default function Navbar() {
	// const { sticky, stickyRef } = useSticky();
	return (
		<header className='App-header'>
			<h3 className='Header-text' id='Header-title'>
				Beard Mediation, LLC.
			</h3>
			{/* sticky nav using hook */}
			{/* <nav ref={stickyRef} className={('Header-nav', { sticky })}>
				<a href='../pages/About'>About</a>
				<a href='../pages/Contact'>Contact</a>
			</nav> */}
			{/* nav without useSticky */}
			<nav className='Header-nav'>
				<a href='../pages/About'>About</a>
				<a href='../pages/Contact'>Contact</a>
			</nav>
		</header>
	);
}
