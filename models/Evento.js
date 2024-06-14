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
const usuario4 = new Usuario("Lucía", "lucia@hotmail.com", "321654987");
const usuario5 = new Usuario("María", "maria@live.com", "654123789");

// Crear comentarios
const comentario1 = new Comentario(usuario1.nombre, "gilberto@gmail.com", "Este evento fue una experiencia increíble. Las charlas fueron muy informativas y los ponentes, de primer nivel. ¡Definitivamente asistiré el próximo año!");
const comentario2 = new Comentario(usuario2.nombre, "jose@outlook.com", "Me encantó la organización del evento y la diversidad de temas tratados. Las sesiones de networking fueron especialmente útiles para conocer a otros profesionales del sector.");
const comentario3 = new Comentario(usuario3.nombre, "rodolfo@yahoo.com", "El ambiente fue fantástico, y la variedad de talleres ofrecidos fue impresionante. Aprendí mucho sobre las últimas tendencias en IoT y blockchain. ¡Muy recomendable!");
const comentario4 = new Comentario(usuario4.nombre, "lucia@hotmail.com", "Fue un evento bien organizado con una gran cantidad de contenido valioso. Las demostraciones en vivo y las sesiones prácticas me ayudaron a comprender mejor las nuevas tecnologías. ¡Esperando ya el próximo evento!");
const comentario5 = new Comentario(usuario5.nombre, "maria@live.com", "Una excelente oportunidad para actualizarse en el campo tecnológico. Las charlas sobre inteligencia artificial y ciberseguridad fueron particularmente reveladoras. El evento superó mis expectativas en todos los sentidos.");


// Crear eventos y registrar usuarios y comentarios
const evento1 = new Evento(
    "Hackathon Copa", 
    "Hackathon Copa es una competencia vibrante y emocionante donde desarrolladores de todo el mundo se reúnen para demostrar sus habilidades y creatividad en diversas categorías tecnológicas. Este evento no solo pone a prueba el conocimiento técnico de los participantes, sino que también fomenta la innovación, la colaboración y el espíritu emprendedor.", 
    "Del 21 al 24 de octubre", 
    "Ciudad del Saber"
);
evento1.registrarUsuario(usuario1);
evento1.registrarUsuario(usuario2);
evento1.registrarUsuario(usuario3);
evento1.registrarComentario(comentario1);
evento1.registrarComentario(comentario2);
evento1.registrarComentario(comentario3);

const evento2 = new Evento(
    "Tech Summit 2024", 
    "Tech Summit 2024 es una cumbre tecnológica de primer nivel que reúne a profesionales, entusiastas y líderes de la industria para explorar y debatir las últimas tendencias en software y hardware. Este evento es una plataforma integral donde los asistentes pueden participar en una variedad de talleres prácticos, charlas inspiradoras y sesiones de networking diseñadas para fomentar el aprendizaje, la colaboración y la innovación.", 
    "31 de diciembre del 2025", 
    "Panamá City"
);
evento2.registrarUsuario(usuario1);
evento2.registrarUsuario(usuario2);
evento2.registrarUsuario(usuario3);
evento2.registrarComentario(comentario3);
evento2.registrarComentario(comentario4);
evento2.registrarComentario(comentario5);

const evento3 = new Evento(
    "Desafío IoT", 
    "Desafío IoT es un evento dinámico y emocionante diseñado para explorar y desarrollar soluciones innovadoras utilizando tecnologías de Internet de las Cosas (IoT). Este desafío reúne a desarrolladores, ingenieros, diseñadores y emprendedores de diversos campos con el objetivo de crear dispositivos y sistemas que aprovechen el poder del IoT para resolver problemas del mundo real y mejorar la calidad de vida.", 
    "31 de octubre del 2030", 
    "Panamá City"
);
evento3.registrarUsuario(usuario1);
evento3.registrarUsuario(usuario2);
evento3.registrarUsuario(usuario3);
evento3.registrarComentario(comentario2);
evento3.registrarComentario(comentario4);
evento3.registrarComentario(comentario1);

let eventos = [evento1, evento2, evento3];

module.exports = { Usuario, Comentario, Evento, eventos };


