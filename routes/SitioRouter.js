const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/SitioController');

router.get('/', sitioController.getEventos);
router.get('/evento/:id', sitioController.getEvento);
router.post('/evento/:id/usuarios', sitioController.postRegistrarUsuario);
router.post('/evento/:id/comentarios', sitioController.postRegistrarComentario);

module.exports = router;