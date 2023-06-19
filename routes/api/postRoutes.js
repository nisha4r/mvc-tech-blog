const router = require('express').Router();
const { BlogPost, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/blogpost
router.post('/', withAuth, async (req, res) => {
    try {
        const createPost = await BlogPost.create({ ...req.body, userId: req.session.user_id });
        console.log("Create: ", createPost);
        res.status(200).json(createPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// /api/blogpost/:id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await BlogPost.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!updatedPost) {
            res.status(404).json({ message: 'Failed to update post' });
            return;
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// api/blogpost/:id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: { postId: req.params.id },
        });

        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                userId: req.session.user_id,
            },
        });
        if (!blogPostData) {
            res.status(404).json({
                message: `No user with id: ${req.session.user_id} found with id = ${req.params.id}`,
            });
            return;
        }

        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;