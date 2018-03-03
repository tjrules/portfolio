const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
    passport.serializeUser((user, done)=>{
        User.findByUserName(username)
            .then(user => {
            done(null, user);
        }) .catch(err => {
            console.log('there is an error in serialize user', err);
            done(err, null);
        });
    });
};