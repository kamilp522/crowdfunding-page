export const chosenCircles = [...document.querySelectorAll(".choose")];
export const closeModalIcon = document.querySelector(".close-selection-modal");
export const selectionModal = document.querySelector(".selection-modal");
// export const cards = [...document.querySelectorAll(".selection-modal .card")];

export const closeModal = () => {
  selectionModal.classList.toggle("active");
};

export const chooseReward = (e) => {
  e.target.classList.toggle("active");
  let id = e.target.id.slice(-1);

  const currentCard = document.getElementById(`modal-card-${id}`);
  currentCard.classList.toggle("active");

  const currentEnterPledge = document.getElementById(`enter-pledge-${id}`);
  currentEnterPledge.classList.toggle("active");
};
