# Procedimiento de expansión multilingüe — Ciudadanía Práctica

**Estado:** Procedimiento establecido para futuros idiomas.  
**Alcance:** Implementar idiomas de apoyo sin reconstruir ni alterar funciones de estudio ya validadas.

## Principios invariables

1. **Una sola fuente de información.** Se reutilizan las preguntas y respuestas oficiales en inglés, los datos de funcionarios y cargos variables, las respuestas dependientes del estado y sus enlaces oficiales, sin duplicar esos datos por idioma.
2. **No reinventar las funciones.** Se conservan navegación, selección por fecha y versión del examen, modalidad general/65-20, audio en inglés, calificación, progreso, celebración, repaso de incorrectas y funciones PWA existentes. La expansión se limita a contenido, interfaz y textos de ayuda; cualquier cambio funcional requiere justificación y pruebas explícitas.
3. **Paquetes separados por modalidad y versión.** Preparar el banco general 2008, el banco general 2025 y las selecciones especiales 65/20 correspondientes (20 preguntas por versión). Conservar los identificadores y la correspondencia con las preguntas originales.
4. **Calidad lingüística explícita.** Contrastar cada traducción con el contenido inglés oficial y referencias lingüísticas independientes. No presentar una revisión automatizada o editorial como certificación de un hablante nativo. Identificar traducciones pendientes de validación.
5. **El idioma es la primera selección.** Mostrar instrucciones en el idioma elegido desde el comienzo; guardar la preferencia y permitir cambiarla. Los textos oficiales de las preguntas y respuestas siguen en inglés, salvo requisitos/ excepciones legales aplicables.
6. **Usar el feedback existente.** Invitar, en el idioma seleccionado, a reportar errores, incongruencias y recomendaciones mediante el formulario que ya tiene el proyecto.
7. **Aislamiento de pruebas.** Preparar una versión de prueba independiente, no indexable y sin afectar la aplicación pública, su progreso, sus estadísticas PWA ni sus flujos de instalación.

## Flujo repetible para cada idioma

1. **Preparar contenido:** completar las traducciones y explicaciones de los paquetes general 2008, general 2025 y 65/20; reutilizar los datos dinámicos existentes.
2. **Comprobar integridad:** cobertura completa, identificadores correctos, ninguna traducción faltante, respuestas oficiales intactas y sin duplicaciones de lógica o datos.
3. **Revisar idioma:** consistencia terminológica, expresiones naturales, instrucciones, mensajes, pantalla de información, alertas, avisos, repaso y referencias externas. Marcar claramente limitaciones pendientes.
4. **Integrar los tres paquetes juntos en el piloto:** incorporar el selector de idioma y las traducciones sin activar el idioma en producción.
5. **Probar regresiones mínimas, no reconstruir:** verificar que los botones sigan funcionando —fecha/versión, modalidad, comenzar, escuchar, mostrar respuesta, correcta/incorrecta, continuar, pasar/fallar, celebración 65/20, refuerzo, reinicio, cambio de idioma— y que español permanezca intacto. Probar en escritorio y móvil cuando sea posible.
6. **Publicar solo tras validación:** completar controles de calidad y aprobar el lanzamiento; no anunciar exactitud lingüística garantizada ni afiliación gubernamental.
7. **Mantener una sola fuente:** futuras correcciones de funcionarios, geografía o respuestas aceptadas se hacen en el origen compartido, no en copias de cada idioma.

## Responsabilidades y criterio de salida

- **Asistente / desarrollo:** prepara paquetes, integra y realiza pruebas de código, correspondencia y consistencia; informa lo verificado y lo pendiente sin exagerar garantías.
- **Propietario:** prueba la experiencia y los controles. No tiene que conocer el nuevo idioma.
- **Revisión lingüística:** requiere fuentes independientes y, cuando sea posible, revisión competente adicional; el feedback público ayuda a mejorar pero no sustituye controles previos.

**Regla práctica:** *Contenido nuevo; funciones probadas. Se implementan los paquetes y se comprueba que los botones todavía funcionan.* 😄
