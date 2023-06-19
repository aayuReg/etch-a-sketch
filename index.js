const container = document.querySelector(".container");
const userInputBtn = document.querySelector(".userInputBtn");
let allDivs = [];

const createDivs = (userinp) => {
  container.innerHTML = "";
  container.style.setProperty('--userInput', userinp); //set custom css
  for (i = 0; i < userinp; i++) {
    for (j = 0; j < userinp; j++) {
      let divs = document.createElement("div");
      divs.classList.add("grid");

      container.appendChild(divs);
      allDivs.push(divs);
    }
  }
  allDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("hover");
    });
    div.addEventListener("mouseout", () => {
      div.classList.remove("hover");
    });
  });
};

userInputBtn.addEventListener("click", () => {
  let userInput = prompt("Enter the size:");
  userInput = parseInt(userInput);
  if (userInput < 2 || userInput > 99) {
    alert("please enter between 2 and 99");
  } else {
    createDivs(userInput);
  }
});
