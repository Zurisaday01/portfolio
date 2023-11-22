import Select from 'react-select';

import { projects } from '../assets/data';
import { SelectByTagProps } from '../Types';

const SelectByTag = ({ setSelectedTags }: SelectByTagProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let allTags: any[] = [];

	projects.forEach(project => {
		allTags.push(project.tags);
	});

	allTags = [...new Set(allTags.flat(1))];

	allTags = allTags.map(tag => ({
		value: tag.toLowerCase().replace(/ /g, '-'),
		label: tag,
	}));

	return (
		<Select
			// defaultValue={[options[2], options[3]]}
			isMulti
			name='tech'
			options={allTags}
			className='basic-multi-select'
			classNamePrefix='select'
			onChange={value => setSelectedTags(value)}
			classNames={{
				control: state =>
					state.isFocused ? 'border-red-600' : 'border-grey-300',
			}}
		/>
	);
};
export default SelectByTag;
