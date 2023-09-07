import './App.css';

import Hero from './components/Hero.tsx';
import Summary from './components/Summary.tsx';
function App() {
	return (
		<main>
			<div className='gradient' />
			<div className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
				<Hero />
				<Summary />
			</div>
		</main>
	);
}

export default App;
