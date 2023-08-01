import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePageContent from './components/HomePageContent';
import Pricing from './components/Pricing';
import HeroImg from './components/HeroImg';
import useSticky from './hooks/useSticky';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
	const { sticky, stickyRef } = useSticky();
	const { homePage, setHomePage } = useState(false);

	function changeHomePage() {
		setHomePage(!homePage);
	}

	return (
		<div className='App'>
			<Navbar />
			<div
				style={{
					height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
				}}
			/>
			<main className='Main-container'>
				<div className='Hero-Img'>
					<HeroImg />
				</div>
				<div className='Page-Content'>
					{/* <HomePageContent /> */}
					{homePage ? <HomePageContent /> : <Pricing />}
				</div>
			</main>{' '}
		</div>
	);
}

export default App;
