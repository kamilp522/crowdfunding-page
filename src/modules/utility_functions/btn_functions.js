export const disableBtn = (inputId) => {
  const btn = document.getElementById(`pledge-button-${inputId}`);
  btn.disabled = true;
};

export const unableBtn = (inputId) => {
  const btn = document.getElementById(`pledge-button-${inputId}`);
  btn.disabled = false;
};
