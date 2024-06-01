const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/SitioController');

router.get('/', sitioController.getEventos);
router.get('/evento', sitioController.getEvento);
router.get('/detalle-evento/:id', sitioController.getVerEvento);




module.exports = router;