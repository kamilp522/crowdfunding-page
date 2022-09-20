let money = document.querySelector(".current-amount span");
let backers = document.querySelector(".no-of-backers span");
let days = document.querySelector(".no-of-days-left span");

money.textContent = "89,914";
backers.textContent = "5,007";
days.textContent = "56";

export let moneyParsed = money.textContent.split(",").join("");

export const updateInfo = (pledge) => {
  let backersParsed = backers.textContent.split(",").join("");
  moneyParsed = money.textContent.split(",").join("");
  money.textContent = (Number(moneyParsed) + Number(pledge)).toLocaleString(
    "en-US"
  );
  backers.textContent = (Number(backersParsed) + 1).toLocaleString("en-US");
};
