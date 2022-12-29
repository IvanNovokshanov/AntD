import React from 'react';
import { Home } from './pages/Home/components/Home';
import { TableAnt } from './pages/TableAnt/components/Table';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/table" element={<TableAnt />} />
			</Routes>
		</div>
	);
};
