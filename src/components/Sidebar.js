import React from 'react';

export default function Navbar() {
	return (
		<aside className='Page-sidebar'>
			<img
				className='Profile-image'
				src={require('../images/Clay-Beard-1.jpg')}
				alt='Clay Beard Profile'
			/>
			<ul className='Sidebar-menu'>
				<li className='Sidebar-menu-item'>One</li>
				<li className='Sidebar-menu-item'>Two</li>
				<li className='Sidebar-menu-item'>Three</li>
				<li className='Sidebar-menu-item'>Four</li>
			</ul>
		</aside>
	);
}
