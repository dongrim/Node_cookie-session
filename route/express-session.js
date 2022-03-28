// const router = require('express').Router();
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  if (!req.session.viewCount) {
    req.session.viewCount = 1;
  } else {
    req.session.viewCount += 1;
  }
  console.log(req.session);
  res.render('index', { viewCount: req.session.viewCount });
});

router.get('/root', (req, res) => {
  req.session.username = 'Bob';
  console.log(req.session);
  console.log(req.session.username);
  res.send('Request has been done.');
});

router.get('/out', (req, res) => {
  req.session.destroy();
  res.redirect('/session');
});

module.exports = router;
