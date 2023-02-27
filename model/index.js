const User = require('./user');
const Post = require('./posts');
const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})