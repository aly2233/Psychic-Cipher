
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Post = require('../../models/Post')
const validatePostInput = require('../../validation/posts')

router.get('/', (req, res) => {
    Post.find({cardId: (req.query.cardId || req.body.cardId)})
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found'}))
});


router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found from that user' }))
});

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch( err => 
            res.status(404).json({notweetfound: 'No post found with that ID'})
        );
})

router.patch('/:id', (req, res) => {
    // console.log(req.params.id)
    // Post.findById(req.params.id)
    //     .then(post => {
    //         post.body = req.body.body
    //         console.log(post)
    //         post.update().then(post => res.json(post));
    //     } )

        Post.findById(req.params.id)
        .then(post => {
            post.body = req.body.body;
            console.log(post)
            post.update();
        }).then(updatedPost => res.json(updatedPost));

    // console.log(updatedPost)
    // updatedPost.body = req.body.body
    // // console.log(updatedPost)
    // updatedPost.update().then(post => res.json(post));
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
            cardId: req.body.cardId,
            userId: req.body.userId
        });
        
        newPost.save().then(post => res.json(post));
    }
)

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.delete())
        .then(post => res.json(post.id));

} )
module.exports = router;

