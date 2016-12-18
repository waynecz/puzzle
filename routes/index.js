const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const title = "首页";
    res.renderPage('index', {
		title
    });
});
router.get('/space', function (req, res, next) {
	const title = "空间";
	res.renderPage('space', {
		title
	});
});
module.exports = router;
