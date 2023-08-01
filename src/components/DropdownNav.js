import React, { useState } from 'react';
import '../styles/DropdownNav.css';

export default function DropdownNav() {
	// Dropdown navigation
	//sets default state to closed
	// const [menuOpen, setMenuOpen] = React.useState(false);

	// const handleMenuOpen = () => {
	// 	// set menuOpen to its opposite state
	// 	setMenuOpen(!menuOpen);
	// 	console.log('Menu Button clicked.');
	// };

	return (
		<div className='dropdown'>
			{/* click the menu button and activate the handleMenuOpen function */}
			{/* <button onClick={handleMenuOpen}>Dropdown</button> */}
			{/* if the menu is open... */}
			{/* {menuOpen ? (
				<ul className='menu'>
					<li className='menu-item' id='menu-item-1'>
						<button>Pricing</button>
					</li>
					<li className='menu-item' id='menu-item-2'>
						<button>Credits</button>
					</li>
				</ul>
			) : // otherwise, show nothing
			null} */}
			{/* styles inline? */}
			<style jsx>
				{`
				.dropdown{
					width: 100%;
					height 50px;
				}
			
				.dropdown ul{
					display: flex;
					flex-wrap: wrap;
					float: right;
					margin: 20 0px;
					padding: 0 25px;
				}

				.dropdown ul li{
					list-style-type: none;
					padding-right: 10px;
			`}
			</style>
		</div>
	);
}
