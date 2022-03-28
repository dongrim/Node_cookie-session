# Node_cookie-session

## Set session

1. Module install

```
yarn add express-session

```

2. Usage

```js
const session = require('express-session');

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'strict',
      secure: true,
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 1000, // expires 1 year
    },
  })
);

req.session.name = 'Bob';
console.log(req.session.name); // Bob
```

3. On browser side

| Name        | value        |
| ----------- | ------------ |
| connect.sid | s%3NoTqVp... |

## Set cookies

1. Module isn't required
2. Usage

```js
res.cookie('name', 'Tom', {
  maxAge: 365 * 24 * 60 * 60 * 1000,
  httpOnly: true,
});

res.cookie('foo', '123');

res.writeHead(200, {
  'Set-Cookie': 'name=gildong',
});

console.log(req.headers.cookie);
```

3. On browser side

| Name | value   | Expires / Max-Age        |
| ---- | ------- | ------------------------ |
| name | Tom     | 2023-03-28T02:00:30.432Z |
| foo  | 123     | Session                  |
| name | gildong | Session                  |

## Dependencies

- `express-session`
- ~~cookie-parser~~ : deprecated
