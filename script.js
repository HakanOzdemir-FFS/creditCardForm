const creditCardContainer = document.getElementById("credit-card-container");
const creditCardNumber = document.getElementById("creditCardNumber");
const creditCardAuthor = document.getElementById("creditCardAuthor");
const creditCardDate = document.getElementById("creditCardDate");
const creditCardSecuritNumber = document.getElementById("securtyNumber");
const creditCardOwner = document.getElementById("credit-card-author-label");
const creditCardValid = document.getElementById("validThru");
const system = document.getElementById("creditCardSystem");

const inputNumber = document.getElementById("inputNumber");
const inputAuthor = document.getElementById("inputAuthor");
const inputDate = document.getElementById("inputDate");
const inputSecurty = document.getElementById("inputSecurty");

inputNumber.addEventListener("keyup", () => {
  if (!inputNumber.value.trim()) {
    creditCardNumber.innerText = "################";
  } else {
    let formattedCreditCard = inputNumber.value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ");

    if (inputNumber.value.length > 16) {
      inputNumber.value = inputNumber.value.slice(0, 16);
      formattedCreditCard = inputNumber.value
        .replace(/\s+/g, "")
        .replace(/(\d{4})/g, "$1 ");
    }

    let firstDigit = inputNumber.value.trim()[0];
    if (firstDigit == 5) {
      system.style.backgroundImage = "url(svg/mastercard-2.png)";
    } else if (firstDigit == 4) {
      system.style.backgroundImage = "url(svg/visa-10.png)";
    } else {
      system.style.backgroundImage = "";
    }

    creditCardNumber.innerText = formattedCreditCard;
  }
});

inputNumber.addEventListener("blur", () => {
  if (inputNumber.value.trim() === "") {
    system.style.backgroundImage = "";
  }
});

inputAuthor.addEventListener("keydown", (e) => {
  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
    e.preventDefault();
  }
});

inputAuthor.addEventListener("keyup", () => {
  if (inputAuthor.value.trim() === "") {
    creditCardOwner.classList.remove("active");
  } else {
    creditCardOwner.classList.add("active");
  }
  creditCardAuthor.innerText = inputAuthor.value;
});

inputDate.addEventListener("keyup", () => {
  let value = inputDate.value.replace(/[^\d]/g, "");

  if (value.length > 4) {
    value = value.slice(0, 4);
  } else if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }

  if (inputDate.value.trim() === "") {
    creditCardValid.classList.remove("active");
  } else {
    creditCardValid.classList.add("active");
  }

  inputDate.value = value;
  creditCardDate.innerText = value;
});

inputSecurty.addEventListener("keyup", () => {
  let value = inputSecurty.value.replace(/[^\d]/g, "");

  inputSecurty.value = value;
  creditCardSecuritNumber.innerText = value;
  creditCardContainer.classList.add("active");
});

inputSecurty.addEventListener("blur", () => {
  creditCardContainer.classList.remove("active");
});
