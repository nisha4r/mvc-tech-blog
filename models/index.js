const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(BlogPost, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

