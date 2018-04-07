const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    console.log('this is catching')
    req.login(user, (err) => {
      if(err) return next(err);
      res.redirect('/');
    });

  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

usersController.delete = (req, res) => {
 User.delete(req.params.id)
   .then(user => {
     res.redirect('/')
   })
   .catch(err => {
     res.status(400).json(err);
   });
};

module.exports = usersController;