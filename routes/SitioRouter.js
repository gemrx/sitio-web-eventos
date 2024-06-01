const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/SitioController');

router.get('/', sitioController.getEventos);
router.get('/evento', sitioController.getEvento);
router.post('/evento/:id',sitioController.postRegistrarComentario);
module.exports = router;