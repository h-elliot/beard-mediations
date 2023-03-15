import './App.css';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import HeroImg from './components/HeroImg';
import Sidebar from './components/Sidebar';
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
			<HeroImg />
			<main className='Main-container'>
				{/* <Sidebar /> */}
				<PageContent />
			</main>{' '}
			{/* <Sidebar /> */}
			<Footer />
		</div>
	);
}

export default App;
