function abrirPopup() {
  const nombreActual = document.getElementById("profileName").textContent;
  const acercaActual = document.getElementById("profileAcerca").textContent;

  document.getElementById("inputNombre").value = nombreActual;
  document.getElementById("inputAcerca").value = acercaActual;

  validateForm();

  document.getElementById("popupEditarPerfil").classList.add("popup_opened");
}

function cerrarPopup() {
  document.getElementById("popupEditarPerfil").classList.remove("popup_opened");
}

function validateForm() {
  const inputNombre = document.getElementById("inputNombre");
  const inputAcerca = document.getElementById("inputAcerca");
  const submitButton = document.getElementById("submitButton");

  if (inputNombre.value.trim() !== "" && inputAcerca.value.trim() !== "") {
    submitButton.classList.add("enabled");
    submitButton.disabled = false;
  } else {
    submitButton.classList.remove("enabled");
    submitButton.disabled = true;
  }
}

document.getElementById("inputNombre").addEventListener("input", validateForm);
document.getElementById("inputAcerca").addEventListener("input", validateForm);

document
  .getElementById("editarPerfilForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevoNombre = document.getElementById("inputNombre").value;
    const nuevoAcerca = document.getElementById("inputAcerca").value;

    document.getElementById("profileName").textContent = nuevoNombre;
    document.getElementById("profileAcerca").textContent = nuevoAcerca;

    cerrarPopup();
  });
