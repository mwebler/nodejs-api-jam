'use strict'

const express = require('express');
const router = express.Router();

router.use('/musics', require('./musics'));

module.exports = router;
