import React from 'react';
import '../styles/Card.css';

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
				<h5 className='Card-subtitle'>
					Give me a call or email me to schedule your mediation.{' '}
				</h5>
				<ul className='Profile-contact'>
					<li id='Contact-phone'>(903) 654-8380</li>
					<li id='Contact-email'>
						<a href='cbeard64@beardmediationsllc.com'>
							cbeard64@beardmediationsllc.com
						</a>
					</li>
					<li>504 W. 2nd Avenue, Corsicana, TX 75110</li>
				</ul>
			</div>
		</div>
	);
}
