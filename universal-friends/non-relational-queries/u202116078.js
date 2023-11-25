// Obtener usuarios que comparten ciertos intereses
db.usuarios.find({
    intereses: {
        $in: ["Programación", "Fotografía"]
    }
})

// Obtener la lista de cursos únicos que han sido valorados
db.valoraciones.aggregate([
  { $group: { _id: null, cursos: { $addToSet: "$curso" } } },
  { $project: { _id: 0, cursos: 1 } }
])
