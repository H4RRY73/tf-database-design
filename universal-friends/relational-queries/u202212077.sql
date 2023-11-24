-- Muestra una cierta cantidad de notificaciones mas recientes enviadas a un usuario en especifico
CREATE VIEW v_notificaciones_numeradas
AS
SELECT n.codigo,
       n.contenido,
       n.fecha_hora,
       n.codigo_receptor,
       tn.tipo                                        AS tipo_notificacion,
       ROW_NUMBER() OVER (ORDER BY n.fecha_hora DESC) AS numero_registro
FROM notificaciones AS n
         INNER JOIN tipos_notificacion AS tn ON n.codigo_tipo_notificacion = tn.codigo

CREATE FUNCTION f_ultimas_notificaciones_por_usuario(@codigo INT, @cantidad INT)
    RETURNS TABLE
        AS
        RETURN
            (
                SELECT codigo, contenido, fecha_hora, tipo_notificacion
                FROM v_notificaciones_numeradas
                WHERE codigo_receptor = @codigo
                  AND numero_registro <= @cantidad
            )

SELECT *
FROM f_ultimas_notificaciones_por_usuario(1, 5)

---------------------------------

-- Muestra todos los mensajes de un chat en especifico filtrados hasta una fecha dada
CREATE FUNCTION f_mensajes_por_chat_hasta_una_fecha(@codigo INT, @fecha DATE)
    RETURNS TABLE
        AS
        RETURN
            (
                SELECT m.codigo, nombre_perfil AS nombre_usuario, contenido, fecha_hora
                FROM mensajes AS m
                         INNER JOIN usuario_chat AS uc ON m.codigo_usuario_chat = uc.codigo
                         INNER JOIN usuarios AS u ON uc.codigo_usuario = u.codigo
                         INNER JOIN perfiles_de_usuario AS pdu ON u.codigo = pdu.codigo_usuario
                WHERE UC.codigo_chat = @codigo
                  AND CONVERT(DATE, m.fecha_hora) >= @fecha
            )

SELECT *
FROM f_mensajes_por_chat_hasta_una_fecha(1, '2023-01-15')
ORDER BY fecha_hora DESC

----------------------------------

-- Muestra todos el promedio de puntuación que se le ha dado a cada docente de un determinado curso
CREATE FUNCTION f_promedio_profesores_por_curso(@nombre_curso VARCHAR(100))
    RETURNS TABLE
        AS
        RETURN
            (
                SELECT v.codigo_docente_valorado                                          AS codigo_docente,
                       CONCAT(d.nombre, ' ', d.apellido_paterno, ' ', D.apellido_materno) AS nombre_docente,
                       AVG(puntuacion)                                                    AS promedio_puntuacion
                FROM valoraciones AS v
                         INNER JOIN docentes AS d ON V.codigo_docente_valorado = D.codigo
                         INNER JOIN cursos AS c ON V.codigo_curso = C.codigo
                WHERE c.nombre = @nombre_curso
                GROUP BY v.codigo_docente_valorado, CONCAT(d.nombre, ' ', d.apellido_paterno, ' ', D.apellido_materno)
            )

SELECT *
FROM f_promedio_profesores_por_curso('Matemática Discreta')
ORDER BY promedio_puntuacion DESC;
