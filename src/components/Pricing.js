import React from 'react';
import '../styles/Pricing.css';
import Card from './Card.js';

export default function Pricing() {
	return (
		<main className='Pricing-all'>
			<article className='Pricing-article'>
				<h3 className='Pricing-title'>Price List:</h3>
				<ul className='Pricing-text'>
					{' '}
					{/* long */}
					<li>Full day mediation: (9 AM to 5 PM) $1250 per party</li>
					<li>Half day mediation: (9 AM to 1 PM) $750 per party</li>
					<li>
						Typically, mediations will be conducted at my Corsicana office
						(located at 504 West 2nd Ave., Corsicana,TX.)
					</li>
					<li>
						I will travel if preferred and/or necessary, with travel rates of
						$150/hour applicable. No travel charge within a 75 mile radius of
						Corsicana.
					</li>
					<li>
						$300 per part travel charge plus any actual out-of-pocket costs
						(lodging, plane tickets, etc.) outside 75 mile radius of Corsicana.
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
