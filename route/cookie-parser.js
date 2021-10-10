const router = require("express").Router();
// require('cookie-parser'); // deprecated

router.get("/", (req, res) => {
  res.cookie("foo", "setting", {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  res.cookie("baz", "none");
  console.log(req.headers.cookie);
  // res.clearCookie("foo");
  res.render("index-cookie", { res });
});

router.get("/root", (req, res) => {
  res.writeHead(200, {
    "Set-Cookie": [
      "title_cookie=Bob",
      "password_cookie=200",
      `Permanent_cookie=maxAge; Max-Age=${60 * 60 * 24 * 30}`,
      `Secure_cookie=Secure; Secure`,
      `HttpOnly_cookie=HttpOnly; HttpOnly`,
      `Path_cookie=/cookie; Path=/cookie`,
      `Domain_cookie=localhost; Domain=localhost`,
    ],
  });
  console.log(req.headers);
  res.end("Request has been done.");
});

module.exports = router;
