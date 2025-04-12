function abrirPopup() {
  const nombreActual = document.getElementById("profileName").textContent;
  const acercaActual = document.getElementById("profileAcerca").textContent;

  document.getElementById("inputNombre").value = nombreActual;
  document.getElementById("inputAcerca").value = acercaActual;

  // Llamar a la validación para activar o desactivar el botón al abrir el popup
  validarFormulario();

  document.getElementById("popupEditarPerfil").classList.add("popup_opened");
}

function cerrarPopup() {
  document.getElementById("popupEditarPerfil").classList.remove("popup_opened");
}

function validarFormulario() {
  const inputNombre = document.getElementById("inputNombre");
  const inputAcerca = document.getElementById("inputAcerca");
  const submitButton = document.getElementById("submitButton");

  // Verificar si ambos campos tienen valores
  if (inputNombre.value.trim() !== "" && inputAcerca.value.trim() !== "") {
    submitButton.classList.add("enabled");
    submitButton.disabled = false; // Habilitar el botón
  } else {
    submitButton.classList.remove("enabled");
    submitButton.disabled = true; // Deshabilitar el botón
  }
}

// Agregar event listeners a los inputs para validar en tiempo real
document
  .getElementById("inputNombre")
  .addEventListener("input", validarFormulario);
document
  .getElementById("inputAcerca")
  .addEventListener("input", validarFormulario);

// Escuchar el envío del formulario
document
  .getElementById("editarPerfilForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar recargar la página

    const nuevoNombre = document.getElementById("inputNombre").value;
    const nuevoAcerca = document.getElementById("inputAcerca").value;

    // Actualizar los elementos del perfil con los nuevos valores
    document.getElementById("profileName").textContent = nuevoNombre;
    document.getElementById("profileAcerca").textContent = nuevoAcerca;

    cerrarPopup();
  });
