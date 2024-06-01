const { Usuario, Comentario, Evento, eventos } = require('../models/Evento');

function getEventos(request, response) {
    response.render('eventos', {eventos});
}

function getEvento(request, response) {
    const id = parseInt(request.params.id);
    const evento = eventos.find((elemento) => elemento.id === id);
    response.render('detalle-evento', {evento});
}

function postRegistrarComentario(request, response){
    const id = parseInt(request.params.id);

}
module.exports = {
    getEventos,
    getEvento
};