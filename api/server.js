const app = require('express')();
const Chat = require('./data.js');

app.get('/', (req,res) => {
	console.log(Chat);
	res.status(200).json(Chat);
})

app.listen(9001,() => {
	console.log('api listening on port 9001');
})
