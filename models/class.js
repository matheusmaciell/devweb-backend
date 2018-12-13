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
  studants : [{ type: Schema.Types.ObjectId, ref: 'User' }]	
 });

var Class = mongoose.model('Class', classSchema);

module.exports = Class;
