const bcrypt = require('bcrypt');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
};

function loginRedirect(req, res, next) {
    if(req.user) return res.redirect('/');
    return next();
};

function logoutRedirect(req, res, next) {
    if(!req.user) return res.redirect('/');
    return next();
};

function loginRequired(req, res, next) {
    if(!req.user) return res.redirect('/auth/login');
    return next();
};

module.exports = {
    comparePass, loginRedirect, loginRequired, logoutRedirect
};