const express = require('express');
const connection = require('../connection');

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

 
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
           
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }

        res.json({ message: 'Login successful', user: results[0] });
    });
});

module.exports = router;
