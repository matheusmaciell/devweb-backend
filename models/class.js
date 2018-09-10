var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var classSchema = new mongoose.Schema({
  ClassName: {
		type: String,
		required: true,
		unique: true
	},	
  password: {
		type: String,
		required: true,
		unique: false
	},
  classEmail: {
		type: String,
		required: true,
		unique: true
	}, 	
 });

var Class = mongoose.model('Class', ClassSchema);

module.exports = Class;