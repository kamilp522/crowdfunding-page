export const progress = document.querySelector(".progress");
export const money = document.querySelector(".current-amount span").textContent;

export const setProgressBar = () => {
  progress.style.width = `${money / 1000}%`;
};
