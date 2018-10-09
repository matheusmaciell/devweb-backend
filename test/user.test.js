process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var User = require('../models/user');
var logger = require('mocha-logger');

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('User', function () {
    beforeEach(function (done) {
        User.remove({}, function (error) {
            done();
        });
    });


    describe('/GET users', function () {
        it('all the users in the system', function (done) {
            chai.request(app)
                .get('/user')
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });


    describe('/POST user', function () {
        it("creat a user", function (done) {
            var user1 = {
                "userName": "paulo villar",
                "userEmail": "paulo@villar.com",
                "password": "123456"
            }
            chai.request(app)
                .post('/user')
                .send(user1)
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/GET user', function () {
        it('all the users', function (done) {
            chai.request(app)
                .get('/user')
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('/POST user', function () {
        it("users with error", function (done) {
            var user1 = {
                "userEmail": "noName@gmail.com",
                "password": "kichakota"
            }
            chai.request(app)
            .post('/user')
            .send(user1)
            .end(function (error, res) {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('erros');
                    res.body.erros.should.have.property('userName');
                    res.body.errors.paginas.should.have.property('kind').eql('required');
                    done();
            });
        });

    });

    describe('/POST user', function () {
        it("Deve retornar o POST do user criado", function (done) {
            var user1 = {
                "userName": "paulo villar",
                "userEmail": "paulo@villar.com",
                "password": "123456"
            }
            chai.request(app)
                .post('/user')
                .send(user1)
                .end(function (error, res) {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/GET user', function () {
        it('just one user', function (done) {
            chai.request(app)
                .get('/user')
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('/GET/:id user', function () {
        it('Deve retornar um usuário pelo id dado', function (done) {
            var user2 = {
                "username": "samara",
                "email": "samara@gmail.com",
                "password": "ssss"
            }
            chai.request(app)
                .get('/user/' + user2.id)
                .send(user2)
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('username');
                    res.body.should.have.property('email');
                    res.body.should.have.property('password');
                    done();
                });
        });
    });

    describe('/PUT/:id user', function () {
        it('Deve atualizar um usuário de acordo com um id', function (done) {
            var user1 = {
                "username": "joseglauber",
                "email": "hahaha@gmail.com",
                "password": "hahahhehe"
            }
            user1.save(function (error, user1) {
                chai.request(server)
                    .put('/user/' + user1.id)
                    .send({
                        username: "glauberbraz",
                        email: "hahaha@gmail.com",
                        password: "hahahhehe"
                    })
                    .end(function (error, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Usuário Atualizado com Sucesso');
                        done();
                    });
            });
        });
    });
    describe('/DELETE/:id user', function () {
        it('Deve excluir um usuário de acordo com o id', function (done) {
            var user3 = {
                "username": "matheus",
                "email": "hehehe@gmail.com",
                "password": "aaaaaaaaaa"
            }
            user3.save(function (error, user3) {
                chai.request(server)
                    .delete('/user/' + user3.id)
                    .end(function (error, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Usuário excluído com Sucesso!');
                        done();
                    });
            });
        });
    });
});