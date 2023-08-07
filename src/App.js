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
				<link rel='icon' href='./images/favicon/favicon.ico' />
				{/* <!-- third-generation iPad with high-resolution Retina display: --> */}
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='./images/favicon/apple-touch-icon.png'
				/>
				{/* <!-- iPhone with high-resolution Retina display: --> */}
				<link
					rel='android-chrome-192x192'
					sizes='192x192'
					href='./images/favicon/android-chrome-192x192.png'
				/>
				{/* <!-- first- and second-generation iPad: --> */}
				<link
					rel='android-chrome-512x512'
					sizes='512x512'
					href='./images/favicon/android-chrome-512x512.png'
				/>
				{/* <!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: --> */}
				<link rel='favicon-16x16' href='./images/favicon/favicon-16x16.png' />
				{/* <!-- basic favicon --> */}
				<link rel='favicon-32x32' href='./images/favicon/favicon-32x32.png' />
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
