Docentes con mayor puntuación promedio y cantidad de valoraciones recibidas:
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
      $group: {
        _id: "$_id",
        nombre: { $first: "$nombre" },
        apellido_paterno: { $first: "$apellido_paterno" },
        apellido_materno: { $first: "$apellido_materno" },
        puntuacion_promedio: { $avg: "$valoraciones.puntuacion" },
        cantidad_valoraciones: { $sum: 1 }
      }
    },
    {
      $sort: { puntuacion_promedio: -1 }
    }
  ]);


/*Mostrar a todos los docentes */
db.docentes.aggregate([
    {
      $project: {
        _id: 1,
        nombre: 1,
        apellido_paterno: 1,
        apellido_materno: 1
      }
    }
  ]);

