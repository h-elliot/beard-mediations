import React from 'react';
import '../styles/PageContent.css';
import Card from './Card.js';

export default function PageContent() {
	return (
		<main className='Page-content-all'>
			<Card />
			<article className='Page-content-article'>
				<h3>
					Whether you represent the condemnor or the landowner, I look forward
					for the opportunity to help you reach a successful outcome in your
					case.
				</h3>
				<p className='Page-content-text'>
					I have been a civil trial attorney specializing in eminent domain
					litigation for over 30 years, joining the Dawson & Sodd law firm right
					out of Baylor Law School in 1989. Litigation has always been my focus.
					I participated as part of the acclaimed Baylor Mock Trial Competition
					Team and was honored to receive the Matt Dawson Award for Outstanding
					Trial Advocacy at Baylor. I “hit the ground running” trying eminent
					domain cases, and have been a shareholder at Dawson & Sodd for most of
					my legal career. I firmly believe my extensive trial and mediation
					experience handling hundreds of eminent domain cases over the past
					three decades uniquely qualifies me as a mediator specializing in this
					field. Only an eminent domain lawyer can understand the particular
					legal issues involved, the nuances of appraisals, and the motivations
					involved in a condemnation dispute. My philosophy as a trial lawyer
					has always been that understanding both sides of a case is absolutely
					essential to a successful outcome – and it is that same philosophy I
					will bring to the table as a mediator.
				</p>
			</article>
		</main>
	);
}
