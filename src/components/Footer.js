import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
	return (
		<div>
			<footer className='Footer-all'>
				<ul className='Footer-text'>
					<li className='Footer-text-items' id='Credit-1'>
						Code by <a href='mailto:hunter.e.canavan@gmail.com'>Rook Elliot</a>
					</li>
					<li className='Footer-text-items' id='Credit-2'>
						Copyright 2023
					</li>
					<li className='Footer-text-items' id='Credit-3'>
						Photo by{' '}
						<a href='https://unsplash.com/@tingeyinjurylawfirm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
							TILF
						</a>{' '}
						on{' '}
						<a href='https://unsplash.com/photos/DZpc4UY8ZtY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
							Unsplash
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}
