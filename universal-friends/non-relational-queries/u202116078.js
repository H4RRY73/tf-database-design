// Obtener usuarios que comparten ciertos intereses
db.usuarios.find({
    intereses: {
        $in: ["Programación", "Fotografía"]
    }
})
// Obtener el número total de valoraciones para un curso específico 
db.valoraciones.aggregate([
  { $match: { curso: 'Economía' } },
  { $group: { _id: null, total_valoraciones: { $sum: 1 } } }
])
