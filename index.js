const container = document.querySelector(".container");

    for (let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let divs=document.createElement('div');
            divs.classList.add('grid')
            container.appendChild(divs)
        }
        let br=document.createElement('br')
        container.appendChild(br)
    }




// for (let i = 1; i <= 16; i++) {
//   for (let j = 1; j <= 16; j++) {
//     const divs = document.createElement("div");
//     divs.classList.add(`grid`);
//     container.appendChild(divs);
//   }
//   let br=document.createElement('br')
//   container.appendChild(br)
// }
