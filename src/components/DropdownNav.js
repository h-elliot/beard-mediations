import React from 'react';
import '../styles/DropdownNav.css';
import (state, useState) from React;

export default function DropdownNav() {
	// Dropdown navigation
	  const [open, setOpen] = React.useState(false);

		const handleOpen = () => {
			setOpen(!open);
		};

		return (
			<div className='dropdown'>
				<button onClick={handleOpen}>Dropdown</button>
				{open ? (
					<ul className='menu'>
						<li className='menu-item'>
							<button>Menu 1</button>
						</li>
						<li className='menu-item'>
							<button>Menu 2</button>
						</li>
					</ul>
				) : null}
				{open ? <div>Is Open</div> : <div>Is Closed</div>}
			</div>
		);
}
