import axios from 'axios';

async function getPosts(query) {
	const { data } = await axios.get(`/api/searchUser?query=${query}`);
	return data;
}

async function getQuestions(postId) {
	const { data } = await axios.get(`/api/respuestas/${postId}`);
	return data;
}

async function saveAnswers({url,code}) {
	const { data } = await axios({
		url: `/api/respuestas/${url}`,
		method: 'post',
		data: code 
	});
	return data;
}

const Api = {
	getPosts,
	getQuestions,
	saveAnswers
};

export default Api;