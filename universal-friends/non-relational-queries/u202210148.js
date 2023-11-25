/*Mostrar la cantidad de usuarios por carrera y género utilizando */
db.usuarios.aggregate([
    {
      $group: {
        _id: { carrera: "$carrera", genero: "$genero" },
        cantidad: { $count: {} }
      }
    }
  ]);
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

