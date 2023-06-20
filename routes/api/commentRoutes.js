const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;