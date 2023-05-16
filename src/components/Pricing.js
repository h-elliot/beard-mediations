import React from 'react';
import './PageContent.css';
import Card from './Card.js';

export default function PageContent() {
	return (
		<main className='Pricing-all'>
			<Card />
			<article className='Pricing-article'>
				<h3>Price list:</h3>
				<ul className='Pricing-text'>
					<li>Full day mediation: $1250 per party</li>
					<li>Half day mediation: $750 per party</li>
					<li>
						Mediations will be conducted at my offices located at 504 West 2nd
						Ave., Corsicana,TX.
					</li>
					<li>
						Will travel to your specified location with travel rates of
						$150/hour applicable.
					</li>
					<li>
						Specialized multi-day mediations for complex cases can be arranged
						at either the home office or location of your choice.
					</li>
				</ul>
			</article>
		</main>
	);
}
