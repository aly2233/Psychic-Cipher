
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Post = require('../../models/Post')
const validatePostInput = require('../../validation/posts')

router.get('/', (req, res) => {
    console.log('***********')
    console.log(req.params)
    Post.find({card: req.params.cardId})
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found'}))
});


// router.get('/card/:card_id', (req, res) => {
//     Post.find({card: req.params.card_id})
//         .sort({date: -1})
//         .then(posts => res.json(posts))
//         .catch(err => res.status(404).json({ nopostsfound: 'No posts found for that card'}))

// })


router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found from that user' }))
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch( err => 
            res.status(404).json({notweetfound: 'No tweet found with that ID'})
        );
})


router.post('/',
    // passport.authenticate('jwt', {session: false}),
    (req, res) => {

        // const { errors, isValid } = validatePostInput(req.body)

        // console.log('im here')
        // if(!isValid) {
        //     return res.status(400).json(errors);
        // }
        
        const newPost = new Post({
            body: req.body.body,
            card: req.body.card,
            user: req.body.user
        });
        
        newPost.save().then(post => res.json(post));
    }
)
module.exports = router;

