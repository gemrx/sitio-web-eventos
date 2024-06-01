const eventos = [
  {
    idEvento: 1,
    titulo: "Hackathon kubernetes",
    descripcion:
      "Experimenta una competencia con otros desarrolladores y pon a prueba tus habilidades",
    fecha: "01/06/2024",
    ubicacion: "Ciudad del saber",
    usuariosIdRegistrados: ["idanielmatt", "rodolfo_biker"],
    idComentario: [1]
  },
  {
    idEvento: 2,
    titulo: "Hackathon linux",
    descripcion:
      "¿Sabes usar linux? ¡Unete a esta competencia y demuestra tus habilidades!",
    fecha: "01/10/2024",
    ubicacion: "Ciudad del saber",
    usuariosIdRegistrados: ["idanielmatt", "gilberto_m", "rodolfo_biker"],
    idComentario: [2, 3]
  },
  {
    idEvento: 3,
    titulo: "Hackathon azure",
    descripcion: "Nuevas tendencias, Azure, aprende y compite en la Nube ☁️",
    fecha: "01/06/2025",
    ubicacion: "Universidad Tecnológica de Panamá",
    usuariosIdRegistrados: ["gilberto_m", "rodolfo_biker"],
    idComentario: [4]
  },
];

const usuarios = [
  {
    id: "idanielmatt",
    nombre: "José García",
    email: "jose.garcia@gmail.com"
  },
  {
    id: "gilberto_m",
    nombre: "Gilberto Molinar",
    email: "gilber.molinar@gmail.com"
  },
  {
    id: "rodolfo_biker",
    nombre: "Rodolfo Abrego",
    email: "rodolfo.abrego@gmail.com"
  }
]

const comentarios = [
  {
    idComentario: 1,
    idEvento: 1,
    idUsuario: "idanielmatt",
    comentario: "Que gran evento."
  },
  {
    idComentario: 2,
    idEvento: 2,
    idUsuario: "rodolfo_biker",
    comentario: "sé algo de linux, se ve interesante.",
  },
  {
    idComentario: 3,
    idEvento: 2,
    idUsuario: "gilberto_m",
    comentario: "desbarataré esa competencia papa 😎.",
  },
  {
    idComentario: 4,
    idEvento: 3,
    idUsuario: "rodolfo_biker",
    comentario: "voy pa' esa.",
  }
]

module.exports = { eventos, usuarios, comentarios };
