const express = require('express');
const { getTours, createTour, getTourById, updateTour, deleteTour } = require('../controllers/tourController');
const authenticateToken = require('../middlewares/authMiddleware')
const router = express.Router();

router.get('/', getTours);
router.post('/',authenticateToken, createTour);
router.get('/:id', getTourById);
router.put('/:id',authenticateToken, updateTour);
router.delete('/:id',authenticateToken, deleteTour);

module.exports = router;
