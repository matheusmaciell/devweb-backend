var jwt = require('jsonwebtoken');
var controllerUser = require('../user/controllerUser');

var config = require('../config/config');

exports.login = (req, res) => {
        const userEmail = req.body.userEmail;
        const userPassword = req.body.userPassword;
            
        controllerUser.getUserByEmail(userEmail)
            .then((user) => {
    
                if(!user) {
                    return res.json({ 'message':'Failed. User not found.' });
                } else if(user) {
                   const verificacao =(userEmail===user.userEmail && userPassword===user.password);
                    
                    if(verificacao) {
                        const token = jwt.sign({
                            _id: user._id,
                            email: user.email,
                        },  config.jwtSecret);
                        return res.json({ userId: user._id, token });
                    } else {
                       
                        return res.json({ 'message':'Failed. Wrong password.' });
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                const error = {' message':'Something went wrong, try again. ', 'error': err.message };
                return res.json(error);
            });
    };

exports.authenticate = (req, res, next) => {
        console.log("aa");
        let token = undefined;
        if (req.headers['authorization']) {
            token = req.headers['authorization'].split(" ")[1];
        } else {
            token = req.body.token;
        }
        if(token) {
            try {
                const data = (decodeToken(token));
                if(data) {
                    req._id = data._id;
                    req.email = data.email;
                    next();
                } else {
                    return res.json({ 'message':'Failed to decode. Wrong token.' });
                }
            } catch (error) {
                console.log(error);
                return res.json({ 'message':'Something went wrong, try again.', 'error': error.message });
            }
        } else {
            return res.json({ 'message':'Failed to authenticate. Unreachable token.' });
        }
    }

exports.authById = (req, res, next) => {
        const userId = req._id;
        if (userId) {
            const reqId = req.params.idUser;
            if (userId === reqId) {
                next();
            } else {
                return res.json({ 'message':'Failed. Unauthorized user.' });
            }
        } else {
            return res.json({ 'message':'Something went wrong, try again.' });
        }
    }
    
 const decodeToken = (token) => {
        return jwt.verify(token, config.jwtSecret);
    }

