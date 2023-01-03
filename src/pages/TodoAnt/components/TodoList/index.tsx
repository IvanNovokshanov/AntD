import React from 'react';
import style from './style.module.less';
import TodoContext from '../../../../TodoContext';
import { Card } from 'antd';

export const TodoList = () => {
	const { tasks, setTasks } = React.useContext(TodoContext);
	console.log(tasks);
	const deleteTask = (id: string) => {
		setTasks(tasks.filter(el => el.id !== id));
	};
	const completedTask = (id: string) => {
		setTasks(
			tasks.map(el =>
				el.id === id ? { ...el, completed: !el.completed } : el
			)
		);
	};
	return (
		<Card title="Список задач" style={{ marginTop: 26 }}>
			{tasks?.map(el => (
				<Card
					type="inner"
					title={
						<div
							className={
								el.completed ? style.task_title : style.task
							}
						>
							{el.title}
						</div>
					}
					key={el.id}
					extra={
						<>
							<a
								href="#"
								className={style.btn_completed}
								onClick={() => completedTask(el.id)}
							>
								Выполнено
							</a>
							<a
								href="#"
								className={style.btn_delete}
								onClick={() => deleteTask(el.id)}
							>
								Удалить
							</a>
						</>
					}
					style={{ marginBottom: 16 }}
				>
					<div className={style.task}>
						<div>{el.task}</div>
						<div>{el.date}</div>
					</div>
				</Card>
			))}
		</Card>
	);
};
