const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');
module.exports = router;

router.get('/', withAuth, (req, res) => {
    BlogPost.findAll({});

});
router.get('/create', withAuth, (req, res) => {
    res.render('createpost', { username: req.session.username });
});
router.get('/update/:id', withAuth, (req, res) => {
    BlogPost.findOne({});
});

