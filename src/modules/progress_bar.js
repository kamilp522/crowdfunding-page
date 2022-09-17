export const progress = document.querySelector(".progress");
export const money = document.querySelector(".current-amount span");

export const moneyParsed = money.textContent.split(",").join("");

export const setProgressBar = (m) => {
  progress.style.width = `${m / 1000}%`;
  console.log(m);
};
