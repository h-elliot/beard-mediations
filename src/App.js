import React from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import HeroImg from './components/HeroImg';

function App() {
	return (
		<div className='App'>
			<main className='Main-container'>
				<div className='Navbar-wrapper'>
					<Navbar />
				</div>
				<div className='Hero-Img'>
					<HeroImg />
				</div>
				<div className='Page-Content'>
					<PageContent />
				</div>
			</main>{' '}
		</div>
	);
}

export default App;
