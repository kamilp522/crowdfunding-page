import {
  onlyNumberKey,
  checkNumberRange,
} from "./modules/utility_functions/utility_functions";

import * as sidebar_module from "./modules/sidebar";
import * as selection_modal_module from "./modules/selection_modal";
import * as thanks_modal_module from "./modules/thanks_modal";
import * as progress_bar_module from "./modules/progress_bar";
import * as bookmark_module from "./modules/bookmark";
import * as backed_info_module from "./modules/backed_info";

sidebar_module.menu_icon.addEventListener("click", sidebar_module.openSidebar);

progress_bar_module.setProgressBar(backed_info_module.moneyParsed);

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

selection_modal_module.chosenTitles.forEach((title) =>
  title.addEventListener("click", selection_modal_module.chooseReward)
);

selection_modal_module.inputs.forEach((input) => {
  input.addEventListener("keydown", onlyNumberKey);
});

selection_modal_module.inputs.forEach((input) => {
  input.addEventListener("input", checkNumberRange);
});

selection_modal_module.selectPledgeButtons.forEach((button) => {
  button.disabled = true;
});

selection_modal_module.selectPledgeButtons.forEach((button) => {
  button.addEventListener("click", thanks_modal_module.openModal);
});

thanks_modal_module.thanks_modal_button.addEventListener(
  "click",
  thanks_modal_module.closeModal
);

selection_modal_module.inputs.forEach((input) => {
  input.addEventListener("input", selection_modal_module.enterPledge);
});

bookmark_module.bookmark.addEventListener(
  "click",
  bookmark_module.markBookmark
);
