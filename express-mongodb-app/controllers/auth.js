const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.js'); // Підключення моделі користувача

// Функція для створення JWT токена
function generateAccessToken(username) {
    return jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
}

// Функція для видалення токену доступу зі списку активних токенів
async function revokeToken(username, token) {
    const user = await User.findOneAndUpdate({ username }, { $pull: {activeTokens: token } }, { new: true });
    return user;
}

// Контролер для входу користувача
async function login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('User not found');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    // Генеруємо токен доступу та додаємо його до списку активних токенів користувача
    const accessToken = generateAccessToken(user.username);
    user.activeTokens.push(accessToken);
    await user.save();
    res.json({ accessToken });
}

// Контролер для виходу користувача (видалення токену доступу)
async function logout(req, res) {
    const { username } = req.user;
    const token = req.headers['authorization'].split(' ')[1];
    await revokeToken(username, token);
    res.json({ message: 'Logout successful' });
}

// Контролер для виходу користувача (видалення всіх токенів доступу)
async function signout(req, res) {
    const { username } = req.user;
    await User.findOneAndUpdate({ username }, { activeTokens: [] });
    res.json({ message: 'Signout successful' });
}

// Контролер для створення користувача
async function signup(req, res) {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save()
    .then(function () {
        res.json({ message: 'Signup successful' });
    })
    .catch(function (err) {
        console.log(err);
    });
}
            
module.exports = {
    login,
    logout,
    signout,
    signup
};
