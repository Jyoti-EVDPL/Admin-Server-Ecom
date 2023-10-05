require("dotenv").config();
const password =require('passport');
const User = require("../model/UserModel");
var jwtStragey = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

// var Employees = require("../models/UserModel");
var keys={};
keys.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
keys.secretOrKey = process.env.PRIVATE_KEY,

module.exports = function (passport) {
    passport.use(
        new jwtStragey(keys, function (jwt_payload, done) {
            if(!User.twoFSverified){
                done(null,jwt_payload);
            }
        })
    );
};

module.exports = function (passport) {
    passport.use(
        new jwtStragey(keys, function (jwt_payload, done) {
            done(null, jwt_payload);
        })
    );
};

// module.exports = function(passport){
//     new jwtStragey(
//         {
//             secretOrKey:process.env.PRIVATE_KEY,
//             jwtFromRequest: fromAuthHeaderAsBearerToken()
//         },
//         function(jwt_payload,cb){
//             cb(null,false);
//         }
//     )
// }

// --BY GPT--
// require("dotenv").config();
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const User = require("../model/UserModel"); // Replace with your actual User model

// const opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.PRIVATE_KEY,
// };

// module.exports = function (passport) {
//   passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
//     try {
//       // Find the user based on the ID in the JWT payload
//       const user = await User.findById(jwt_payload.userId);

//       if (user) {
//         // If the user is found, authentication is successful
//         return done(null, user);
//       } else {
//         // If user is not found, authentication fails
//         return done(null, false);
//       }
//     } catch (err) {
//       return done(err, false);
//     }
//   }));
// };