import React from 'react';
// import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
	// const [open, setOpen] = React.useState(false);

	// const handleOpen = () => {
	// 	setOpen(!open);

	return (
		<header className='App-header'>
			<h3 className='Header-text' id='Header-title'>
				Beard Mediations, LLC.
			</h3>
			<div className='Header-text' id='Header-text-links'>
				{/* <MenuButton /> */}
				<h4>≡</h4>
			</div>
		</header>
	);
}
// }
