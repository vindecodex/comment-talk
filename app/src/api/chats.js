const api = {
	getChats : async () => {
		const resp = await fetch('http://localhost:9001/chats', {
			method: 'GET',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = resp.json();
		return data;
	}
}

export default api;
