// Calcula el total de valoraciones para cada usuario, ordenado de mayor a menor:
db.valoraciones.aggregate([
    { $group: { _id: "$codigo_usuario", total_valoraciones: { $count: {} } } },
    { $sort: { total_valoraciones: -1 } }
]);

// Calcula el índice de satisfacción de cada docente, considerando la cantidad de valoraciones y la puntuación promedio
db.valoraciones.aggregate([
    { $group: { _id: "$codigo_docente_valorado", total_valoraciones: { $count: {} }, promedio_puntuacion: { $avg: "$puntuacion" } } },
    { $project: { _id: 1, indice_satisfaccion: { $multiply: ["$total_valoraciones", "$promedio_puntuacion"] } } }
]);
