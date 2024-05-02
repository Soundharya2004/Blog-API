const express = require('express');
const router = express.Router();
const connection = require('../connection'); 

router.get('/getBlogs', (req, res) => {
  connection.query('SELECT * FROM blogsData', (queryErr, rows) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(rows);
  });
});

module.exports = router;
