import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import HeroImg from './components/HeroImg';
import useSticky from './hooks/useSticky';
// import Pricing from './components/Pricing';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App() {
	const { sticky, stickyRef } = useSticky();
	// const { homePage, setHomePage } = useState(false);

	// function changeHomePage() {
	// 	setHomePage(!homePage);
	// }

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
					{/* first version, static page: */}
					<PageContent />
					{/* ========== */}
					{/* second version, using state: (unexpected outcome, shows Pricing be default?) */}
					{/* {homePage ? <HomePageContent /> : <Pricing />} */}
					{/* third version uses Tabs in components */}
				</div>
			</main>{' '}
		</div>
	);
}

export default App;
