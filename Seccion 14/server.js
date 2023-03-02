const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const https = require('https');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { Strategy } = require('passport-google-oauth20');

require('dotenv').config();

const PORT = 3000;

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google profile', profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))


// GUARDAR LA SESSION A LA COOKIE
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// LEER LA SESION DESDE LA COOKIE
passport.deserializeUser((id, done) => {
  //User.findById(id).then(user => {
  //  done(null, user);
  //})
  done(null, id)
});

const app = express();


app.use(helmet()); //ESTE ES UN MIDDLEWARE QUE AYUDA A PROTEGER TODOS LOS ENDPOINTS
app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys: [ config.COOKIE_KEY_1, config.COOKIE_KEY_2 ],
}))


app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req, res, next) {
  console.log('Current user is:', req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;  
  if (!isLoggedIn) {
    return res.status(401).json({
      error:'you must log in'
    });
  }  
  next();
}


//AGREGANDO ENDPOINTS 
app.get('/auth/google', 
  passport.authenticate('google', {
    scope: ['email'], 
  }));

app.get('/auth/google/callback', 
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
    }), 
    (req, res) => {
      console.log('Google called back!!!!');
    });

app.get('/auth/logout', (req, res) => {
  req.logout(); //Remueve el req.user y limpia cualquier sesion logeada. 
  return res.redirect('/');
});


app.get('/secret', checkLoggedIn, (req, res) => {
    return res.send('Your personal secret value is 42');
});

app.get('/failure', (req, res) => {
  return res.send('Failed to Login')
} )

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});