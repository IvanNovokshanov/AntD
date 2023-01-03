import React, { Dispatch, SetStateAction } from 'react';

export type Tasks = {
	id: string;
	title: string;
	task: string;
	completed: boolean;
	date: string;
};
type ContextType = {
	tasks: Tasks[];
	setTasks: Dispatch<SetStateAction<Tasks[]>>;
};
const defValue: ContextType = {
	tasks: [
		{
			id: '',
			title: '',
			task: '',
			completed: false,
			date: ''
		}
	],
	setTasks: () => []
};
const TodoContext = React.createContext<ContextType>(defValue);

export default TodoContext;
