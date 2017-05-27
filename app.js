import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import serve from 'koa-static';
import session from 'koa-session';
import passport from 'koa-passport';
import router from './router';



const app = new Koa();

app.keys = ['timieSecret']
app.use(session({
  // key:'luke'
}, app))

app.use(bodyParser());
app.use(logger());
app.use(serve('./src/view'))


// app.use(ctx => {
//   // ignore favicon
//   if (ctx.path === '/favicon.ico') return;
//   ctx.session.hah = 'sdsd'
//   console.log(ctx.session)
//   console.log(ctx.cookies.timieSecret)
// });

require('./auth');

app.use(passport.initialize())
app.use(passport.session())

const fs = require('fs')


app.use(router.routes())
  .use(router.allowedMethods());

app.use(function (ctx, next) {
  console.log(ctx.originalUrl)
  console.log('--------------')
  if (ctx.isAuthenticated()) {
    return next()
  } else {
    ctx.redirect('/login.html')
  }
})
app.listen(3000);