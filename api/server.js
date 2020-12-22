const app = require('express')();
const Chats = require('./data.js');

app.use((req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/', (req,res) => {
	console.log('Welcome to API');
	res.send('Welcome to API');
})

app.get('/chats', (req,res) => {
	console.log(Chats.Chats);
	res.status(200).json(Chats.Chats);
})

app.listen(9001,() => {
	console.log('api listening on port 9001');
})
