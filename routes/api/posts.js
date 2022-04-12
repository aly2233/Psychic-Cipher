
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Post = require('../../models/Post')
const validatePostInput = require('../../validation/posts')

router.get('/', (req, res) => {
    filter = req.query.cardId ? {cardId: req.query.cardId} : req.body.cardId ? {cardId: req.body.cardId} : {cardId: {$exists: true} }
    req.query.userId ? filter.userId = req.query.userId : req.body.userId ? filter.userId = req.body.userId : null
    filter.limit = req.query.limit || req.body.limit ? req.query.limit || req.body.limit : 0;
    filter.skip = req.query.skip || req.body.skip ? req.query.skip || req.body.skip : 0;

    // console.log(filter)
    // console.log(req.body)
    
    Post.find(filter)
        .sort({date: -1})
        .limit(filter.limit)
        .skip(filter.skip)
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found'}))
});


router.get('/users/:user_id/journal', (req, res) => {
    let filter = {userId: req.params.user_id}
    // req.query.userId ? filter.userId = req.query.userId : req.body.userId ? filter.userId = req.body.userId : null
    filter.limit = req.query.limit || req.body.limit ? req.query.limit || req.body.limit : 0;
    filter.skip = req.query.skip || req.body.skip ? req.query.skip || req.body.skip : 0;
    filter.cardId = { $exists: false }

    Post.find(filter)
        .sort({date: -1})
        .limit(req.query.limit|| req.body.limit || 0)
        .skip(req.query.skip|| req.body.skip || 0)
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found'}))
})

router.get('/cards/:id', (req, res) => {

})


router.get('/users/:user_id', (req, res) => {
    Post.find({userId: req.params.user_id})
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found from that user' }))
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch( err => 
            res.status(404).json({notweetfound: 'No post found with that ID'})
        );
})

router.patch('/:id', (req, res) => { 
        Post.findById(req.params.id)
        .then(post => Post.findByIdAndUpdate(req.params.id, {body: req.body.body},{new: true}))
        .then(updatedPost => res.json(updatedPost))
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

