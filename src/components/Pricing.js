import React from 'react';
import '../styles/Pricing.css';

export default function Pricing() {
	return (
		<main className='Pricing-all'>
			<div className='Pricing-wrapper'>
				<h3 className='Pricing-title' id='Pricing-title-1'>
					Mediation Pricing
				</h3>
				<p className='Pricing-text' id='Pricing-text-1'>
					{' '}
					<strong>Full day mediation: </strong>
					(9 AM to 5 PM) $1250 per party <br />
					<strong>Half day mediation: </strong>
					(9 AM to 1 PM) $750 per party
					<br />
					Specialized multi-day mediations for complex cases can be arranged at
					either the home office or location of your choice.
				</p>
				<h3 className='Pricing-title' id='Pricing-title-2'>
					Travel Fees
				</h3>
				<p className='Pricing-text' id='Pricing-text-2'>
					{' '}
					Typically, mediations will be conducted at my Corsicana office
					(located at 504 West 2nd Ave., Corsicana,TX.) I will travel if
					preferred and/or necessary, with travel rates of $150/hour applicable.{' '}
					<br />
					<br />
					No travel charge within a 75 mile radius of Corsicana. <br />
					<br />
					$300 per part travel charge plus any actual out-of-pocket costs
					(lodging, plane tickets, etc.) outside 75 mile radius of Corsicana.
				</p>
			</div>
		</main>
	);
}
