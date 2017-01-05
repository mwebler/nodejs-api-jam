'use strict'

const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
  name: { type: String },
  artist: { type: String },
  album: { type: String }
});

musicSchema.statics.getMusics = function(filters, language) {
  return new Promise((resolve, reject) => {
    this.findAll((error, musics) => {
      if (error) {
        return reject(error);
      }
      return resolve( musics );
    });
  });
}

module.exports = mongoose.model( 'Music', musicSchema, 'musics' );
