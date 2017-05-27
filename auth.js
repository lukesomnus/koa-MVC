import passport from 'koa-passport';
import * as UserService from './src/service/UserService';
import User from './src/data/model/User';

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(async function (id, done) {
  UserService.findOneById(id).then(user => {
    done(null, user)
  }).catch(err => {
    console.log(err)
  })
})

const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(function (username, password, done) {
  UserService.findOne(username)
    .then(user => {
      if (!user) return done(null, false, {
        message: 'Incorrect username.'
      })

      if (username === user.username && password === user.password) {
        done(null, user)
      } else {
        done(null, false, {
          message: 'Incorrect password.'
        })
      }
    })
    .catch(err => done(err))
}))