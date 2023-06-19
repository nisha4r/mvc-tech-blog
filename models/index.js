const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
    foreignKey: 'userId',
});
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
    foreignKey: 'blogPostId',
});

Post.hasMany(Comment, {
    foreignKey: 'blogPostId',
    onDelete: 'CASCADE'
});


module.exports = { User, Comment, Post };