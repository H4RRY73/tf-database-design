
db.usuarios.aggregate([
  {
    $group: {
      _id: { $year: "$fecha_registro" },
      cantidad: { $count: {} }
    }
  },
  {
    $sort: { _id: 1 }
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

