const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// Create
router.post('/', postController.createPost);

// Read All
router.get('/', postController.getAllPosts);

// Read One
router.get('/:id', postController.getPostById);

// Update
router.put('/:id', postController.updatePost);

// Delete
router.delete('/:id', postController.deletePost);

module.exports = router;
