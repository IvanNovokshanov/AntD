import React, { useEffect, useState } from 'react';
import { Home } from './pages/Home/components/Home';
import { Todo } from './pages/TodoAnt/components/Todo';
import { TableAnt } from './pages/TableAnt/components/Table';
import { Routes, Route } from 'react-router-dom';
import { getTasksFetch } from './api';
import TodoContext from './TodoContext';
import { Tasks } from './TodoContext';

export const App = () => {
	const [tasks, setTasks] = useState<Tasks[]>([]);
	useEffect(() => {
		(async () => {
			setTasks(await getTasksFetch());
		})();
	}, []);

	return (
		<TodoContext.Provider value={{ tasks, setTasks }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/table" element={<TableAnt />} />
				<Route path="/todo" element={<Todo />} />
			</Routes>
		</TodoContext.Provider>
	);
};
