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
			<ul className='Profile-contact'>
				<li>555 555 5555</li>
				<li>claybeard123@gmail.com</li>
				<li>1122 Lawfirm Lane, Corsicana, TX 75109</li>
			</ul>
		</div>
	);
}
