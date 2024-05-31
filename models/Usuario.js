class Usuario {
    static ultimoId = 0;

    constructor(nombre, email, telefono) {
        this.id = Usuario.incrementarId();
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    static incrementarId() {
        this.ultimoId = this.ultimoId + 1;
        return this.ultimoId;
    }
}

let usuariosRegistradosEnSitioWeb = []; // usuarios registrados en el sitio web

module.exports = {
    Usuario,
    usuariosRegistradosEnSitioWeb
};