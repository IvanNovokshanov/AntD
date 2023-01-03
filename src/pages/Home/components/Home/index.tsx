import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="test">
			<h1>Категории</h1>
			<NavLink to="/table">Таблица</NavLink>
			<NavLink to="/todo">Todo</NavLink>
		</div>
	);
};
