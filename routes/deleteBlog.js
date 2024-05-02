const express = require('express');
const router = express.Router();
const connection = require('../connection'); 


router.delete('/blogDelete/:title', (req, res) => {
  const { title } = req.params; 


  const query = `
    DELETE FROM blogsData
    WHERE title = ?
  `;
  const values = [title];

 
  connection.query(query, values, (queryErr, result) => {
    if (queryErr) {
      console.error('Error executing delete query:', queryErr);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

   
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Blog entry not found' });
      return;
    }

    res.status(200).json({ message: 'Blog entry deleted successfully' });
  });
});

module.exports = router;
