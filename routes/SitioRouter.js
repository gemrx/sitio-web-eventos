const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/SitioController');

router.get('/', sitioController.getEventos);
router.get('/evento', sitioController.getEvento);

module.exports = router;