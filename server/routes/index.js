const express = require('express');
const router = express.Router();
const PollControllers = require('../controllers/polls');

// CREATE
router.post('/create', PollControllers.createNewPoll)

module.exports = router;