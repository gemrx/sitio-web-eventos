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

class Evento {
    static ultimoId = 0;

    constructor(titlo, descripcion, fecha, ubicacion) {
        this.id = Evento.incrementarId();
        this.titlo = titlo;
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
        this.usuariosRegistrados.push(usuario);
    }

    registrarComentario(comentario) {
        this.comentariosRegistrados.push(comentario);
    }
}

// Crear usuarios
const usuario1 = new Usuario("Juan", "juan@example.com", "123456789");
const usuario2 = new Usuario("María", "maria@example.com", "987654321");
const usuario3 = new Usuario("Pedro", "pedro@example.com", "456789123");

// Crear comentarios
const comentario1 = new Comentario(usuario1, "¡Excelente evento!");
const comentario2 = new Comentario(usuario2, "Me encantó, espero el próximo.");
const comentario3 = new Comentario(usuario3, "Buen ambiente y organización.");

// Crear eventos y registrar usuarios y comentarios
const evento1 = new Evento("Evento A", "Descripción del evento A.", "2024-06-01", "Lugar A");
evento1.registrarUsuario(usuario1);
evento1.registrarUsuario(usuario2);
evento1.registrarUsuario(usuario3);
evento1.registrarComentario(comentario1);
evento1.registrarComentario(comentario2);
evento1.registrarComentario(comentario3);

const evento2 = new Evento("Evento B", "Descripción del evento B.", "2024-06-02", "Lugar B");
evento2.registrarUsuario(usuario1);
evento2.registrarUsuario(usuario2);
evento2.registrarUsuario(usuario3);
evento2.registrarComentario(comentario1);
evento2.registrarComentario(comentario2);
evento2.registrarComentario(comentario3);

console.log(evento1);
console.log(evento2);

