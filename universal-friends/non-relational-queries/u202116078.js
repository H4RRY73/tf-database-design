// Obtener usuarios que comparten ciertos intereses
db.usuarios.find({
    intereses: {
        $in: ["Programación", "Fotografía"]
    }
})
// Obtener la puntuación máxima y mínima para un docente específico 
db.valoraciones.aggregate([
  { $match: { codigo_docente_valorado: 3 } },
  { $group: { _id: null, max_puntuacion: { $max: "$puntuacion" }, min_puntuacion: { $min: "$puntuacion" } } }
])
