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
  key:'mySession'
}, app))

app.use(bodyParser());
app.use(logger());
app.use(serve('./src/view'))

require('./auth');

app.use(passport.initialize())
app.use(passport.session())


app.use(router.routes())
  .use(router.allowedMethods());

app.use(function (ctx, next) {
  if (ctx.isAuthenticated()) {
    return next()
  } else {
    ctx.redirect('/login.html')
  }
})

app.listen(3000);