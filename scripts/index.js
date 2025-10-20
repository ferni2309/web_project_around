const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const guardarButton = document.getElementById("guardar");
const closeButton = document.getElementById("popup-close");

const profileName = document.getElementById("profileName");
const profileAcerca = document.getElementById("profileAcerca");
const cardsContainer = document.querySelector(".elements");

let currentAction = "";

const imagePopup = document.getElementById("image-popup");
const imagePopupImg = document.getElementById("image-popup-img");
const imagePopupCaption = document.getElementById("image-popup-caption");
const imagePopupClose = document.getElementById("image-popup-close");
const imagePopupOverlay = document.getElementById("image-popup-overlay");

const editButton = document.querySelector(".profile__EditButton");
const addButton = document.querySelector(".profile__AddButton");

function manejarEscapeFormulario(event) {
  if (event.key === "Escape") {
    cerrarPopupFormulario();
  }
}

function abrirPopup(button) {
  popup.classList.add("popup--show");

  const isEdit = button.classList.contains("profile__EditButton");
  const isAdd = button.classList.contains("profile__AddButton");

  currentAction = isEdit ? "edit" : isAdd ? "add" : "";

  popupTitle.textContent = button.getAttribute("data-title") || "";
  input1.value = "";
  input2.value = "";

  input1.placeholder = button.getAttribute("data-placeholder1") || "";
  input2.placeholder = button.getAttribute("data-placeholder2") || "";

  guardarButton.textContent = isEdit ? "Guardar" : "Crear";

  document.addEventListener("keydown", manejarEscapeFormulario);
}

function cerrarPopupFormulario() {
  popup.classList.remove("popup--show");
  document.removeEventListener("keydown", manejarEscapeFormulario);
}

function manejarEscapeImagen(event) {
  if (event.key === "Escape") {
    cerrarPopupImagen();
  }
}

function abrirPopupImagen(imgElement) {
  const card = imgElement.closest(".cards");
  const title = card.querySelector(".group__text").textContent;

  imagePopupImg.src = imgElement.src;
  imagePopupImg.alt = imgElement.alt;
  imagePopupCaption.textContent = title;

  imagePopup.style.display = "flex";
  document.body.style.overflow = "hidden";

  document.addEventListener("keydown", manejarEscapeImagen);
}

function cerrarPopupImagen() {
  imagePopup.style.display = "none";
  document.body.style.overflow = "";
  document.removeEventListener("keydown", manejarEscapeImagen);
}

function crearTarjeta(name, link) {
  const newCard = document.createElement("div");
  newCard.classList.add("cards");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("elements__delete");
  deleteBtn.addEventListener("click", () => newCard.remove());

  const image = document.createElement("img");
  image.classList.add("cards__imagen");
  image.src = link;
  image.alt = name;

  const group = document.createElement("div");
  group.classList.add("group");

  const title = document.createElement("h2");
  title.classList.add("group__text");
  title.textContent = name;

  const heart = document.createElement("img");
  heart.classList.add("group__imagen");
  heart.src = "./images/Group-corazón.svg";
  heart.alt = "Like";

  heart.addEventListener("click", () => {
    const isLiked = heart.classList.toggle("liked");
    heart.src = isLiked
      ? "./images/Group-corazón-Active.svg"
      : "./images/Group-corazón.svg";
  });

  group.appendChild(title);
  group.appendChild(heart);
  newCard.appendChild(deleteBtn);
  newCard.appendChild(image);
  newCard.appendChild(group);

  cardsContainer.prepend(newCard);
}

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((card) => crearTarjeta(card.name, card.link));

guardarButton.addEventListener("click", (e) => {
  e.preventDefault();

  const val1 = input1.value.trim();
  const val2 = input2.value.trim();

  if (currentAction === "edit") {
    profileName.textContent = val1;
    profileAcerca.textContent = val2;
  } else if (currentAction === "add") {
    crearTarjeta(val1, val2);
  }

  cerrarPopupFormulario();
});

editButton.addEventListener("click", () => abrirPopup(editButton));
addButton.addEventListener("click", () => abrirPopup(addButton));

closeButton.addEventListener("click", cerrarPopupFormulario);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    cerrarPopupFormulario();
  }
});

cardsContainer.addEventListener("click", (e) => {
  const clickedImg = e.target.closest(".cards__imagen");
  if (clickedImg) {
    abrirPopupImagen(clickedImg);
  }
});

imagePopupClose.addEventListener("click", cerrarPopupImagen);
imagePopupOverlay.addEventListener("click", cerrarPopupImagen);
