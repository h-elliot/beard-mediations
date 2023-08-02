import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/TabComponent.css';
import About from './About.js';
import Pricing from './Pricing.js';

export default function TabComponent() {
	return (
		<Tabs className='Tab-Container'>
			<TabList className='Tab-Titles-container'>
				<Tab className='Tab-Titles' id='Tab-1'>
					About
				</Tab>
				<Tab className='Tab-Titles' id='Tab-2'>
					Pricing
				</Tab>
			</TabList>

			<TabPanel className='Tab-Content'>
				<About />
			</TabPanel>
			<TabPanel className='Tab-Content'>
				<Pricing />
			</TabPanel>
		</Tabs>
	);
}
