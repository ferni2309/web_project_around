function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  const inputs = form.querySelectorAll(config.inputSelector);
  const submitButton = document.getElementById("guardar");

  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input1Error = document.querySelector(".input1-error");
  const input2Error = document.querySelector(".input2-error");

  const editButton = document.querySelector(".profile__EditButton");
  const addButton = document.querySelector(".profile__AddButton");

  let currentAction = "";
  let touchedInputs = {
    input1: false,
    input2: false,
  };

  function mostrarError(input, errorSpan, touchedKey) {
    if (!touchedInputs[touchedKey]) return;

    if (!input.validity.valid) {
      errorSpan.textContent = input.validationMessage;
      input.classList.add(config.inputErrorClass);
      errorSpan.classList.add(config.errorClass);
    } else {
      errorSpan.textContent = "";
      input.classList.remove(config.inputErrorClass);
      errorSpan.classList.remove(config.errorClass);
    }
  }

  function validarInputs() {
    const valid1 = input1.validity.valid;
    const valid2 = input2.validity.valid;

    mostrarError(input1, input1Error, "input1");
    mostrarError(input2, input2Error, "input2");

    const isValid = valid1 && valid2;
    submitButton.disabled = !isValid;
    submitButton.classList.toggle(config.inactiveButtonClass, !isValid);
  }

  function configurarInputsParaEditar() {
    input1.setAttribute("maxlength", "40");
    input2.setAttribute("maxlength", "200");
    input2.setAttribute("type", "text");
  }

  function configurarInputsParaAgregar() {
    input1.setAttribute("maxlength", "30");
    input2.removeAttribute("maxlength");
    input2.setAttribute("type", "url");
  }

  function prepararPopupParaAccion(tipo) {
    currentAction = tipo;
    touchedInputs = { input1: false, input2: false };
    submitButton.disabled = true;
    submitButton.classList.add(config.inactiveButtonClass);
    input1.classList.remove(config.inputErrorClass, "touched");
    input2.classList.remove(config.inputErrorClass, "touched");
    input1Error.textContent = "";
    input2Error.textContent = "";
    input1Error.classList.remove(config.errorClass);
    input2Error.classList.remove(config.errorClass);
    input1.classList.remove("touched");
    input2.classList.remove("touched");
  }

  editButton.addEventListener("click", () => {
    configurarInputsParaEditar();
    prepararPopupParaAccion("edit");
  });

  addButton.addEventListener("click", () => {
    configurarInputsParaAgregar();
    prepararPopupParaAccion("add");
  });

  input1.addEventListener("input", () => {
    touchedInputs.input1 = true;
    input1.classList.add("touched");
    validarInputs();
  });

  input2.addEventListener("input", () => {
    touchedInputs.input2 = true;
    input2.classList.add("touched");
    validarInputs();
  });

  submitButton.disabled = true;
  submitButton.classList.add(config.inactiveButtonClass);
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
