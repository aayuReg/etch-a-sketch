const container = document.querySelector(".container");
const userInputBtn = document.querySelector(".userInputBtn");
const blueBtn = document.querySelector(".blue-btn");
const redBtn = document.querySelector(".red-btn");
const para_one=document.querySelector('.para-1')
let allDivs = [];
let userInput='10'


const createDivs = (userinp=10) => {
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
    para_one.innerHTML='Please choose between 2 and 99'
  } else {
    createDivs(userInput);
  }
  blueBtn.addEventListener('click',()=>{
      allDivs.forEach((div) => {
          div.addEventListener("mouseover", () => {
            div.classList.add("hover-blue");
          });
          div.addEventListener("mouseout", () => {
            div.classList.remove("hover-blue");
          });
        });
  
  })
  
});
