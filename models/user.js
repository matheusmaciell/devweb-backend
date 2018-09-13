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
	 	required: false,
		unique: true
	 }, 	
 });

var User = mongoose.model('User', UserSchema);

module.exports = User;