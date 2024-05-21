const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/blogDB'; // MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;