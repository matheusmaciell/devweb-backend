var User = require('../models/user');

exports.index = (req, res) => {
  User.find({})
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).send(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json(result);
	  });
};


exports.create = (req,res) =>{
	var user = new User(req.body);
	user.save(function (err, user) {
  		if (err) return console.error(err);
});


};


