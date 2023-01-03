import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css';

export const Header = () => {
	const { Header } = Layout;
	return (
		<Layout>
			<Header style={{ color: 'bisque' }}>Todo AntDesign Test</Header>
		</Layout>
	);
};
