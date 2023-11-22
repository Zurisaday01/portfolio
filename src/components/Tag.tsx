import { TagProps } from '../Types';

const Tag = ({ name }: TagProps) => {
	return (
		<div className='py-1 px-2 bg-gradient-to-l from-primary-1 to-primary-2 text-sm'>
			{name}
		</div>
	);
};
export default Tag;
