const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

require('./config');

const userRouter = require('./routes/users');
const leaderboardRouter = require('./routes/leaderboard');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/', userRouter);
app.use('/leaderboard', leaderboardRouter);

app.listen(port, console.log(`Server online. http://localhost:${port}`));