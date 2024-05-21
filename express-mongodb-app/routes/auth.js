const express = require('express');
const router = express.Router();

const { login, logout, signout, signup } = require('../controllers/auth');
const { authenticateToken } = require('../middleware/auth');

// Маршрут для входу користувача
router.post('/login', login);

// Маршрут для виходу користувача (видалення токену доступу)
router.post('/logout', authenticateToken, logout);

// Маршрут для виходу користувача (видалення всіх токенів доступу)
router.post('/signout', authenticateToken, signout);

// Маршрут для входу користувача
router.post('/signup', signup);

module.exports = router;