var classes = [
  school = {
    id: 1,
    nome: "1 A",
},
  user2 = {
    id: 2,
    nome: '2 b',
}];


exports.get = (req, res, next) => {

    const response = req.params.id ? classes[req.params.id -1] : classes
    res.status(201).send(response);
};
