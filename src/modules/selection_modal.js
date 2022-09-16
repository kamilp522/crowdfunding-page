export const chosenCircles = [...document.querySelectorAll(".choose")];
export const closeModalIcon = document.querySelector(".close-selection-modal");
export const selectionModal = document.querySelector(".selection-modal");
export const cards = [...document.querySelectorAll(".selection-modal .card")];
export const openModalButtons = [
  ...document.querySelectorAll(".back-project-button"),
];

export const closeModal = () => {
  selectionModal.classList.remove("active");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

export const openModal = () => {
  selectionModal.classList.add("active");
  // window.scrollTo({ top: 0, behavior: "smooth" });
};

export const chooseReward = (e) => {
  let currentId = e.target.id.slice(-1);

  cards.forEach((card) => {
    if (card.id !== `modal-card-${currentId}`) {
      card.classList.remove("active");
    } else card.classList.toggle("active");
  });
};
