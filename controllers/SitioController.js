const { Usuario, Comentario, Evento, eventos } = require('../models/Evento');

function getEventos(request, response) {
    response.render('eventos', {eventos});
}

function getEvento(request, response) {
    response.render('detalle-evento');
}
function postRegistrarComentario(request, response){
    const id = parseInt(request.params.id);

}
module.exports = {
    getEventos,
    getEvento
};