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
			<HeroImg />
			<Sidebar /> <PageContent />
			<Footer />
		</div>
	);
}

export default App;
