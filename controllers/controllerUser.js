
var users = [
  user1 = {
    id: 1,
    nome: 'Pabllo vitar',
},
  user2 = {
    id: 2,
    nome: 'Anitta',
}];


exports.get = (req, res, next) => {

    const response = req.params.id ? users[req.params.id -1] : users
    res.status(201).send(response);
};
