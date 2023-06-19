const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    console.log("homepage rendering");
    try {
        const blogPostData = await BlogPost.findAll({
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'blogPostId', 'userId', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            order: [['created_at', 'DESC']],
        })
        const blogposts = blogPostData.map((post) => post.get({ plain: true }));
        console.log(blogPostData);
        console.log(blogposts);
        // Pass serialized data and session flag into template
        res.render('homepage', {
            blogposts,
            logged_in: req.session.logged_in,
            username: req.session.username,
            userId: req.session.userId
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
