import React from 'react';
import { AddTodo } from '../AddTodo';
import { TodoList } from '../TodoList';
import style from './style.module.less';
import { Header } from '../Header';

export const Todo = () => {
	return (
		<div>
			<Header />
			<div className={style.container}>
				<AddTodo />
				<TodoList />
			</div>
		</div>
	);
};
