const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../model');
const withAuth = require('../../utils/auth');