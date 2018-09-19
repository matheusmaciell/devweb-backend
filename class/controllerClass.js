var Class = require('../models/class');
const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;
const NOT_FOUND_STATUS = 404;
const UNPROCESSABLE_ENTITY_STATUS = 422;
const INTERNAL_SERVER_ERROR_STATUS = 500;

exports.index = (req, res) => {
  Class.find({})
	  .catch((err) => {
	    res.status(400).send(err);
	  })
	  .then((result) => {
	    res.status(200).json(result);
	  });
};

exports.show = (req, res) => {
	Class.findById(req.params.Class_id)
		.then((Class) => {
			res.status(OK_STATUS).json(Class);
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.create = (req,res) =>{
	var Classc = new Class(req.body);
	Classc.save((err) => {
			if (err && err.name === 'MongoError' && err.code === 11000) {
				  res.status(FORBIDDEN_STATUS).send(err);
	  } else {
		res.status(OK_STATUS).send('Class created.');
	  }
		});
};
exports.update = (req, res) => {
	Class.updateOne({ _id: req.params.Class_id }, { $set: req.body })
		.then(() => {
			res.status(OK_STATUS).send('Class updated!');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.delete = (req, res) => {
	Class.deleteOne({ _id: req.params.Class_id })
		.then(() => {
			res.status(OK_STATUS).send('Class deleted.');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).send(error);
		});
};


