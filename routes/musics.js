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
  console.log(request.params.id);
  Music.findById(request.params.id)
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

router.put('/:id', (request, response) => {
  var values     = request.body;
  var music_id = request.params.id;

  delete values.id;

  Music.update({_id:music_id}, values, function(err, values){
      if (!err)
          response.json("ok");
      else
          response.write(err);
    });
});

router.delete('/:id', (request, response) => {

  Music.findOneAndRemove({_id: request.params.id}, function(err) {
       if (!err)
          response.json('ok');
      else
          response.write(err);
    });

});

module.exports = router;
