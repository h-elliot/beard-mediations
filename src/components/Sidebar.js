import React from 'react';
import './Sidebar.css';

export default function Navbar() {
	return (
		<aside className='Page-sidebar'>
			<img
				className='Profile-image'
				src={require('../images/Clay-Beard-1.jpg')}
				alt='Clay Beard Profile'
			/>
		</aside>
	);
}
