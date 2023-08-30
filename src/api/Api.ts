import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

export const issuesList = async (page: number) => {
	const response = await instance.get(`/issues?per_page=15&sort=comments&page=${page}`);
	return response;
};

export const issuesDetail = async (issue_number: string) => {
	const response = await instance.get(`/issues${issue_number}`);
	return response;
};
