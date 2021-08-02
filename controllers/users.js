const User = require('../models/User');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;



async function register(req, res) {
  const user = new User(req.body);
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
  
  // server side password validation
  if (!regex.test(user.password)) {
    return res.status(400).json({'Error': 'password is not valid. Must have at least one uppercase letter, one lowercase letter, one number, and one special character.'})
  }

  try {
    await user.save();
    // Send back a JWT and the User
    const token = createJWT(user);
    res.json({ token, user });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token, user });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "60d" }
  );
}

module.exports = {
  register,
  login
};