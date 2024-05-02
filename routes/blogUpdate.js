
const express = require('express');
const router = express.Router();
const connection = require('../connection'); // Assuming your connection is exported from connection.js


router.put('/blogUpdate/:title', (req, res) => {
  const { title } = req.params; // Get the title from request parameters
  const { newTitle, newDescription } = req.body; // Get new title and description from request body

 
  const query = `
    UPDATE blogsData
    SET title = ?, description = ?
    WHERE title = ?
  `;
  const values = [newTitle, newDescription, title];

  connection.query(query, values, (queryErr, result) => {
    if (queryErr) {
      console.error('Error executing update query:', queryErr);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Check if any rows were affected by the update to check blog is there or not
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Blog post not found' });
      return;
    }

    res.status(200).json({ message: 'Blog post updated successfully' });
  });
});

module.exports = router;
