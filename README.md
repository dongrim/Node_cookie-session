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

1. Usage

```js
// Method-1
res.cookie('name', 'Tom', {
  maxAge: 365 * 24 * 60 * 60 * 1000,
  httpOnly: true,
});
res.cookie('foo', '123');

// Method-2
res.writeHead(200, {
  'Set-Cookie': 'name=gildong',
});
res.setHeader('Set-Cookie', ['name=gildong; HttpOnly']);

// Output-1
console.log(req.headers.cookie); // type of output: string

// Output-2, require "cookie-parser"
console.log(req.cookies); // type of output: object[]
```

2. On browser side

| Name | value   | Expires / Max-Age        |
| ---- | ------- | ------------------------ |
| name | Tom     | 2023-03-28T02:00:30.432Z |
| foo  | 123     | Session                  |
| name | gildong | Session                  |

## Dependencies

- `express-session`
- `req.cookies: cookie-parser`
- `req.body:` app.use(express.json());
- `form data:` app.use(express.urlencoded({ extended: true }));
