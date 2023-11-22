import Socials from './Socials';

const Hero = () => {
	return (
		<section className='flex flex-col h-[130vh] md:flex-row relative md:h-[75vh]'>
			<div className='px-12 h-[60%] md:h-[100%] md:w-2/3 relative gap-10 flex flex-col justify-center'>
				<h1 className='text-[80px] heading_gradient relative after:absolute after:bg-primary-3  after:w-[130px] after:h-[10px] after:bottom-0 after:left-0 leading-tight pb-9'>
					Zury <br /> Espadas
				</h1>

				<Socials />
			</div>
			<div className='bg-gray h-[50%] w-full flex-center md:h-[100%]'>
				<img src='/hero.png' alt='hero' className='w-full max-w-[500px]' />
			</div>
		</section>
	);
};
export default Hero;
