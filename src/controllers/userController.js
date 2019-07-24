const userQueries = require('../db/queries.user.js');
const passport = require('passport');

module.exports = {
  signUp(req, res, next) {
    res.render('user/signup')
  },

  create(req, res, next) {
    const options = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    userQueries.createUser(options, (err, user) => {
      if (err) {
        req.flash('error', err);
        res.redirect('/users/signup');
      } else {
        passport.authenticate('local')(req, res, () => {
          req.flash('notice', 'You\'ve successfully signed in!');
          res.redirect('/');
        })
      }
    })
  },

  signInForm(req, res, next) {
    res.render('user/signin')
  },

  signIn(req, res, next) {
    passport.authenticate('local') (req, res, () => {
      if(!req.user) {
        req.flash('notice', 'Sign in failed. Please try again.')
        res.redirect('/user/signin');
      } else {
        req.flash('notice', 'You\'ve successfully signed in!')
        res.redirect('/')
      }
    })
  },

  signOut(req, res, next) {
    req.logout();
    req.flash('notice', 'You\'ve successfully signed out!');
    res.redirect('/');
  },
}
