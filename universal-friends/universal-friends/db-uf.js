use universal_friends

db.createCollection('usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
            'nombre',
            'apellido_paterno',
            'apellido_materno',
            'correo_electronico',
            'contrasenia',
            'carrera',
            'fecha_registro',
            'intereses'
            ],
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellido_paterno: {
                    bsonType: 'string'
                },
                apellido_materno: {
                    bsonType: 'string'
                },
                correo_electronico: {
                    bsonType: 'string'
                },
                contrasenia: {
                    bsonType: 'string'
                },
                carrera: {
                    bsonType: 'string'
                },
                fecha_registro: {
                    bsonType: 'date'
                },
                intereses: {
                    bsonType: 'array',
                    minItems: 1,
                    maxItems: 5,
                    items: {
                        bsonType: 'string'
                    }
                }
            }
        }
    }
})


db.createCollection('docentes', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['nombre', 'apellido_paterno', 'apellido_materno'],
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellido_paterno: {
                    bsonType: 'string'
                },
                apellido_materno: {
                    bsonType: 'string'
                }
            }
        }
    }
})

db.createCollection('valoraciones', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'codigo_usuario',
                'codigo_docente_valorado',
                'curso',
                'comentario',
                'puntuacion'
            ],
            properties: {
                codigo_usuario: {
                    bsonType: 'int'
                },
                codigo_docente_valorado: {
                    bsonType: 'int'
                },
                curso: {
                    bsonType: 'string'
                },
                comentario: {
                    bsonType: 'string'
                },
                puntuacion: {
                    bsonType: 'int',
                    minimum: 0,
                    maximum: 5
                }
            }
        }
    }
})

db.usuarios.insertMany([
  {
    _id: 1,
    nombre: 'Juan',
    apellido_paterno: 'Gómez',
    apellido_materno: 'Pérez',
    correo_electronico: 'juan@gmail.com',
    contrasenia: 'clave123',
    carrera: 'Ingeniería Informática',
    fecha_registro: new Date(),
    intereses: ['Programación', 'Tecnología']
  },
  {
    _id: 2,
    nombre: 'María',
    apellido_paterno: 'López',
    apellido_materno: 'Martínez',
    correo_electronico: 'maria@gmail.com',
    contrasenia: 'password456',
    carrera: 'Diseño Gráfico',
    fecha_registro: new Date(),
    intereses: ['Arte', 'Fotografía']
  },
  {
    _id: 3,
    nombre: 'Carlos',
    apellido_paterno: 'Ramírez',
    apellido_materno: 'García',
    correo_electronico: 'carlos@gmail.com',
    contrasenia: 'clave_secreta',
    carrera: 'Medicina',
    fecha_registro: new Date(),
    intereses: ['Salud', 'Deporte']
  },
  {
    _id: 4,
    nombre: 'Ana',
    apellido_paterno: 'Hernández',
    apellido_materno: 'Fernández',
    correo_electronico: 'ana@gmail.com',
    contrasenia: 'mi_pass123',
    carrera: 'Ingeniería Informática',
    fecha_registro: new Date(),
    intereses: ['Programación', 'Deporte']
  },
  {
    _id: 5,
    nombre: 'Javier',
    apellido_paterno: 'Martín',
    apellido_materno: 'Gutiérrez',
    correo_electronico: 'javier@gmail.com',
    contrasenia: 'secreto123',
    carrera: 'Biología',
    fecha_registro: new Date(),
    intereses: ['Biología Molecular', 'Investigación Científica']
  },
  {
    _id: 6,
    nombre: 'Laura',
    apellido_paterno: 'Díaz',
    apellido_materno: 'Vargas',
    correo_electronico: 'laura@gmail.com',
    contrasenia: '123456',
    carrera: 'Educación',
    fecha_registro: new Date(),
    intereses: ['Pedagogía', 'Educación Inclusiva']
  },
  {
    _id: 7,
    nombre: 'Alejandro',
    apellido_paterno: 'Fuentes',
    apellido_materno: 'Sánchez',
    correo_electronico: 'alejandro@gmail.com',
    contrasenia: 'password123',
    carrera: 'Administración de Empresas',
    fecha_registro: new Date(),
    intereses: ['Negocios', 'Emprendimiento']
  },
  {
    _id: 8,
    nombre: 'Isabel',
    apellido_paterno: 'Ortega',
    apellido_materno: 'Cruz',
    correo_electronico: 'isabel@gmail.com',
    contrasenia: 'miclave123',
    carrera: 'Arquitectura',
    fecha_registro: new Date(),
    intereses: ['Emprendimiento', 'Diseño Urbano']
  },
  {
    _id: 9,
    nombre: 'Sergio',
    apellido_paterno: 'Romero',
    apellido_materno: 'Molina',
    correo_electronico: 'sergio@gmail.com',
    contrasenia: 'pass123',
    carrera: 'Ingeniería Civil',
    fecha_registro: new Date(),
    intereses: ['Construcción', 'Sostenibilidad']
  },
  {
    _id: 10,
    nombre: 'Natalia',
    apellido_paterno: 'González',
    apellido_materno: 'Lara',
    correo_electronico: 'natalia@gmail.com',
    contrasenia: 'natalia_pass',
    carrera: 'Ingeniería Civil',
    fecha_registro: new Date(),
    intereses: ['Ecología', 'Sostenibilidad']
  }
]);

db.docentes.insertMany([
    {
        "_id": 1,
        "nombre": "Juan",
        "apellido_paterno": "Pérez",
        "apellido_materno": "Gómez"
    },
    {
        "_id": 2,
        "nombre": "María",
        "apellido_paterno": "López",
        "apellido_materno": "Martínez"
    },
    {
        "_id": 3,
        "nombre": "Carlos",
        "apellido_paterno": "García",
        "apellido_materno": "Fernández"
    },
    {
        "_id": 4,
        "nombre": "Ana",
        "apellido_paterno": "Martínez",
        "apellido_materno": "Ruiz"
    },
    {
        "_id": 5,
        "nombre": "Luis",
        "apellido_paterno": "Fernández",
        "apellido_materno": "Sánchez"
    },
    {
        "_id": 6,
        "nombre": "Laura",
        "apellido_paterno": "Sánchez",
        "apellido_materno": "Gómez"
    },
    {
        "_id": 7,
        "nombre": "Miguel",
        "apellido_paterno": "Ruiz",
        "apellido_materno": "López"
    },
    {
        "_id": 8,
        "nombre": "Elena",
        "apellido_paterno": "Gómez",
        "apellido_materno": "Sánchez"
    },
    {
        "_id": 9,
        "nombre": "Javier",
        "apellido_paterno": "Sánchez",
        "apellido_materno": "López"
    },
    {
        "_id": 10,
        "nombre": "Sofía",
        "apellido_paterno": "López",
        "apellido_materno": "Ruiz"
    }
])

db.valoraciones.insertMany([
    {
        "_id": 1,
        "codigo_usuario": 1,
        "codigo_docente_valorado": 1,
        "curso": "Matemática Básica",
        "comentario": "Excelente profesor, muy claro en sus explicaciones.",
        "puntuacion": 5
    },
    {
        "_id": 2,
        "codigo_usuario": 1,
        "codigo_docente_valorado": 2,
        "curso": "Programación 1",
        "comentario": "Interesantes clases, gran conocimiento del tema.",
        "puntuacion": 4
    },
    {
        "_id": 3,
        "codigo_usuario": 2,
        "codigo_docente_valorado": 2,
        "curso": "Matemática Básica",
        "comentario": "Buen profesor, siempre disponible para ayudar.",
        "puntuacion": 4
    },
    {
        "_id": 4,
        "codigo_usuario": 3,
        "codigo_docente_valorado": 2,
        "curso": "Programación 1",
        "comentario": "Clases dinámicas, fomenta la participación.",
        "puntuacion": 5
    },
    {
        "_id": 5,
        "codigo_usuario": 6,
        "codigo_docente_valorado": 10,
        "curso": "Química",
        "comentario": "Explicaciones claras, facilita el aprendizaje.",
        "puntuacion": 4
    },
    {
        "_id": 6,
        "codigo_usuario": 4,
        "codigo_docente_valorado": 9,
        "curso": "Diseño de Base de Datos",
        "comentario": "Muy buen docente, actualizado con la tecnología.",
        "puntuacion": 5
    },
    {
        "_id": 7,
        "codigo_usuario": 7,
        "codigo_docente_valorado": 5,
        "curso": "Comprensión y Producción de Lenguaje 1",
        "comentario": "Gran conocimiento artístico, clases motivadoras.",
        "puntuacion": 4
    },
    {
        "_id": 8,
        "codigo_usuario": 3,
        "codigo_docente_valorado": 7,
        "curso": "Economía",
        "comentario": "Enseñanza práctica, con ejemplos del mundo real.",
        "puntuacion": 5
    },
    {
        "_id": 9,
        "codigo_usuario": 4,
        "codigo_docente_valorado": 2,
        "curso": "Biología",
        "comentario": "Muy mal profesor, no lo recomiendo",
        "puntuacion": 1
    },
    {
        "_id": 10,
        "codigo_usuario": 10,
        "codigo_docente_valorado": 6,
        "curso": "Física",
        "comentario": "Excelente explicación de conceptos difíciles.",
        "puntuacion": 5
    }
])
