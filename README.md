# JavaScript Funcional - Markdown To HTML

Este es el repositorio de la tarea 1 del grupo 2 del curso IIC3585.

## 🚀 Features:
Este programa soporta las siguientes syntaxis de Markdown:
- ✔ Headings
- ✔ Párrafos
- ✔ Line Breaks
- ✔ Bold e Italics
- ✔ Blockquotes
- ✔ Blockquotes con indentación
- ✔ Listas ordenadas y no ordenadas (sin elementos entre ellas)
- ✔ Código y bloques de código (con backticks)
- ✔ Links
- ✔ Imágenes

No soporta:
- ❌ Horizontal rules
- ❌ Escaping characters
- ❌ Contenido dinámico en listas

## 💡 Como funciona

Utilizando el paradigma de programación funcional en JavaScript, este programa procesa un texto de entrada en formato Markdown y lo convierte a HTML. Esto se logra mediante un pipeline de funciones que analizan y transforman secuencialmente los diversos formatos específicos de Markdown mencionados previamente, resultando en su equivalente en HTML. Para esto, se debe ingresar el texto en formato Markdown en el archivo `./inputs/page.md`, y luego ejecutar el comando `node src/main.js`... El flujo del programa se puede ver en el siguiente diagrama:

![diagram](./docs/mdToHTMLdiagram.png)

