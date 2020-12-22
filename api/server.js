const app = require('express')();
const Chats = require('./data.js');

app.get('/', (req,res) => {
	console.log('Welcome to API');
	res.send('Welcome to API');
})

app.get('/chats', (req,res) => {
	console.log(Chats);
	res.status(200).json(Chats);
})

app.listen(9001,() => {
	console.log('api listening on port 9001');
})
