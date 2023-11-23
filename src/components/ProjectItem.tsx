import { ProjectItemProps } from '../Types';
import Button from './Button';
import Tag from './Tag';

const ProjectItem = ({ project }: ProjectItemProps) => {
	const { title, imgUrl, tags, link } = project;
	return (
		<div className='flex flex-col items-start gap-4 bg-gray-transparent p-8 hover:bg-gray-transparent-strong transition duration-300 ease-in-out hover:scale-105 hover:outline outline-primary-2 outline-offset-8 outline-4 hover:shadow-[0_0px_30px_rgba(0,0,0,0.4)]'>
			<div className='w-full'>
				<img className='object-cover h-[300px] w-full' src={imgUrl} alt={title} />
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='heading_h3'>{title}</h3>
				<div className='flex flex-wrap gap-2'>
					{tags.map((tag, idx) => (
						<Tag key={idx} name={tag} />
					))}
				</div>
			</div>
			<a href={link} target='_blank'>
				<Button customClass='bg-white transition duration-300 ease-in-out mt-6 hover:bg-gradient-to-r hover:from-primary-2 hover:to-primary-1 py-1 bg-clip-text text-transparent px-3 py-2 relative hover:after:absolute after:bg-gradient-to-r after:from-primary-2 after:to-primary-1 after:w-full after:h-[2px] after:bottom-0 after:left-0 text-sm'>
					Visit repository →
				</Button>
			</a>
		</div>
	);
};
export default ProjectItem;
