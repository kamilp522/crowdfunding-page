import * as sidebar_module from "./modules/sidebar";
import * as progress_bar_module from "./modules/progress_bar";
import * as selection_modal_module from "./modules/selection_modal";
import {
  onlyNumberKey,
  checkNumberRange,
} from "./modules/utility_functions/utility_functions";

sidebar_module.menu_icon.addEventListener("click", sidebar_module.openSidebar);

progress_bar_module.setProgressBar();

selection_modal_module.closeModalIcon.addEventListener(
  "click",
  selection_modal_module.closeModal
);

selection_modal_module.openModalButtons.forEach((button) => {
  button.addEventListener("click", selection_modal_module.openModal);
});

selection_modal_module.chosenCircles.forEach((circle) =>
  circle.addEventListener("click", selection_modal_module.chooseReward)
);

selection_modal_module.inputs.forEach((input) => {
  input.addEventListener("keydown", onlyNumberKey);
});

selection_modal_module.inputs.forEach((input) => {
  input.addEventListener("change", checkNumberRange);
});

// selection_modal_module.selectPledgeButtons.forEach((button) => {
//   button.addEventListener("click", checkNumberRange);
// });
