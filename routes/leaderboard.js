const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboard');

router.post('/updateScore/:id', leaderboardController.updateScore);
router.get('/getLeaderboard', leaderboardController.getLeaderboard);

module.exports = router;