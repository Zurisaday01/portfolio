import { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';

function App() {
	const particlesInit = async (main: Engine) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};
	return (
		<div className='relative'>
			<Header />
			<Hero />
			<ProjectsList />
			<Footer />

			<Particles
				id='tsparticles'
				className='absolute top-0 z-10 w-full h-full'
				init={particlesInit}
				options={{
					fpsLimit: 60,
					fullScreen: { enable: false },
					background: {
						color: '#fff',
					},
					interactivity: {
						events: {
							onClick: { enable: true, mode: 'push' },
							onHover: {
								enable: true,
								mode: 'repulse',
								parallax: { enable: false, force: 60, smooth: 10 },
							},
							resize: true,
						},
						modes: {
							push: { quantity: 4 },
							repulse: { distance: 200, duration: 0.4 },
						},
					},
					particles: {
						color: { value: '#28282879' },
						move: {
							direction: 'none',
							enable: true,
							outModes: 'out',
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: {
								min: 0,
								max: 0.5,
							},
						},
						shape: {
							type: 'triangle',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
				}}
			/>
		</div>
	);
}

export default App;
