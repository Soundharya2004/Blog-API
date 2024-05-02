const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const blogRouter = require('./routes/blog'); // Import your blog router
const getBlogs = require('./routes/getBlog')
const path = require('path');
const updateBlog = require('./routes/blogUpdate');
const deleteBlog = require('./routes/deleteBlog');
const blogDescription = require('./routes/blogDescription');
const loginRouter = require('./routes/login');
// CORS
app.use(cors()); 

// Parse JSON bodies 
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/upload', express.static(path.join(__dirname, 'uploads')));


app.use('/api', blogRouter);
app.use('/api', getBlogs);
app.use('/api',updateBlog); 
app.use('/api',deleteBlog);
app.use('/api',blogDescription);
app.use('/auth',loginRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
