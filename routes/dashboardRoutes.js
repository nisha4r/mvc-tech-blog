const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    BlogPost.findAll({
        where: {
            userId: req.session.user_id,
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
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
    }).then((data) => {
        const blogposts = data.map((post) => post.get({ plain: true }));
        res.render('dashboard', { blogposts, loggedIn: true, username: req.session.username,});
    })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/create', withAuth, (req, res) => {
    res.render('createblog', { username: req.session.username });
});
router.get('/update/:id', withAuth, (req, res) => {
    BlogPost.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['id', 'comment', 'blogPostId', 'userId', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
        ],
    })
        .then((updateData) => {
            if (!updateData) {
                res.status(404).json({ message: 'Update Post Failed' });
                return;
            }
            const blogpost = updateData.get({ plain: true });
            res.render('updateblog', { blogpost, loggedIn: true, username: req.session.username });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;