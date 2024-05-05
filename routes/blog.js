const express = require('express');
const router = express.Router();
const connection = require('../connection'); 

router.post('/blogs', (req, res) => {
  const { title, description, link } = req.body;
  
  const query = 'INSERT INTO blogsData (title, description, thumbnail) VALUES (?, ?, ?)';
  connection.query(query, [title, description, link], (error, results) => {
    if (error) {
      console.error('Error inserting blog data:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(201).json({ message: 'Blog created successfully', blogId: results.insertId });
  });
});

module.exports = router;
