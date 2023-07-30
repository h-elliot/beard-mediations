import './App.css';
import Navbar from './components/Navbar';
import HomePageContent from './components/HomePageContent';
import HeroImg from './components/HeroImg';
import useSticky from './hooks/useSticky';

function App() {
	const { sticky, stickyRef } = useSticky();

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
					<HomePageContent />
				</div>
			</main>{' '}
		</div>
	);
}

export default App;
