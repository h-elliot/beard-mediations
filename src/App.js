import './App.css';
import Navbar from './components/Navbar';
import MenuButton from './components/MenuButton';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import HeroImg from './components/HeroImg';
import useSticky from './hooks/useSticky';

function App() {
	const { sticky, stickyRef } = useSticky();

	return (
		<div className='App'>
			<Navbar />
			<MenuButton />
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
					<PageContent />
				</div>
			</main>{' '}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
