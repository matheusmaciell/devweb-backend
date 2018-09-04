var schools = [
  school = {
    id: 1,
    nome: 'Colegio rosa de saron',
},
  user2 = {
    id: 2,
    nome: 'Colegio RBD',
}];


exports.get = (req, res, next) => {

    const response = req.params.id ? schools[req.params.id -1] : schools
    res.status(201).send(response);
};
