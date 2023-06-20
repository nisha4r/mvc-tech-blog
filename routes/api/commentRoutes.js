const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

});

router.get('/:id', async (req, res) => {

});

router.post('/', withAuth, async (req, res) => {

});
module.exports = router;