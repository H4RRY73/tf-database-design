--AVISO--
--Problema con la cuenta de Italo en el Git, es por eso que Mathias lo sube por él
/* Buscar Carreras Seleccionadas */
 db.usuarios.aggregate([
    {
      $match: {
        $or: [
          { carrera: 'Ingeniería Informática' },
          { carrera: 'Medicina' },
          { carrera: 'Administración de Empresas' }
        ]
      }
    }
  ]);

  /*Contar Cantidad de usuarios por carrera */
  db.usuarios.aggregate([
    {
      $group: {
        _id: "$carrera",
        cantidad: { $count: {} }
      }
    }
  ]);

