exports.get = (req, res, next) => {
    const user1 = {
        id: 1,
        nome: 'Pabllo vitar',
    }
     const user2 = {
        id: 2,
        nome: 'Anitta',
    }
    const response = req.params.id ? user2 : 'passa o cartao anitta'
    res.status(201).send(response);
};
