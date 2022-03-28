const express = require('express');
const app = express();
const port = process.env.PORT || 4042;
const morgan = require('morgan');
const session = require('express-session');
// const cookieParser = require('cookie-parser');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      // sameSite: 'strict',
      // secure: true,
      httpOnly: true,
      // maxAge: 365 * 24 * 60 * 60 * 1000, // expires 1 year
    },
    // name: 'connect.sid', // set name of session, default value is connect.sid
  })
);

app.get('/', (req, res) => {
  console.log(req.session);
  if (req.session.name) {
    const output = `
      <h2>Login Success!</h2>
      <p>Hello, ${req.session.name}</p>
    `;
    res.send(output);
  } else {
    const output = `
      <h2>Login please.</h2>
    `;
    res.send(output);
  }
});

app.get('/login', (req, res) => {
  console.log(req.session);
  req.session.name = 'Jake';
  res.end('Login Success!');
});

app.get('/logout', (req, res) => {
  res.clearCookie('connect.sid');
  res.end('Logged out.');
});

app.listen(4042, () => console.log(`Server running on PORT: ${port}`));
