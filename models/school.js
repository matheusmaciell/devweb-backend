var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schoolSchema = new mongoose.Schema({
  schoolName: {
		type: String,
		required: true,
		unique: true
	},	
  password: {
		type: String,
		required: true,
		unique: false
	},
  schoolEmail: {
		type: String,
		required: true,
		unique: true
	}, 	
 });

var School = mongoose.model('school', SchoolSchema);

module.exports = School;