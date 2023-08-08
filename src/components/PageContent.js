import React from 'react';
import '../styles/PageContent.css';
import Card from './Card.js';
import TabComponent from './TabComponent.js';
import Switch from './Switch.js';

export default function PageContent() {
	return (
		<div className='Page-content-all'>
			<Card />
			{/* <TabComponent /> */}
			<Switch />
		</div>
	);
}
