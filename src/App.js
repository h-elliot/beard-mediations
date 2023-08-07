import React from 'react';
import { Helmet } from 'react-helmet';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import HeroImg from './components/HeroImg';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Beard Mediations, LLC.</title>
				<link rel='icon' href='./favicon.ico' />
			</Helmet>
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
