import { disableBtn, unableBtn } from "./btn_functions";

export const onlyNumberKey = (e) => {
  const key = String.fromCharCode(e.keyCode);
  if (/[0-9]/.test(key) && !e.shiftKey) return true;
  else if (e.keyCode == 8) return true;
  else e.preventDefault();
};

export const checkNumberRange = (e) => {
  const input = e.target.value;
  const inputId = Number(e.target.id.slice(-1));

  if (inputId === 1) {
    if (input == 0 || input >= 25) {
      disableBtn(inputId);
    } else {
      unableBtn(inputId);
    }
  }

  if (inputId === 2) {
    if (input < 25 || input >= 75) {
      disableBtn(inputId);
    } else {
      unableBtn(inputId);
    }
  }

  if (inputId === 3) {
    if (input < 75) {
      disableBtn(inputId);
    } else {
      unableBtn(inputId);
    }
  }
};
