const eventos = [
  {
    idEvento: 1,
    titulo: "Hackathon kubernetes",
    descripcion:
      "Experimenta una competencia con otros desarrolladores y pon a prueba tus habilidades",
    fecha: "01/06/2024",
    ubicacion: "Ciudad del saber",
    usuariosIdRegistrados: ["idanielmatt", "gilberto_m", "rodolfo_biker"],
    comentarios: {
      1: {
        idUsuario: "idanielmatt",
        comentario: "el mejor evento que experimenté.",
      },
      2: {
        idUsuario: "gilberto_m",
        comentario: "el mejor evento que experimenté.",
      },
    },
  },
  {
    idEvento: 2,
    titulo: "Hackathon linux",
    descripcion:
      "¿Sabes usar linux? ¡Unete a esta competencia y demuestra tus habilidades!",
    fecha: "01/10/2024",
    ubicacion: "Ciudad del saber",
    usuariosIdRegistrados: ["idanielmatt", "gilberto_m", "rodolfo_biker"],
    comentarios: {
      1: {
        idUsuario: "rodolfo_biker",
        comentario: "sé algo de linux, se ve interesante.",
      },
      2: {
        idUsuario: "gilberto_m",
        comentario: "desbarataré esa competencia papa 😎.",
      },
    },
  },
  {
    idEvento: 3,
    titulo: "Hackathon azure",
    descripcion: "Nuevas tendencias, Azure, aprende y compite en la Nube ☁️",
    fecha: "01/06/2025",
    ubicacion: "Universidad Tecnológica de Panamá",
    usuariosIdRegistrados: ["gilberto_m", "idanielmatt", "rodolfo_biker"],
    comentarios: {
      1: {
        idUsuario: "rodolfo_biker",
        comentario: "voy pa'esa.",
      },
      2: {
        idUsuario: "gilberto_m",
        comentario: "No habia escuchado de azure antes, me apunto.",
      },
      3: {
        idUsuario: "idanielmatt",
        comentario: "Mi primera hackathon en la nube, no me la pierdo.",
      },
    },
  },
];

module.exports = { eventos };
