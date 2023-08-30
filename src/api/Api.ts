import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
	config => {
		config.headers.Authorization = `${process.env.REACT_APP_TOKEN}`;
		return config;
	},
	error => {
		console.error('An error occurred:', error);
		return Promise.reject(error);
	},
);

export const issuesList = async (page: number) => {
	const response = await instance.get(`/issues?sort=comments&per_page=${page}`);
	return response;
};

export const issuesDetail = async (issue_number: string) => {
	const response = await instance.get(`/issues${issue_number}`);
	return response;
};
