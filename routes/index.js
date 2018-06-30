var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indonesia', { title: 'KamusApp Indo', desc: "inikamus" });
});

router.get('/jawa', function(req, res, next) {
  res.render('jawa', { title: 'KamusApp Indo', desc: "inikamus" });
});

router.get('/jawa-banten', function(req, res, next) {
  res.render('jawa-banten', { title: 'KamusApp Indo', desc: "inikamus" });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About KamusApp Indo', desc: "inikamus" });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Info KamusApp Indo', desc: "inikamus" });
});

module.exports = router;
