# Criterio 1: Creatividad (Peso: 20%)

## Descripcion General

Se utilizan recursos y materiales didacticos variados, de alta calidad e inherentes al contenido de la materia. El docente debe incluir **al menos 3 tipos diferentes de recursos** en su aula virtual para demostrar creatividad e innovacion pedagogica.

### Tipos de recursos requeridos (minimo 3):

1. **PDFs de autoria propia** - Guias de laboratorio, manuales, resúmenes elaborados por el docente
2. **Presentaciones PPT** - Diapositivas creadas por el docente para cada tema
3. **Tutor Virtual con NotebookLM** - Asistente de IA personalizado con el contenido del curso
4. **Contenido interactivo con H5P** - Actividades interactivas integradas directamente en Moodle (opcional recomendado)
5. **Presentaciones interactivas con Genially** - Infografias, escape rooms o presentaciones dinamicas (opcional recomendado)

---

## Recurso A: PDFs de Autoria Propia

Son documentos PDF creados por el docente: guias de laboratorio, manuales de practica, resumenes tematicos, guias de ejercicios, etc. Demuestran que el docente genera material propio y de calidad para sus estudiantes.

### Como subir un PDF a Moodle

1. **Activar edicion** en tu curso de Moodle (boton "Activar edicion" o icono de engranaje)
2. En la seccion deseada, hacer clic en **"Anadir una actividad o un recurso"**
3. En la lista, seleccionar **"Archivo"** (dentro de la categoria RECURSOS)
4. Completar el campo **"Nombre"** con un titulo descriptivo (ej: "Guia de Laboratorio 1 - Circuitos Electricos")
5. En el campo **"Descripcion"**, agregar una breve explicacion del contenido del PDF
6. En la seccion **"Seleccionar archivos"**, puedes:
   - **Arrastrar y soltar** el PDF directamente en la zona de archivos, o
   - Hacer clic en **"Agregar"** > **"Subir un archivo"** > seleccionar el PDF desde tu computadora
7. En **"Apariencia"** se recomienda seleccionar "Forzar descarga" o "Abrir" segun prefieras que el estudiante descargue o visualice en linea
8. Hacer clic en **"Guardar cambios y regresar al curso"**

### Consejos para PDFs de calidad
- Incluir portada con logo institucional, nombre del docente y asignatura
- Usar formato consistente: titulos, subtitulos, numeracion
- Incluir bibliografia o referencias cuando aplique
- Verificar que el PDF no pese mas de 50 MB (limite comun de Moodle)

---

## Recurso B: Presentaciones PowerPoint (PPT/PPTX)

Son las diapositivas creadas por el docente para impartir sus clases. Permiten al estudiante revisar el material de clase en cualquier momento.

### Como subir un PPT a Moodle

1. **Activar edicion** en tu curso de Moodle
2. En la seccion deseada, hacer clic en **"Anadir una actividad o un recurso"**
3. Seleccionar **"Archivo"** (dentro de la categoria RECURSOS)
4. Completar el **"Nombre"** (ej: "Presentacion Semana 3 - Bases de Datos Relacionales")
5. Agregar una **"Descripcion"** breve del contenido
6. En **"Seleccionar archivos"**, arrastrar el archivo .pptx o subirlo manualmente
7. Hacer clic en **"Guardar cambios y regresar al curso"**

### Tip alternativo: Convertir a PDF
Si prefieres que los estudiantes no modifiquen tu presentacion, exporta tu PPT como PDF desde PowerPoint (Archivo > Guardar como > PDF) y subelo como PDF.

---

## Recurso C: Tutor Virtual con NotebookLM

NotebookLM es una herramienta gratuita de Google potenciada con IA (Gemini) que permite crear un asistente virtual personalizado a partir de tus propios materiales de curso. Los estudiantes pueden hacerle preguntas y la IA responde exclusivamente basandose en las fuentes que tu subiste, reduciendo alucinaciones.

### Paso 1: Crear el cuaderno en NotebookLM

1. Acceder a **notebooklm.google.com** con tu cuenta de Google
2. Hacer clic en **"Crear nuevo cuaderno"** (o "New Notebook")
3. Asignar un nombre descriptivo al cuaderno (ej: "Tutor - Programacion Orientada a Objetos")

### Paso 2: Agregar fuentes (materiales del curso)

1. Hacer clic en **"Agregar fuentes"** (icono + en el panel izquierdo)
2. Puedes subir:
   - **PDFs** de tus guias y manuales
   - **Documentos de Google Docs** o archivos de texto
   - **Presentaciones** de Google Slides
   - **Enlaces web** de contenido relevante
   - **Videos de YouTube** relacionados con la materia
3. Puedes agregar **mas de 100 fuentes** por cuaderno
4. NotebookLM generara automaticamente un **resumen** de tus fuentes en el panel central

### Paso 3: Verificar el funcionamiento

1. En el **cuadro de dialogo** inferior, escribe preguntas de prueba como un estudiante lo haria
2. Verifica que las respuestas de la IA sean correctas y basadas en tus materiales
3. Opcionalmente, genera un **Audio Overview** (resumen en audio tipo podcast) desde el panel derecho, seleccionando "Audio Overview" - esto crea un podcast conversacional sobre tu material que los estudiantes pueden escuchar

### Paso 4: Compartir con enlace publico

1. Hacer clic en el boton **"Compartir"** (esquina superior derecha del cuaderno)
2. Seleccionar **"Cualquier usuario con el enlace"**
3. **Copiar el enlace** generado
4. Los visitantes podran interactuar con el tutor (hacer preguntas, explorar resumenes, escuchar audios) pero **no podran editar** tus fuentes ni el cuaderno
5. Verificar que aparece un **icono de globo terraqueo** junto al boton Compartir, lo que confirma que el cuaderno es publico

### Paso 5: Publicar el enlace en Moodle

1. En tu aula de Moodle, hacer clic en **"Anadir actividad o recurso"**
2. Seleccionar **"Pagina"**
3. En el campo **"Nombre"**, escribir un titulo (ej: "Tutor Virtual IA - Consulta aqui tus dudas")
4. En el editor de **"Contenido"**, hacer clic en el icono **"Mostrar mas botones"** (icono de barra de herramientas expandida, parece una rejilla de puntos)
5. Luego hacer clic en el boton **"<>"** (codigo fuente HTML)
6. En la ventana de codigo HTML, **reemplazar todo el texto** con un iframe o enlace. Ejemplo:
   ```html
   <p><a href="TU_ENLACE_DE_NOTEBOOKLM" target="_blank">Accede al Tutor Virtual de la materia</a></p>
   <p>Haz clic en el enlace para interactuar con el tutor virtual. Puedes hacerle preguntas sobre cualquier tema del curso.</p>
   ```
7. Hacer clic en **"Guardar cambios"**

---

## Recurso D (Recomendado): Contenido Interactivo con H5P

H5P es una herramienta **integrada nativamente en Moodle** que permite crear actividades interactivas directamente en el aula virtual sin necesidad de herramientas externas. Ofrece mas de 40 tipos de contenido.

### Tipos de contenido H5P mas utiles

- **Presentacion interactiva (Course Presentation)**: Diapositivas con quizzes, videos y animaciones integradas
- **Video interactivo**: Videos con preguntas emergentes que el estudiante debe responder
- **Linea de tiempo (Timeline)**: Para materias con contenido cronologico
- **Juego de memoria (Memory Game)**: Para repaso de conceptos
- **Crucigrama**: Para vocabulario y terminologia
- **Drag and Drop**: Ejercicios de arrastrar y soltar

### Como crear contenido H5P en Moodle

1. **Activar edicion** en tu curso
2. Hacer clic en **"Anadir una actividad o un recurso"**
3. Seleccionar **"H5P"** o **"Contenido interactivo"**
4. Elegir el tipo de actividad que deseas crear
5. Completar el contenido siguiendo el asistente guiado
6. **Guardar cambios** - la actividad queda integrada directamente en Moodle

### Por que usar H5P
- No requiere herramientas externas ni cuentas adicionales
- Las calificaciones se registran automaticamente en la libreta de Moodle
- Es gratuito y ya viene incluido en Moodle
- Aumenta significativamente el engagement de los estudiantes

---

## Recurso E (Recomendado): Presentaciones Interactivas con Genially

Genially es una plataforma web que permite crear presentaciones, infografias y recursos interactivos con animaciones, botones y elementos multimedia. A diferencia de PowerPoint, el contenido es dinamico e interactivo.

### Ideas de uso con Genially

- **Infografias interactivas**: Resumenes visuales de temas con botones de informacion expandible
- **Escape rooms educativos**: Los estudiantes resuelven problemas y avanzan por pistas para "escapar"
- **Presentaciones animadas**: Con transiciones, audio, video y elementos clicables
- **Mapas conceptuales interactivos**: Con nodos que se expanden al hacer clic

### Como insertar un Genially en Moodle

1. **En Genially**: Crear o abrir tu contenido, hacer clic en **"Compartir"** > pestaña **"Insertar"** > copiar el **codigo iframe**
2. **En Moodle**: Activar edicion > **"Anadir actividad o recurso"** > seleccionar **"Etiqueta"** o **"Pagina"**
3. En el editor de texto, hacer clic en **"Mostrar mas botones"** y luego en **"<>"** (codigo HTML)
4. **Pegar el codigo iframe** copiado de Genially
5. Guardar cambios - el contenido interactivo se mostrara directamente en el aula

### Por que usar Genially
- Version gratuita disponible con funcionalidades completas
- No requiere conocimientos de programacion ni diseno grafico
- Los estudiantes interactuan directamente sin salir de Moodle
- Altamente visual y atractivo para el aprendizaje

---

## Niveles de Cumplimiento

| Nivel | Puntaje | Descripcion |
|-------|---------|-------------|
| Cumplimiento optimo | 4 | 76-100% de actividades utilizan recursos y materiales didacticos variados |
| Nivel importante | 3 | 51-75% de actividades utilizan recursos y materiales didacticos |
| Cumplimiento minimo | 2 | 26-50% de actividades utilizan recursos y materiales didacticos |
| No cumplimiento | 1 | 0-25% de actividades utilizan recursos y materiales didacticos |
