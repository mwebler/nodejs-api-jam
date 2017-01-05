'use strict'

const Music = require('../models/music');
const express = require('express');
const router = express.Router();

router.get('/',(request, response) => {
  Music.getAll()
    .then( musics => {
      response.status(200).json(musics);
    }).catch( error => {
      response.status(500).json(error);
    });
});

// get /musics/br
router.get('/:id',(request, response) => {
  Music.getMusic(request.params.id)
    .then( musics => {
      response.status(200).json(musics);
    }).catch( error => {
      response.status(500).json(error);
    });
});

// post /musics/
router.post('/',  (request, response) => {
  const newMusic = new Music(request.body);
  newMusic.markModified('name');
  newMusic.markModified('artist');
  newMusic.markModified('album');
  newMusic.save()
    .then( () => {
      response.status(200).send('ok');
    }).catch( error => {
      response.status(500).send(error);
    });
});

router.put('/', (request, response) => {
  var values     = request.body;
  var music_id = request.body.id;

  delete values.id;

  Music.update({_id:music_id}, values, function(err, values){
      if (!err)
          response.json("ok");
      else
          response.write(err);
    });
});

router.delete('/', (request, response) => {

  Music.remove({_id: request.body.id}, function(err) {
       if (!err)
          response.json('ok');
      else
          response.write(err);
    });

});

module.exports = router;
