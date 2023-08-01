import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);

		return (
			<div>
				<header className='App-header'>
					<h3 className='Header-text' id='Header-title'>
						Beard Mediations, LLC.
					</h3>
					<div className='Header-text' id='Header-text-links'>
						<h4 onClick={handleOpen}>≡</h4>
					</div>
				</header>

				<style jsx>{`
					// styles inline
				`}</style>
			</div>
		);
	};
}
