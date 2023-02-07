import './App.css';
// import 'images/Downtown_Corsicana_Panorama.jpg';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2 className='App-header-text' id='App-site-title'>
					Beard Mediation, LLC.
				</h2>
				<ul className='App-header-nav'>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</header>

			<main className='App-main'>
				<div className='App-hero-img'>
					<img
						src={require('./images/robson-hatsukami-morgan-large.jpg')}
						alt='Downtown Corsicana'
					/>
				</div>
				{/* image to left/sidebar on desktop? */}
				<section className='App-main-text-section'>
					<p className='App-main-text-content'></p>
				</section>
				{/* paragraph to right on desktop/center on mobile */}
			</main>
		</div>
	);
}

export default App;
