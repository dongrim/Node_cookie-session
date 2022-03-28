const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
// const cookieParser = require("cookie-parser");
const port = process.env.PORT || 4041;
const express_session = require('./route/express-session');
const cookie_parser = require('./route/cookie-parser');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
// console.log(app.settings);

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      // sameSite: 'strict',
      // secure: true,
      // httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 1000, // expires 1 year
    },
  })
);
app.use('/session', express_session);
app.use('/cookie', cookie_parser);

app.listen(port, () => console.log('Server is running on PORT: %d', port));
