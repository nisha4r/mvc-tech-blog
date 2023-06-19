const User = require('./User');
const Comment = require('./Comment');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {
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
BlogPost.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPostId',
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPostId',
    onDelete: 'CASCADE'
});


module.exports = { User, Comment, BlogPost };