let piedra = document.querySelector(".btnpie");
let papel = document.querySelector(".btnpap");
let tijeras = document.querySelector(".btntij");

let g1 = document.querySelector(".g1");
let g2 = document.querySelector(".g2");

let winner = document.querySelector(".win")

let h1 = document.querySelector(".titulo");


piedra.addEventListener("click", evt => {
    
    g1.innerHTML = `<img src="imgs/piedra.png">`;
    h1.textContent = "...";
    winner.innerHTML = "";
    g2.innerHTML = "";

    let random = Math.random()*10;

    if(random > 5) {
        setTimeout(()=>{
            g1.innerHTML = `<img src="imgs/pieloser.png">`;
            g2.innerHTML = `<img src="imgs/papwinner.png">`;
            winner.style.borderRadius = "50%";
            winner.innerHTML = `<img src="imgs/papwins.png">`;
            h1.textContent = "You lose... 😔";
        },900)
    } else if (random < 5) {
        setTimeout(()=>{
            g1.innerHTML = `<img src="imgs/piewinner.png">`;
            g2.innerHTML = `<img src="imgs/tijloser.png">`;
            winner.style.borderRadius = "50%";
            winner.innerHTML = `<img src="imgs/piewins.png">`;
            h1.textContent = "YOU WIN!! 😎";
        },900)
    }
    
})

papel.addEventListener("click", evt => {
    
    g1.innerHTML = `<img src="imgs/papel.png">`;
    h1.textContent = "...";
    winner.innerHTML = "";
    g2.innerHTML = "";

    let random = Math.random()*10;
    
    if(random > 5) {
        setTimeout(()=>{
            g1.innerHTML = `<img src="imgs/paploser.png">`;
            g2.innerHTML = `<img src="imgs/tijwinner.png">`;
            winner.style.borderRadius = "50%";
            winner.innerHTML = `<img src="imgs/tijwins.png">`;
            h1.textContent = "You lose... 😔";
        },900)
    } else if (random < 5) {
        setTimeout(()=>{
            g1.innerHTML = `<img src="imgs/papwinner.png">`;
            g2.innerHTML = `<img src="imgs/pieloser.png">`;
            winner.style.borderRadius = "50%";
            winner.innerHTML = `<img src="imgs/papwins.png">`;
            h1.textContent = "YOU WIN!! 😎";
        },900)
    }
    
})

tijeras.addEventListener("click", evt => {
    
    g1.innerHTML = `<img src="imgs/tijeras.png">`;
    h1.textContent = "...";
    winner.innerHTML = "";
    g2.innerHTML = "";

    let random = Math.random()*10;
    
    if(random > 5) {
        setTimeout(()=>{
            g1.innerHTML = `<img src="imgs/tijloser.png">`;
            g2.innerHTML = `<img src="imgs/piewinner.png">`;
            winner.style.borderRadius = "50%";
            winner.innerHTML = `<img src="imgs/piewins.png">`;
            h1.textContent = "You lose... 😔";
        },900)
    } else if (random < 5) {
        setTimeout(()=>{
            g1.innerHTML = `<img src="imgs/tijwinner.png">`;
            g2.innerHTML = `<img src="imgs/paploser.png">`;
            winner.style.borderRadius = "50%";
            winner.innerHTML = `<img src="imgs/tijwins.png">`;
            h1.textContent = "YOU WIN!! 😎";
        },900)
    }
    
})