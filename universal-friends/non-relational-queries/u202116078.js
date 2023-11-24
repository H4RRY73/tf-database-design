// Obtener usuarios que comparten ciertos intereses
db.usuarios.find({
    intereses: {
        $in: ["interes1", "interes2"]
    }
})
// falta unnaaa
