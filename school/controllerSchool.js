var School = require('../models/school');
var Class = require('../models/class');
const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;
const NOT_FOUND_STATUS = 404;
const UNPROCESSABLE_ENTITY_STATUS = 422;
const INTERNAL_SERVER_ERROR_STATUS = 500;


exports.showClass = (req,res) =>{
	School.findById(req.params.school_id)
	.then((School) => {
		
		res.status(OK_STATUS).json(School.classes);
	})
	.catch((error) => {
		res.status(BAD_REQUEST_STATUS).json(error);
	});		
};



exports.index = (req, res) => {
  School.find({})
	  .catch((err) => {
	    res.status(400).send(err);
	  })
	  .then((result) => {
	    res.status(200).json(result);
	  });
};

exports.show = (req, res) => {
	School.findById(req.params.school_id)
		.then((School) => {
			res.status(OK_STATUS).json(School);
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.create = (req,res) =>{
	var school = new School(req.body);
	school.save((err) => {
			if (err && err.name === 'MongoError' && err.code === 11000) {
				  res.status(FORBIDDEN_STATUS).send(err);
	  } else {
		res.status(OK_STATUS).send('School created.');
	  }
		});
};
exports.update = (req, res) => {
	School.updateOne({ _id: req.params.School_id }, { $set: req.body })
		.then(() => {
			res.status(OK_STATUS).send('School updated!');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.delete = (req, res) => {
	School.deleteOne({ _id: req.params.School_id })
		.then(() => {
			res.status(OK_STATUS).send('School deleted.');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).send(error);
		});
};


