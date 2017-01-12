process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Music = require('../models/music');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Musics', () => {
    beforeEach((done) => {
        Music.remove({}, (err) => {
           done();
        });
    });
  describe('/GET music', () => {
      it('it should GET all the musics', (done) => {
            chai.request(server)
            .get('/musics')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST music', () => {
      it('it should POST a music ', (done) => {
        let music = {
            name: "You shook me all night long",
            artist: "ACDC",
            album: "Back In Black"
        }
            chai.request(server)
            .post('/musics')
            .send(music)
            .end((err, res) => {
                res.should.have.status(200);
                //res.body.should.be.a('object');
              done();
            });
      });
  });
});
