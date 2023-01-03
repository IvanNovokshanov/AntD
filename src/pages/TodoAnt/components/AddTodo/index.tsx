import React from 'react';
import style from './style.module.less';
import { Input, Button } from 'antd';

export const AddTodo = () => {
	return (
		<div>
			<Input.Group compact className={style.add_group}>
				<Input
					style={{ width: 'calc(100% - 200px)' }}
					placeholder="введите задачу"
				/>
				<Button className={style.buttonSubmit} type="primary">
					Submit
				</Button>
			</Input.Group>
			<Input
				style={{ width: '100%', marginTop: '16px' }}
				placeholder="введите текст задачи"
			/>
		</div>
	);
};
