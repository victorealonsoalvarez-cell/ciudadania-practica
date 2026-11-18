# Auditoría lingüística y estructural — Vietnamita

**Fecha:** 2026-11-18  
**Proyecto:** Ciudadanía Práctica  
**Estado:** `REVISIÓN EDITORIAL Y ESTRUCTURAL COMPLETADA — NO CERTIFICADO LINGÜÍSTICAMENTE — NO PUBLICADO`

## Alcance inspeccionado

- `index.html`: fuente de las preguntas y respuestas oficiales en inglés, las preguntas 65/20 y las reglas de progreso, funcionarios y localidades.
- `locales/vi-general-2008.pending.json`: 100 entradas en vietnamita.
- `locales/vi-general-2025.pending.json`: 128 entradas en vietnamita.
- `locales/vi-65-20.draft.json`: 20 entradas 65/20 de 2008 y 20 de 2025.
- `locales/vi-packs.preview.js`: unión de los bancos anteriores para el piloto.
- `prueba-vietnamita-completa.html`: página separada de prueba, noindex.

Los 40 elementos 65/20 **son un subconjunto de las 228 preguntas generales**, no preguntas adicionales distintas.

## Validaciones efectuadas

1. **Cobertura:** 100/100 (2008), 128/128 (2025), 20/20 (65/20 de 2008), 20/20 (65/20 de 2025).
2. **Correspondencia:** las claves numéricas de los archivos coinciden con los bancos en inglés; no se detectaron números ausentes ni duplicados.
3. **Completitud:** no se detectaron preguntas o explicaciones vietnamitas vacías.
4. **Respuestas oficiales:** permanecen en los bancos originales en inglés; los archivos lingüísticos no sustituyen sus opciones de respuesta aceptada.
5. **Paridad 65/20:** las 20 preguntas del banco especial de 2008 coinciden en numeración y en inglés con el banco general 2008; las traducciones de los 40 ítems especiales coinciden con las del banco general correspondiente.
6. **Cantidad solicitada:** revisión programática de preguntas que exigen 1, 2, 3 o 5 respuestas; no se detectaron omisiones de la cantidad en la formulación vietnamita de esas preguntas.
7. **Contaminación de idioma:** no se detectaron signos de interrogación/exclamación españoles ni términos de interfaz españoles comunes dentro de las preguntas y explicaciones vietnamitas.
8. **Datos variables y locales:** se mantienen los identificadores y enlaces compartidos con la versión principal. No se crearon fuentes independientes de funcionarios, estado o distrito en los paquetes lingüísticos.
9. **Aislamiento:** el piloto está marcado `noindex,nofollow`, no registra instalaciones ni incluye el beacon de analítica, y usa claves de progreso de prueba distintas de la aplicación pública.
10. **Sintaxis:** los bloques de JavaScript de la página de prueba y el paquete lingüístico habían pasado comprobaciones estáticas; no equivale a ejecutar pruebas funcionales de navegador.
11. **Reglas de examen:** las dos versiones generales y la modalidad 65/20 coinciden con los requisitos de USCIS para fecha de solicitud, tamaño de banco y umbrales de aprobación.

## Revisión lingüística y editorial — cambios aplicados

| Banco / pregunta | Hallazgo | Acción |
|---|---|---|
| 2008, #5 | `Bộ luật Nhân quyền` no es la denominación de referencia preferida para `Bill of Rights`. | Se normalizó a `Tuyên ngôn Nhân quyền (Bill of Rights)`. |
| 2025, #6 | Mismo término para `Bill of Rights`. | Se adoptó `Tuyên ngôn Nhân quyền` para coherencia. |
| 2008, #58 | La pregunta vietnamita restringía innecesariamente a los colonos a personas procedentes de Europa. | Se reformuló la pregunta sin esa limitación. |
| 2025, #68 | La explicación de las vías de ciudadanía podía precisar las bases legales. | Se explicitó la Tu chính án thứ 14 y las condiciones establecidas por el Congreso. |

Se revisaron especialmente preguntas de múltiples respuestas, Historia, derechos cívicos, funcionarios, geografía, 65/20 y feriados nacionales.

**Discrepancia entre referencias:** el PDF vietnamita de USAHello de 2025 muestra la lista de feriados de la pregunta #126 sin **Juneteenth**. La publicación oficial de USCIS sí lo incluye; por tanto se preservó la lista oficial del banco inglés de Ciudadanía Práctica. En la aplicación, la traducción de apoyo ofrece ejemplos; no reemplaza la lista oficial.

USAHello informa además que revisa algunas traducciones y respuestas del banco de 2025 (notablemente #31, #33, #41, #48, #68 y #97). En caso de divergencia, **prevalece USCIS en inglés**.

## Fuentes externas usadas para contraste

- [USCIS — 2025 Civics Test, 128 Questions and Answers (documento original)](https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf)
- [USCIS — Study for the Test](https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test)
- [USAHello — información y traducciones en vietnamita](https://usahello.org/vi/quoc-tich/chuan-bi/cac-cau-hoi-kiem-tra-trong-bai-thi-quoc-tich/)
- [USAHello — traducción vietnamita, examen 2008](https://usahello.org/wp-content/uploads/2020/12/Vietnamese-English-100-civics-test-questions-1.pdf)
- [USAHello — traducción vietnamita, examen 2025](https://usahello.org/wp-content/uploads/2026/07/128_Civics_Questions_and_Answers_-_Vietnamese_FINAL.pdf)

Las traducciones de terceros se utilizaron como **fuentes de contraste**, no como material autorizado para copiar íntegramente.

## Límites y puertas de lanzamiento

**No se ha realizado** una revisión completa línea por línea por un lingüista nativo o traductor certificado. Las comprobaciones de estructura y los contrastes editoriales no permiten asegurar que todas las expresiones vietnamitas sean naturales o estén libres de errores sutiles.

**Tampoco se confirmó** con un navegador interactivo el recorrido completo del piloto combinado, incluyendo los bancos generales de 100 y 128 preguntas y el funcionamiento real en móvil. Las pruebas anteriores del usuario respaldan audio, celebración y refuerzo en la versión aislada 65/20, pero no sustituyen la regresión sobre el piloto completo.

Antes de un lanzamiento público:
- Verificar manualmente ambos bancos generales y la modalidad 65/20 en el piloto combinado.
- Revisar textos auxiliares, alertas y presentación móvil.
- Hacer una revisión lingüística adicional por una persona competente cuando sea posible, o comunicar claramente el estado beta y solicitar retroalimentación; el feedback **no equivale** a validación previa.
- Obtener aprobación explícita del propietario para incorporar vietnamita a la aplicación pública.

**Conclusión:** los tres paquetes están completos estructuralmente y sincronizados en el piloto; **no hay aval para afirmar calidad lingüística nativa certificada ni para publicar de manera automática.**
