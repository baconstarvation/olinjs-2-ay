var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var userSchema = mongoose.Schema({
	name: String,
	grade: String,
	class: Number
});


var User = mongoose.model('User', userSchema);
var bob = new User({name: 'bob', grade: 'A', class: '2013'});
bob.save(function (err) {
	if(err) 
		console.log("Problem saving bob", err);
});

// module.exports = User;


