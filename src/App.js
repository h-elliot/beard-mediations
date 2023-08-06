import React from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import HeroImg from './components/HeroImg';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<main className='Main-container'>
				<div className='Navbar-wrapper'>
					<Navbar />
				</div>
				<div className='Page-Content'>
					<PageContent />
				</div>
				<div className='Hero-Img'>
					<HeroImg />
				</div>
				<div className='Footer-wrapper'>
					<Footer />
				</div>
			</main>{' '}
		</div>
	);
}

export default App;
