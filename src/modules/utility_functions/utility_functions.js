export const onlyNumberKey = (e) => {
  const key = String.fromCharCode(e.keyCode);
  if (/[0-9]/.test(key) && !e.shiftKey) return true;
  else if (e.keyCode == 8) return true;
  else e.preventDefault();
};

export const checkNumberRange = (e) => {
  const input = e.target.value;
  const inputId = Number(e.target.id.slice(-1));
  const btn = document.getElementById(`pledge-button-${inputId}`);

  const disableBtn = () => {
    btn.disabled = true;
    btn.style.background = "grey";
  };

  const unableBtn = () => {
    btn.disabled = false;
    btn.style.background = "hsl(176, 50%, 47%)";
  };

  if (inputId === 1) {
    if (input == 0 || input >= 25) {
      disableBtn();
      alert("Pledge of this category has to be worth $25 at most!");
    } else {
      unableBtn();
    }
  }

  if (inputId === 2) {
    if (input < 25 || input >= 75) {
      disableBtn();
      alert("Pledge of this category has to be worth beetwen $25 and $75!");
    } else {
      unableBtn();
    }
  }

  if (inputId === 3) {
    if (input < 75) {
      btn.disabled = true;
      btn.style.background = "grey";
      alert("Pledge of this category has to be worth more than $75");
    } else {
      unableBtn();
    }
  }

  console.log(btn.id);
};
