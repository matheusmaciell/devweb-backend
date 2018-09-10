var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
  UserName: {
		type: String,
		required: true,
		unique: true
	},	
  password: {
		type: String,
		required: true,
		unique: false
	},
  userEmail: {
		type: String,
		required: true,
		unique: true
	}, 	
 });

var user = mongoose.model('user', UserSchema);

module.exports = User;