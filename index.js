const container = document.querySelector(".container");
const userInputBtn=document.querySelector('.userInputBtn');
let userInput=0;



let allDivs=[];
    for (let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let divs=document.createElement('div');
            divs.classList.add('grid')
            container.appendChild(divs)
            allDivs.push(divs)
        }
    }


userInputBtn.addEventListener('click',()=>{
    let userInput=prompt('enter the number of grids you want')
   
    
})

allDivs.forEach(div=>{
    div.addEventListener('mouseover',()=>{
        div.classList.add('hover')
    })
    // div.addEventListener('mouseout',()=>{
    //     div.classList.remove('hover')
    // })
})