const { getStories } = require('../controllers/stories');

const router = require('express').Router();

router.get('/', getStories)

module.exports = router;