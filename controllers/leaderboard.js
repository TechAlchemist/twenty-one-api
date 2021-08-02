const User = require('../models/User');

async function updateScore(req, res) {
    let gameWon = req.query.gameWon;
    if (gameWon != 'won' || gameWon != 'loss') return res.status(500).json({"message": "Could not record game due to malformed query string."});
    User.findById(req.params.id, (error, user) => {
        if (error) res.status(500).json({"message": "Failed to record game."});
        user.gamesPlayed++;
        if (gameWon === 'won') {
            user.wins++;
        }
        else {
            user.losses++;
        }
        try {
            user.save();
            return res.status(200).json({"status": "Game recorded."});
        } 
        catch {
            res.status(500).json({"message": "Failed to record game."});
        }
   }); 
} 

async function getLeaderboard(req, res) {
    let scores = await User.find({});
    scores = scores.sort((x, y) => {
        return ((y.wins - y.losses) - (x.wins - x.losses));
    })
    return res.json({"scores": scores});
}

module.exports = {
    updateScore,
    getLeaderboard
}
