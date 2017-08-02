require('dotenv').config()
import passport from 'passport'
import PassportSpotify from 'passport-spotify'
import mongoose from 'mongoose'
import userModel from './../user/model'

const SpotifyStrategy = PassportSpotify.Strategy

userModel()

export default function () {
  const User = mongoose.model('User')

  passport.use(new SpotifyStrategy({
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/spotify/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOrCreate({ spotifyId: profile.id }, {name: profile.displayName, photo: profile.photos[0], email: profile._json.email}, function (err, user) {
      user.spotifyToken = accessToken
      return done(err, user)
    })
  }))
}
