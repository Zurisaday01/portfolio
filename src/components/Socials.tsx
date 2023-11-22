import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Socials = () => {
	return (
		<nav className='flex-start gap-3 text-[30px] text-gray'>
			<ul>
				<li>
					<a
						href='https://github.com/Zurisaday01'
						target='_blank'
						className='hover:text-primary-3 transition ease-in-out duration-150'>
						<AiFillGithub />
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a
						href='https://www.linkedin.com/in/zurisaday-espadas-mart%C3%ADnez-11a087205'
						target='_blank'
						className='hover:text-primary-3 transition ease-in-out duration-150'>
						<AiFillLinkedin />
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Socials;
