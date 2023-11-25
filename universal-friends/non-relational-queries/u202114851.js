// Puntuacion promedio por curso
db.valoraciones.aggregate([
    {
       $group: {
          _id: "$curso",
          puntuacion_promedio: { $avg: "$puntuacion" }
       }
    }
]);

// Obtener el nombre del docente y la puntacion de este
db.docentes.aggregate([
   {
      $lookup: {
         from: "valoraciones",
         localField: "_id",
         foreignField: "codigo_docente_valorado",
         as: "valoraciones"
      }
   },
   {
      $project: {
         _id: 0,
         nombre_docente: "$nombre",
         puntuacion_promedio: {
            $avg: "$valoraciones.puntuacion"
         }
      }
   }
]);