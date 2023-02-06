import './App.css';
// import 'images/Downtown_Corsicana_Panorama.jpg';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-header-text' id='App-site-title'>
					Beard Mediation, LLC.
				</h1>
			</header>
			<div className='App-hero-img'>
				<img
					src={require('./images/Downtown_Corsicana_Panorama.jpg')}
					alt='Downtown Corsicana'
				/>
			</div>
			<main className='App-main'>
				{/* image to left/sidebar on desktop? */}

				{/* paragraph to right on desktop/center on mobile */}
			</main>
		</div>
	);
}

export default App;
