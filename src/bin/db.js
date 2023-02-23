const mongoose = require('mongoose');
const {Schema} = mongoose;
const remote = 'mongodb+srv://demon258:j28*Sojo@cluster0.haig3y0.mongodb.net/node-mongodb-apirest?retryWrites=true&w=majority'
const local = 'mongodb://mongo:DoTL1o10lWotSyiGgd4m@containers-us-west-175.railway.app:5654';

try {
	mongoose.connect(local);
	console.log('Db is connected')
} catch(e) {
	console.log(e);
}
