import { Dispatch, SetStateAction } from 'react';
import { MultiValue } from 'react-select';

export interface ButtonProps {
	children: React.ReactNode;
	customClass: string;
}

export interface ProjectItemProps {
	project: {
		title: string;
		imgUrl: string;
		tags: string[];
		link: string;
	};
}
export interface TagProps {
	name: string;
}

export interface SelectByTagProps {
	setSelectedTags: Dispatch<
		SetStateAction<MultiValue<{ value: string; label: string }> | undefined>
	>;
}
