const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    const token = req.headers?.authorization.split(' ')[1];

    if(!token){
        return res.status({'msg' : 'Token not found'});
    }

   jwt.verify(token, process.env.secretKey, (err, decoded) => {
      if(decoded){
        req.body.userID = decoded.userID;
        req.body.username = decoded.username;
        next();
      }
      else{
        res.status(400).send({'msg' : 'Invalid token'})
      }
   });
}

module.exports = auth;