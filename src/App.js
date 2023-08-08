import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import HeroImg from './components/HeroImg';
import Footer from './components/Footer';

function App() {
	console.clear();
	return (
		<div className='App'>
			<HelmetProvider>
				<Helmet>
					<meta charSet='utf-8' />
					<title>Beard Mediations, LLC.</title>
					<link rel='icon' href={require('./favicon.ico')} />
				</Helmet>
			</HelmetProvider>
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
