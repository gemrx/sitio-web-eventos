const Usuario = require('./Usuario');
const Comentario = require('./Comentario');

class Evento {
    static ultimoId = 0;

    constructor(titlo, descripcion, fecha, ubicacion) {
        this.id = Evento.incrementarId();
        this.titlo - titlo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.usuariosRegistrados = []; // arreglo de objetos de tipo Usuario
        this.comentariosRegistrados = []; // arreglo de objetos de tipo Comentario
    }

    static incrementarId() {
        this.ultimoId = this.ultimoId + 1;
        return this.ultimoId;
    }

    registrarUsuario(usuario) {
        this.usuariosRegistrados.push(usuario);
    }

    registrarComentario(comentario) {

        // agregar logica para verificar si el usuario ya existe en dicho evento

        this.comentariosRegistrados.push(comentario);
    }
}