const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRouter.post('/register', usersController.create);
authRouter.post('/login', passport.authenticate('local')),
    (req, res) => {
        res.redirect('/')
    }

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

authRouter.delete('/:id', usersController.delete);

module.exports = authRouter;
