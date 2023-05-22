const container = document.querySelector(".container");
let allDivs=[];
    for (let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let divs=document.createElement('div');
            divs.classList.add('grid')
            container.appendChild(divs)
            allDivs.push(divs)
        }
    }




container.addEventListener('mouseover',(e)=>{
    console.log('hoveringg')
    allDivs.forEach((div)=>div.classList.toggle('hover'))
   
})
