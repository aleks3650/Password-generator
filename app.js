const TextLength = document.querySelector(".text-range");

const CharLength = document.querySelector(".char-len");

const GenerateBTN = document.querySelector(".generate");

const StrengthLevelText = document.querySelector(".Strength-text-lvl");

const StrengthLv1 = document.querySelector(".box-level.level1");

const StrengthLv2 = document.querySelector(".box-level.level2");

const StrengthLv3 = document.querySelector(".box-level.level3");

const StrengthLv4 = document.querySelector(".box-level.level4");

const PasswordBox = document.querySelector(".Password");

const UppercaseBtn = document.querySelector(".Uppercase");

const LowercaseBtn = document.querySelector(".Lowercase");

const SymbolsBtn = document.querySelector(".Symbols");

const NumbersBtn = document.querySelector(".Numbers");

const CopyBtn = document.querySelector(".copy");

let TextLengthNum = CharLength.textContent;

const AlertBanner = document.querySelector(".alert");

let Password = "";

TextLength.addEventListener("input", (event) => {
  CharLength.innerHTML = event.target.value;

  TextLengthNum = CharLength.textContent;

  if (TextLengthNum < 4) {
    StrengthLevelText.innerHTML = "LOW";

    StrengthLv1.classList.add("active");

    StrengthLv2.classList.remove("active");

    StrengthLv3.classList.remove("active");

    StrengthLv4.classList.remove("active");
  } else if (TextLengthNum < 8) {
    StrengthLevelText.innerHTML = "Medium";

    StrengthLv1.classList.add("active");

    StrengthLv2.classList.add("active");

    StrengthLv3.classList.remove("active");

    StrengthLv4.classList.remove("active");
  } else if (TextLengthNum < 11) {
    StrengthLevelText.innerHTML = "Hard";

    StrengthLv1.classList.add("active");

    StrengthLv2.classList.add("active");

    StrengthLv3.classList.add("active");

    StrengthLv4.classList.remove("active");
  } else {
    StrengthLevelText.innerHTML = "extreme Hard";

    StrengthLv1.classList.add("active");

    StrengthLv2.classList.add("active");

    StrengthLv3.classList.add("active");

    StrengthLv4.classList.add("active");
  }
});

GenerateBTN.addEventListener("click", () => {
  //reading checkboxes

  let UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let LowercaseLetters = "abcdefghijklmnopqrstuwyz";

  let NumbersLetters = "0123456789";

  let SymbolsLetters = "!@#$%^&*()_+=";

  let finalString = "";

  if (UppercaseBtn.checked === true) {
    finalString += UppercaseLetters;
  }

  if (LowercaseBtn.checked === true) {
    finalString += LowercaseLetters;
  }

  if (NumbersBtn.checked === true) {
    finalString += NumbersLetters;
  }

  if (SymbolsBtn.checked === true) {
    finalString += SymbolsLetters;
  }

  //generate

  if (finalString !== "") {
    Password = "";

    for (let i = 0; i < TextLengthNum; i++) {
      Password += finalString.charAt(
        Math.floor(Math.random() * finalString.length)
      );
    }

    PasswordBox.innerHTML = Password;
  }

  CopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(Password);
    console.log("s");
    AlertBanner.style.display = "block";

    setTimeout(() => {
      AlertBanner.style.display = "none";
    }, 1500);
  });
});
