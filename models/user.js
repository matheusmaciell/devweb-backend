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
   about:{
     type: String,
     required: false,
     unique:false
   },
  city: {
    type: String,
    required: false,
    unique: false
  },
  address: {
    type: String,
    require: false,
    unique: false
  },
  school: { type: Schema.Types.ObjectId, ref: 'school' },
  class: { type: Schema.Types.ObjectId, ref: 'class' }
 });

var User = mongoose.model('User', UserSchema);

module.exports = User;
