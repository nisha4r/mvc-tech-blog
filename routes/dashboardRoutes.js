const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');
module.exports = router;

router.get('/', withAuth, (req, res) => {
    BlogPost.findAll({}).then((data) => {
        if (!data) {
            res.status(404).json({ message: 'Get All Blog Post Failed' });
            return;
        }
        const blogpost = data.get({ plain: true });
        res.render('dashboard', { blogpost, loggedIn: true, username: req.session.username });
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
    BlogPost.findOne({})
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

