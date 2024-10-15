const express = require('express');
const router = express.Router();
const ctrlLocations = 
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/shop1', ctrlLocations.shop1);
router.get('/shop2', ctrlLocations.shop2);
router.get('/shop3', ctrlLocations.shop3);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;