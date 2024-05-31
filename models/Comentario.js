const Usuario = require('./Usuario');

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

module.exports = Comentario;