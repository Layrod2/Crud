const mongoose = require('mongoose');
const {Schema} = mongoose;
const remote = 'mongodb://mongo:DoTL1o10lWotSyiGgd4m@containers-us-west-175.railway.app:5654'
const local = 'mongodb://mongo:DoTL1o10lWotSyiGgd4m@containers-us-west-175.railway.app:5654';

try {
	mongoose.connect(local);
	console.log('Db is connected')
} catch(e) {
	console.log(e);
}
