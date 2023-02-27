const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../model');
const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});