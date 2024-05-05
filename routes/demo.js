const express = require('express');
const router = express.Router();
const connection = require('../connection'); 

router.get('/demo', (req, res) => {
  const data = 15;
  res.send(data);
});

module.exports = router;