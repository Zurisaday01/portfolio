import Button from './Button';

const Header = () => {
	return (
		<header className='flex-between px-5 py-5 absolute top-0 left-0 w-full z-50'>
			<img className='w-[90px]' src='/logo.png' alt='logo' />
			<a href='#projects-list'>
				<Button customClass='md:text-white'>Projects ↓</Button>
			</a>
		</header>
	);
};
export default Header;
