var User = require('../models/user');
const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;
const NOT_FOUND_STATUS = 404;
const UNPROCESSABLE_ENTITY_STATUS = 422;
const INTERNAL_SERVER_ERROR_STATUS = 500;

exports.index = (req, res) => {
  User.find({})
	  .catch((err) => {
	    res.status(400).send(err);
	  })
	  .then((result) => {
	    res.status(200).json(result);
	  });
};

exports.show = (req, res) => {
	User.findById(req.params.user_id)
		.then((user) => {
			res.status(OK_STATUS).json(user);
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.create = (req,res) =>{
	var user = new User(req.body);
	user.save((err) => {
			if (err && err.name === 'MongoError' && err.code === 11000) {
				  res.status(FORBIDDEN_STATUS).send(err);
	  } else {
		res.status(OK_STATUS).send('User created.');
	  }
		});
};
exports.update = (req, res) => {
	User.updateOne({ _id: req.params.user_id }, { $set: req.body })
		.then(() => {
			res.status(OK_STATUS).send('User updated!');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.delete = (req, res) => {
	User.deleteOne({ _id: req.params.user_id })
		.then(() => {
			res.status(OK_STATUS).send('User deleted.');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).send(error);
		});
};


