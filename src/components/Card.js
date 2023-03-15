import React from 'react';
import './Card.css';

export default function Navbar() {
	return (
		<div className='Page-card'>
			<img
				className='Profile-image'
				src={require('../images/Clay-Beard-1.jpg')}
				alt='Clay Beard Profile'
			/>
			<div className='Card-text'>
				<h2 className='Card-title'>Hello, my name is Clay Beard.</h2>
				<ul className='Profile-contact'>
					<li id='Contact-phone'>(903) 654-8380</li>
					<li id='Contact-email'>cbeard64@beardmediationsllc.com</li>
					<li>1122 Lawfirm Lane, Corsicana, TX 75109</li>
				</ul>
			</div>
		</div>
	);
}
