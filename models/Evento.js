const {Usuario, usuariosRegistradosEnSitioWeb} = require('./Usuario');

class Comentario {
    static ultimoId = 0;

    constructor(autor, mensaje) {
        this.id = Comentario.incrementarId();
        this.autor = autor; // objeto de tipo Usuario
        this.mensaje = mensaje;
    }

    static incrementarId() {
        this.ultimoId = this.ultimoId + 1;
        return this.ultimoId;
    }
}

class Evento {
    static ultimoId = 0;

    constructor(titlo, descripcion, fecha, ubicacion) {
        this.id = Evento.incrementarId();
        this.titlo - titlo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.usuariosRegistrados = []; // usuarios registrados en dicho evento
        this.comentariosRegistrados = [];
    }

    static incrementarId() {
        this.ultimoId = this.ultimoId + 1;
        return this.ultimoId;
    }

    registrarUsuario(usuario) {
        // verificar si el usuario esta registrado en el sitio web antes de registrarlo en el evento
    }

    registrarComentario(comentario) {
        
        // verificar si el usuario esta registrado en el sitio web antes de comentar
    }
}
