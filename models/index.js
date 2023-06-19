const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'blogPostId',
    onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Comment.belongsTo(Post, {
    foreignKey: 'blogPostId',
});

