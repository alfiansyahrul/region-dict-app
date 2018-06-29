var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KamusApp Indo', desc: "inikamus" });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About KamusApp Indo', desc: "inikamus" });
});

module.exports = router;
