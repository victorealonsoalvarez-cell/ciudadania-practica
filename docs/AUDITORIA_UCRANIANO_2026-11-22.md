# Auditoría editorial y técnica — versión ucraniana de Ciudadanía Práctica

**Fecha:** 22 de noviembre de 2026  
**Estado:** AUDITORÍA ESTRUCTURAL Y EDITORIAL COMPLETADA — PILOTO SIN PUBLICAR — REVISIÓN LINGÜÍSTICA HUMANA PENDIENTE

## Material revisado

- Fuente canónica de preguntas y respuestas en inglés: `index.html`, bancos 2008 y 2025.
- Traducciones y notas propias: `locales/uk-general-2008.draft.json` (100) y `locales/uk-general-2025.draft.json` (128).
- Selecciones especiales derivadas: `locales/uk-65-20.draft.json` (20 por versión).
- Recurso conjunto del piloto: `locales/uk-packs.preview.js`.
- Interfaz: `locales/uk-ui.preview.js` y `prueba-ucraniano-completa.html`.

Las 40 entradas de 65/20 reutilizan preguntas de los 228 ítems generales; **no son 40 preguntas distintas adicionales**.

## Contraste de las fuentes

1. **USCIS (autoridad final):** [128 preguntas y respuestas, examen 2025](https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf). Confirmados criterios, términos y respuestas de referencia, entre otros, #10, #14, #49, #68, #70, #72, #80, #93, #97, #101, #109, #118 y #126.
2. **USAHello:** [PDF bilingüe ucraniano-inglés de 2008](https://usahello.org/wp-content/uploads/2025/05/Ukrainian-English-Ukrainian-English-100-civics-test-questions.pdf); útil para comprobar vocabulario cívico y alcance de las preguntas originales. El PDF oficial de 2008 de USCIS no pudo recuperarse directamente en esta sesión (403); la correspondencia inglesa se verificó contra el banco canónico del proyecto, más esa referencia bilingüe.
3. **USAHello:** [PDF ucraniano-inglés de 2025](https://usahello.org/wp-content/uploads/2025/10/128-Civics-Questions-and-Answers-Ukrainian.pdf), y [guía actualizada](https://usahello.org/uk/%D0%B3%D1%80%D0%BE%D0%BC%D0%B0%D0%B4%D1%8F%D0%BD%D1%81%D1%82%D0%B2%D0%BE/%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0/%D1%82%D0%B5%D1%81%D1%82-%D0%BD%D0%B0-%D0%B3%D1%80%D0%BE%D0%BC%D0%B0%D0%B4%D1%8F%D0%BD%D1%81%D1%82%D0%B2%D0%BE-%D0%B7%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%BD%D1%8F/). USAHello advierte que sus archivos traducidos están en revisión para cambios del examen 2025, por ejemplo #31, #33, #41, #48, #68 y #97. **En caso de discrepancia prevalece el inglés oficial de USCIS**.
4. **Referencia suplementaria:** [Patina Education — ucraniano/inglés, 2025](https://patinaeducation.com/uk/128-pytan-pro-hromadianstvo), usada para cotejar términos, sin copiar traducciones.

Se utilizan los materiales externos **para contraste, no como fuente para reproducir íntegramente textos con derechos de autor**.

## Cambios verificados y aplicados

| Banco | Pregunta | Motivo | Acción |
|---|---:|---|---|
| 2008 | 6 | Concordancia poco natural en la formulación de «una libertad o derecho» de la Primera Enmienda | Se reformuló en ucraniano para mantener claramente el requisito de **una** respuesta |
| 2008 | 57 | Era útil distinguir el rango de edad de la respuesta aceptada y la consulta de reglas aplicables | Se aclaró la nota sobre Selective Service sin cambiar respuestas oficiales |
| 2025 | 29 | La explicación sobre representante no mencionaba excepciones para ciertos territorios | Se añadió la excepción remitiendo al listado y la información vigente |
| 2025 | 70 | La explicación empleaba la idea amplia de «responsabilidades cívicas» | Se sustituyó por **ejemplos expresamente aceptados** por USCIS |
| 2025 | 72 | El texto de la pregunta no reflejaba con suficiente precisión «all men age 18 through 25» | Se precisó la pregunta y se añadieron las tres razones aceptadas como ejemplos |

Los cambios se aplicaron a los borradores de origen y se propagaron a las selecciones especiales y al paquete de la página de prueba. **No se modificaron las preguntas ni las respuestas aceptadas originales en inglés.**

## Comprobaciones técnicas efectuadas

| Comprobación | Resultado |
|---|---|
| Banco general 2008 | 100 de 100 completos |
| Banco general 2025 | 128 de 128 completos |
| Especial 65/20 de 2008 | 20 de 20 |
| Especial 65/20 de 2025 | 20 de 20 |
| Texto ucraniano vacío en el paquete | 0 |
| Claves de pregunta duplicadas o incorrectas | Ninguna detectada |
| Correspondencia con fuentes inglesas del repositorio | Sin discrepancias detectadas |
| Paridad de traducción general / 65-20 | Comprobada |
| Sintaxis de scripts de piloto y paquetes | Correcta |
| IDs DOM estáticos referidos por la interfaz | Sin referencias faltantes, excepto elementos que la propia interfaz crea dinámicamente |
| `noindex,nofollow` | Presente |
| Progreso y preferencias aislados de la aplicación pública | Confirmado por código |
| Beacon Cloudflare y registro de instalaciones | No incluidos en el piloto |
| Registro de Service Worker en la página de prueba | Ausente |
| Selector público del ucraniano | **No activado** |

Las comprobaciones anteriores son verificaciones de fuentes y código. **No equivalen a confirmar el comportamiento real en navegadores o dispositivos.** Se intentó acceder a la página desde un lector externo, que no pudo abrirla, y el acceso al navegador conectado no estaba disponible en esta sesión.

## Evaluación de la calidad lingüística

Los 228 textos auxiliares están presentes y se realizó una revisión editorial de claridad y consistencia con foco en preguntas de múltiples respuestas, 65/20, cargos que cambian, geografía, ciudadanía, derechos, historia y términos de gobierno. Se cotejaron pasajes con materiales bilingües en ucraniano.

**No se ha efectuado una corrección independiente completa por una persona experta en ucraniano.** Tampoco es posible certificar la naturalidad y ausencia de matices ambiguos de cada una de las 228 entradas mediante controles automáticos. Esta limitación debe comunicarse como beta al público.

## Puertas de lanzamiento aún pendientes

1. **Prueba funcional del piloto combinado**: selección por fecha, 100 y 128 preguntas, dos modalidades 65/20, audio inglés, respuesta oficial, marcar correcto/incorrecto, avanzar, refuerzo, celebración, cambio de idioma y reinicio de progreso; preferiblemente en móvil y escritorio.
2. **Revisión de naturalidad ucraniana adicional**, cuando sea posible, o salida beta con aviso de limitaciones lingüísticas y vía visible para reportar errores, según decisión del propietario.
3. **Regresión**: confirmar que español y vietnamita no se alteran al incorporar ucraniano al selector público.
4. **Autorización de publicación**: integrar los tres paquetes juntos únicamente tras la aprobación de lanzamiento.

**Conclusión:** los paquetes ucranianos están estructuralmente completos y la auditoría editorial encontró y corrigió cinco puntos. El piloto puede pasar a las pruebas funcionales. **El lanzamiento público no está aprobado ni se ha realizado.**
