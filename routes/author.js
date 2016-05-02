var express = require('express');
var router = express.Router();

// GET /author
router.get('/author', function (req, res) {
	res.render('author');
});

module.exports = router;