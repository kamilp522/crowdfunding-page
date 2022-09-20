export const chosenCircles = [...document.querySelectorAll(".choose")];
export const chosenTitles = [...document.querySelectorAll(".title-item")];

export const closeModalIcon = document.querySelector(".close-selection-modal");
export const selectionModal = document.querySelector(".selection-modal");
export const cards = [...document.querySelectorAll(".selection-modal .card")];
export const openModalButtons = [
  ...document.querySelectorAll(".back-project-button"),
];
export const inputs = [...document.querySelectorAll(".enter-pledge input")];
export const selectPledgeButtons = [
  ...document.querySelectorAll(".select-pledge-button"),
];
export let declaredPledge;

export const enterPledge = (e) => {
  declaredPledge = e.target.value;
};

export const closeModal = () => {
  selectionModal.classList.remove("active");

  inputs.forEach((input) => {
    input.value = "";
  });

  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

export const openModal = (e) => {
  selectionModal.classList.add("active");
  let currentId = e.target.id.slice(-1);

  document
    .getElementById(`modal-card-${currentId}`)
    .scrollIntoView({ block: "start", behavior: "smooth" });

  chooseReward(e);
};

export const chooseReward = (e) => {
  let currentId = e.target.id.slice(-1);

  cards.forEach((card) => {
    if (card.id !== `modal-card-${currentId}`) {
      card.classList.remove("active");
    } else card.classList.toggle("active");
  });
};
