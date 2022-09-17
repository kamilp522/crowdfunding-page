import * as backed_info_module from "./backed_info";
import { declaredPledge } from "./selection_modal";
import { setProgressBar } from "./progress_bar";

export const thanks_modal = document.querySelector(".thanks-modal");
export const selection_modal = document.querySelector(".selection-modal");
export const thanks_modal_button = document.querySelector(".thanks-button");
export const backed_info = document.querySelector(".backed-info");

export const openModal = () => {
  selection_modal.classList.remove("active");
  thanks_modal.classList.add("active");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const closeModal = () => {
  thanks_modal.classList.remove("active");
  backed_info.scrollIntoView({ block: "start", behavior: "smooth" });
  backed_info_module.updateInfo(declaredPledge);
  setProgressBar(
    Number(backed_info_module.moneyParsed) + Number(declaredPledge)
  );
};
