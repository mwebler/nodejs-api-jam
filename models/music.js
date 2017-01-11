'use strict'

const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
  name: { type: String },
  artist: { type: String },
  album: { type: String }
});

musicSchema.statics.getAll = function() {
  return new Promise((resolve, reject) => {
    this.find((error, musics) => {
      console.log(musics);
      if (error) {
        return reject(error);
      }
      return resolve( musics );
    });
  });
}

musicSchema.statics.getById = function(id) {
  return new Promise((resolve, reject) => {
    this.findById(id, (error, musics) => {
      if (error) {
        return reject(error);
      }
      return resolve( musics );
    });
  });
}

module.exports = mongoose.model( 'Music', musicSchema, 'musics' );
