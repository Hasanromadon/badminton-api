const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();


router.route('/news').get(apiController.getAllNews);
router.route('/news/:id').get(apiController.getNews);
router.route('/players').get(apiController.getAllPlayers);
router.route('/players/:id').get(apiController.getPlayer);


module.exports = router;    