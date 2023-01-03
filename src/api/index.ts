export const getUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	return await response.json();
};

export const getTasksFetch = async () => {
	const response = await fetch('http://localhost:3000/posts');
	return await response.json();
};
