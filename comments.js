// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Import controllers
const commentsController = require('../controllers/comments');

// Handle GET requests to /comments
router.get('/', commentsController.getComments);

// Handle GET requests to /comments/:id
router.get('/:id', commentsController.getCommentById);

// Handle POST requests to /comments
router.post('/', upload.none(), commentsController.postComment);

// Handle PUT requests to /comments/:id
router.put('/:id', upload.none(), commentsController.putComment);

// Handle DELETE requests to /comments/:id
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;