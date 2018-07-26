var express = require('express');
var router = express.Router();

const db = [
    {
      indonesia: '...', // do'nt delete or modify this init
      jawa: '...', // don't delete or modify this init
      banten: '...', // don't delete or modify this init
    },
    {
      indonesia: 'baju',
      jawa: 'klambi',
      banten: 'jamang',
    },
    {
      indonesia: 'dia',
      jawa: 'deke',
      banten: 'nyana',
    },
    {
      indonesia: 'sangat',
      jawa: 'eram',
      banten: 'jasa',
    },
    {
      indonesia: 'susah',
      jawa: 'angel',
      banten: 'gati',
    },
    {
      indonesia: 'seperti',
      jawa: 'koyo',
      banten: 'doang',
    },
    {
      indonesia: 'tidak pernah',
      jawa: 'ora pernah',
      banten: 'tilok',
    },
    {
      indonesia: 'mereka',
      jawa: 'deke',
      banten: 'maraneh',
    },
    {
      indonesia: 'melihat',
      jawa: 'ndelok',
      banten: 'noong',
    },
    {
      indonesia: 'makan',
      jawa: 'madang',
      banten: 'hakan',
    },
    {
      indonesia: 'kenapa',
      jawa: 'ngopo',
      banten: 'pan',
    },
    {
      indonesia: 'singkong',
      jawa: 'telo',
      banten: 'dangdeur',
    },
    {
      indonesia: 'tidak mau',
      jawa: 'wegah',
      banten: 'embung',
    },
    {
      indonesia: 'belakang',
      jawa: 'mburi',
      banten: 'tukang',
    },
    {
      indonesia: 'repot',
      jawa: 'repot',
      banten: 'haliwu',
    },
    {
      indonesia: 'teman',
      jawa: 'konco',
      banten: 'orok',
    },
    {
      indonesia: 'aku',
      jawa: 'aku',
      banten: 'aing',
    }
  ]

const init = db.filter(item => item.indonesia === '...');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indonesia', { title: 'KamusApp Indo', desc: "inikamus", result: init, errorMessage: '' });
});

router.get('/jawa', function(req, res, next) {
  res.render('jawa', { title: 'KamusApp Indo', desc: "inikamus", result: init, errorMessage: '' });
});

router.get('/jawa-banten', function(req, res, next) {
  res.render('jawa-banten', { title: 'KamusApp Indo', desc: "inikamus", result: init, errorMessage: '' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About KamusApp Indo', desc: "inikamus" });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Info KamusApp Indo', desc: "inikamus" });
});

// Indonesia to jawa/banten
router.post('/indonesia', function(req, res, next) {
  const word = req.body.word;
  const filteredArray = db.filter(item => item.indonesia === word);
  if (filteredArray.length != 0) {
    res.render('indonesia', {result: filteredArray, errorMessage: ''} );
  } else {
    res.render('indonesia', {result: init, errorMessage: 'Kata tidak ditemukan'} );
  }
});

// Jawa to indonesia/banten
router.post('/jawa', function(req, res, next) {
  const word = req.body.word;
  const filteredArray = db.filter(item => item.jawa === word);
  if (filteredArray.length != 0) {
    res.render('jawa', {result: filteredArray, errorMessage: ''} );
  } else {
    res.render('jawa', {result: init, errorMessage: 'Kata tidak ditemukan'} );
  }
});

// Banten to indonesia/jawa
router.post('/banten', function(req, res, next) {
  const word = req.body.word;
  const filteredArray = db.filter(item => item.banten === word);
  if (filteredArray.length != 0) {
    res.render('jawa-banten', {result: filteredArray, errorMessage: ''} );
  } else {
    res.render('jawa-banten', {result: init, errorMessage: 'Kata tidak ditemukan'} );
  }
});


module.exports = router;
