# Tripleten web_project_around

1. Descripción general
   Esta es una página web responsiva e interactiva que simula una red social de exploración de lugares naturales en los EE.UU. El proyecto incluye:

Un encabezado con un logo.

Un perfil de usuario con nombre, foto y botón de edición que abre un popup.

Una galería de imágenes tipo “cards” con nombres de lugares naturales.

Un pie de página con derechos de autor.

Archivos enlazados: index.css para estilos y index.js para interactividad.

2. Conocimientos aplicados
   Diseño responsivo con Flexbox y Grid.

Manipulación del DOM y eventos en JavaScript.

Control de ventanas emergentes (popups) con apertura, cierre y validación.

Gestión de estados de UI como activación/desactivación de botones.

Validación de formularios con el objeto validity y visualización de errores.

Limpieza de listeners para evitar fugas de memoria.

Accesibilidad mejorada con mensajes de error y control de foco.

3. Funcionalidades interactivas
   Los usuarios pueden añadir nuevas tarjetas, eliminarlas o dar "me gusta".

Al hacer clic en una imagen, se abre un popup ampliado con la foto y su título.

Los popups se pueden cerrar con el botón de cerrar, clic fuera del contenido o presionando la tecla Escape.

El botón de guardar (popup\_\_button) se desactiva automáticamente y solo se activa si los campos del formulario son válidos.

Los inputs muestran mensajes de error personalizados solo después de que el usuario comienza a escribir.

En el modo "Agregar lugar", el campo de nombre tiene un maxlength de 30 y el campo de imagen requiere una URL válida.

En el modo "Editar perfil", los campos vuelven a sus configuraciones originales (maxlength y type).

4. Validación de formularios
   Implementación de enableValidation() con configuración personalizada.

Los errores se muestran en etiquetas <span> asociadas a cada input.

Se utiliza una clase .touched para mostrar errores solo tras interacción del usuario.

El botón de guardar se gestiona dinámicamente según la validez de los campos.

5. Repositorio
   Puedes ver el código fuente completo en GitHub:

🔗 https://github.com/ferni2309/web_project_around.git
