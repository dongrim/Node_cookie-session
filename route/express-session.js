const router = require("express").Router();

router.get("/", (req, res, next) => {
  console.log(req.session);

  if (!req.session.viewCount) {
    req.session.viewCount = 1;
  } else {
    req.session.viewCount += 1;
  }
  res.render("index", { viewCount: req.session.viewCount });
  // req.session.destroy();
  // res.redirect("/login");
});

router.get("/root", (req, res) => {
  req.session.username = "Bob";
  console.log(req.session);
  console.log(req.session.username);
  res.send("Request has been done.");
});

module.exports = router;
