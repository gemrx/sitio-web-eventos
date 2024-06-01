const { text } = require('express');
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
    const idEvento = parseInt(request.params.id);
    const evento = eventos.find((elemento) => elemento.id === idEvento);
    const autor = request.body.inputComentarioNombre;
    const email = request.body.inputComentarioEmail;
    const mensaje = request.body.inputComentarioTexto;
    const nuevoComentario = new Comentario(autor, email, mensaje);
    evento.registrarComentario(nuevoComentario);
    response.render('detalle-evento', {evento});
}

function postRegistrarUsuario(request, response){
    
    const idEvento = parseInt(request.params.id);
    const evento = eventos.find((elemento) => elemento.id === idEvento);
    const nombre = request.body.inputNombre;
    const email = request.body.inputEmail;
    const telefono = request.body.inputTelefono;
    const nuevoUsuario = new Usuario(nombre, email, telefono)
    evento.registrarUsuario(nuevoUsuario);
    response.render('detalle-evento', {evento});
}


module.exports = {
    getEventos,
    getEvento,
    postRegistrarUsuario,
    postRegistrarComentario
};