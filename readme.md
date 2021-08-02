 # Twenty-One MintBean Hiring Hackathon Project API

This is a RESTful API for a Hiring Hackathon. This API's purpose is to provide authentication as well as presist wins and losses for users. 

---

Technologies used in the backend include:

    - NodeJS
    - Express for a server and RESTful framework
    - JSON Web Tokens for authentication
    - Morgan for logging
    - Bcrypt for password hashing/salting
    - Mongoose for data modeling
    - MongoDB for a NOSQL database

---

### Development Endpoints
http://localhost:8080

Register - http://localhost:8080/register

Login - http://localhost:8080/login

Get User - http://localhost:8080/getUser/{user-id}

Get Leaderboard - http://localhost:8080/leaderboard/getLeaderboard

Update Score http://localhost:8080/leaderboard/updateScore/{user-id}gameWon={status}

status = 'won' or 'loss'

---
### Production Endpoints
https://twenty-one-api.herokuapp.com

Register - https://twenty-one-api.herokuapp.com/register

Login - http://localhost:8080/login

Get User - https://twenty-one-api.herokuapp.com/getUser/{user-id}

Get Leaderboard - https://twenty-one-api.herokuapp.com/leaderboard/getLeaderboard

Update Score https://twenty-one-api.herokuapp.com/leaderboard/updateScore/{user-id}?gameWon={status}

status = 'won' or 'loss'

--- 

# 