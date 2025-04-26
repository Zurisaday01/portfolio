import { projects } from '../assets/data';
import ProjectItem from './ProjectItem';
import SelectByTag from './SelectByTag';
import { MultiValue } from 'react-select';
import { useState } from 'react';

const ProjectsList = () => {
	const [selectedTags, setSelectedTags] =
		useState<MultiValue<{ value: string; label: string }>>();

	const arrTags = selectedTags?.map(tag => tag.label);

	const filteredProjects = projects.filter(project =>
		project.tags.some(tag => arrTags?.includes(tag))
	);

	return (
		<section className='bg-primary-3 px-10 pb-16 pt-4' id='projects-list'>
			<div className='text-center py-8 flex flex-col gap-2 items-center mb-3'>
				<h2 className='heading_h2'>Projects</h2>
				<p className='text-white'>
					Some of the projects I've developed can be found here.
				</p>
				<div className='max-w-lg w-full mt-4'>
					<SelectByTag setSelectedTags={setSelectedTags} />
				</div>
			</div>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
					{filteredProjects.length === 0
						? projects.map((project, idx) => (
								<ProjectItem key={idx} project={project} />
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: filteredProjects.map((project, idx) => (
								<ProjectItem key={idx} project={project} />
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))}
				</div>
			</div>
		</section>
	);
};
export default ProjectsList;
