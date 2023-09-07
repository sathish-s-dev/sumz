import logo from '../assets/logo.svg';
const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full mb-10 pt-4'>
				<img
					src={logo}
					alt='sumz_logo'
					className='w-29 object-contain'
				/>
				<button
					type='button'
					className='rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black hover:cursor-pointer'
					onClick={() => {
						// console.log('clicked');
						window.open('https://github.com/sathishs007s/');
					}}>
					GitHub
				</button>
			</nav>
			<h1 className='head_text'>
				Summarize Articles with <br className='max-md:hidden' />
				<span className='orange_gradient'>openAI GPT-4</span>
			</h1>
			<h2 className='desc text-slate-200'>
				Simplify your reading with Summize, an open-source article summarizer
				that transforms lengthy articles into clear and concise summaries
			</h2>
		</header>
	);
};

export default Hero;
