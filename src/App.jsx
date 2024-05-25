import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<div class='container'>
					<Profile />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
