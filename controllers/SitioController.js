const { Usuario, Comentario, Evento, eventos } = require('../models/Evento');

function getEventos(request, response) {
    response.render('eventos', {eventos});
}

function getEvento(request, response) {
    response.render('detalle-evento');
}

module.exports = {
    getEventos,
    getEvento
};