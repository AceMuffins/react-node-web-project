const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');
//const authRouter = require('./routes/auth');
//const limiter = require('./middleware/requestLimit');
const app = express();
const port = 5000;
//const { authenticateToken } = require('./middleware/auth');

// app.use(limiter);

// Middleware
app.use(express.json()); // Built-in body-parser to handle JSON
app.use(express.urlencoded({ extended: true })); // Built-in body-parser to handle URL-encoded data

app.use('/users', authRouter)

// Routes
app.use('/posts', /*authenticateToken,*/ postsRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
