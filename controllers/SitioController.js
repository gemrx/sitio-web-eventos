const {eventos} = require("../models/detalles")
function getEventos(request, response) {
    response.render('eventos', {eventos});
}

function getEvento(request, response) {
    response.render('detalle-evento', {eventos});
}

function getVerEvento(req, res){
    const id = req.params.id;
    const evento = eventos.find(evento=>evento.idEvento==id);
    if(!evento)
        res.redirect("/404")
    res.render("detalle-evento", {evento})
}

module.exports = {
    getEventos,
    getEvento,
    getVerEvento
};