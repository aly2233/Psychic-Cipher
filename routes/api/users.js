const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
      bio: req.user.bio,
      astrology_sign: req.body.astrology_sign
    });
  })

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: 'No user found'}))
})

router.patch('/:id', (req, res) => {
  // console.log(req.body)
  User.findByIdAndUpdate(req.params.id, {bio: req.body.bio, astrology_sign: req.body.astrology_sign, handle: req.body.handle},{new: true})
    .then( updatedUser => {
      console.log(updatedUser)
      res.json(updatedUser)})
    .catch(err => {
      console.log('in catch')
      res.status(404).json({ nouserfound: 'No user found'})})
})


router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ handle: req.body.handle }).then(user => {
      if (user) {
        errors.handle = "User already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password,
          bio: req.body.bio,
          astrology_sign: req.body.astrology_sign
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = { id: user.id, handle: user.handle };
  
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
  
  router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({ email }).then(user => {
      if (!user) {
        errors.email = "This user does not exist";
        return res.status(400).json(errors);
      }
  
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, email: user.email};
  
          jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Incorrect password";
          return res.status(400).json(errors);
        }
      });
    });
  });


  module.exports = router;