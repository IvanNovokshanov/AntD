import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../../api';
import { Header } from '../Header';
import { Table, Typography, Button } from 'antd';
import { Row, Col } from 'antd';
import style from './style.module.css';

type Users = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
};

export const TableAnt = () => {
	const [users, setUsers] = useState<Users[]>([]);

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string) => (
				<Typography.Text copyable>{text}</Typography.Text>
			)
		},
		{
			title: 'User name',
			dataIndex: 'username',
			key: 'username',
			sorter: (a: any, b: any) =>
				a.username > b.username ? 1 : a.username === b.username ? 0 : -1
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email'
		},
		{
			title: 'Website',
			dataIndex: 'website',
			key: 'website'
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone'
		}
	];
	const dataSource = users.map(el => ({ ...el, key: el.id }));
	useEffect(() => {
		(async () => {
			setUsers(await getUsers());
		})();
	}, []);

	console.log('users:', users);

	return (
		<div>
			<Header />
			<Row>
				<Col md={{ span: 12, offset: 6 }}>
					<Table
						dataSource={dataSource}
						columns={columns}
						pagination={{ pageSize: 5 }}
					/>
				</Col>
			</Row>
		</div>
	);
};
