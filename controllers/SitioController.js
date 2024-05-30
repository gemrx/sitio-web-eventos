function getEventos(request, response) {
    response.render('eventos');
}

function getEvento(request, response) {
    response.render('detalle-evento');
}

module.exports = {
    getEventos,
    getEvento
};