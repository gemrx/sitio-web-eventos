const Usuario = require('./Usuario');

class Comentario {
    static ultimoId = 0;

    constructor(autor, email, mensaje) {
        this.id = Comentario.incrementarId();
        this.autor = autor; // objeto de tipo Usuario
        this.email = email;
        this.mensaje = mensaje;
    }

    static incrementarId() {
        this.ultimoId = this.ultimoId + 1;
        return this.ultimoId;
    }
}

class Evento {
    static ultimoId = 0;

    constructor(titulo, descripcion, fecha, ubicacion) {
        this.id = Evento.incrementarId();
        this.titulo = titulo;
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
const usuario1 = new Usuario("Gilberto", "gilberto@gmail.com", "123456789");
const usuario2 = new Usuario("José", "jose@outlook.com", "987654321");
const usuario3 = new Usuario("Rodolfo", "rodolfo@yahoo.com", "456789123");

// Crear comentarios
const comentario1 = new Comentario(usuario1.nombre, "gilberto@gmail.com", "¡Excelente evento!");
const comentario2 = new Comentario(usuario2.nombre, "jose@outlook.com", "Me encantó, espero el próximo.");
const comentario3 = new Comentario(usuario3.nombre, "rodolfo@yahoo.com", "Buen ambiente y organización.");

// Crear eventos y registrar usuarios y comentarios
const evento1 = new Evento("Hackathon Copa", "Una competencia donde desarrolladores compiten en diversas categorías tecnológicas.", "2024-06-01", "Ciudad del Saber");
evento1.registrarUsuario(usuario1);
evento1.registrarUsuario(usuario2);
evento1.registrarUsuario(usuario3);
evento1.registrarComentario(comentario1);
evento1.registrarComentario(comentario2);
evento1.registrarComentario(comentario3);

const evento2 = new Evento("Tech Summit 2024", "Una cumbre tecnológica con talleres y charlas sobre las últimas tendencias en software y hardware.", "2024-07-15", "Panamá City");
evento2.registrarUsuario(usuario1);
evento2.registrarUsuario(usuario2);
evento2.registrarUsuario(usuario3);
evento2.registrarComentario(comentario1);
evento2.registrarComentario(comentario2);
evento2.registrarComentario(comentario3);

const evento3 = new Evento("Desafío IoT", "Un evento para explorar y desarrollar soluciones innovadoras utilizando tecnologías de Internet de las Cosas.", "2024-09-10", "Panamá City");
evento3.registrarUsuario(usuario1);
evento3.registrarUsuario(usuario2);
evento3.registrarUsuario(usuario3);
evento3.registrarComentario(comentario1);
evento3.registrarComentario(comentario2);
evento3.registrarComentario(comentario3);

let eventos = [evento1, evento2, evento3];

module.exports = { Usuario, Comentario, Evento, eventos };


