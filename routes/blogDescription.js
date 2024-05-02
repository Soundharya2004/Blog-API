
const express = require('express');
const router = express.Router();
const connection = require('../connection'); 

router.get('/getBlogByTitle/:title', (req, res) => {
  const title = req.params.title;

  connection.query('SELECT * FROM blogsData WHERE title = ?', [title], (queryErr, rows) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (rows.length === 0) {
      res.status(404).json({ error: 'Blog not found' });
      return;
    }

    res.json(rows[0]); 
  });
});

module.exports = router;
