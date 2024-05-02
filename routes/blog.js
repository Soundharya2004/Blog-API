const express = require('express');
const router = express.Router();
const connection = require('../connection'); 
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/blogs', upload.single('image'), (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.filename : null; 
  console.log(image);
  const query = 'INSERT INTO blogsData (title, description, thumbnail) VALUES (?, ?, ?)';
  connection.query(query, [title, description, image], (error, results) => {
    if (error) {
      console.error('Error inserting blog data:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(201).json({ message: 'Blog created successfully', blogId: results.insertId });
  });
});

module.exports = router;
