import axios from 'axios';

async function getPosts() {
	const { data } = await axios.get(`/api/mis-historias`);
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

async function getUserData() {
	const { data } = await axios.get(`/api/mis-datos`);
	return data;
}

async function saveUserData({code}) {
	const { data } = await axios({
		url: `/api/mis-datos/guardar`,
		method: 'post',
		data: code 
	});
	return data;
}

const Api = {
	getPosts,
	getQuestions,
	saveAnswers,
	getUserData,
	saveUserData
};

export default Api;