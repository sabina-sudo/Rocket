'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let bouton=document.querySelector("#firing-button");
console.log(bouton);
let span= document.querySelector("span");
console.log(span);
let i=10;
let interval;
let rocket=document.querySelector("#rocket")
console.log(rocket);
let index;
let cancel=document.querySelector("#cancel-button")
console.log(cancel);



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
bouton.addEventListener("click",start)
function start(){
   bouton.classList.add("disabled");//bouton devien disabled
   cancel.classList.remove("disabled");
   rocket.src="images/rocket2.gif"
   interval = setInterval(decrementation,1000);
   

}
function decrementation(){
    span.innerHTML=i;
    i--;
    if(i<=-1){
     clearInterval (interval) 
     rocket.src="images/rocket3.gif"
     rocket.classList.add("tookOff")
     bouton.removeEventListener("click",start)
    }
}


cancel.addEventListener("click",stop)

function stop(){
 cancel.classList.add("disabled");
 bouton.classList.remove("disabled");
 clearInterval (interval) ;

}




/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
for (let i = 0; i < 150; i++) {
  let etoile = document.createElement("p"); // <p> </p>
  // etoile.innerText = "This is a paragraph."; // <p>This is a paragraph.</p>
  etoile.classList.add("star");
  let taille = ["tiny", "normal", "big"];
  let index = Math.floor(Math.random() * 3);
  console.log(taille[index]);
  etoile.classList.add(taille[index]);

  // etoile.style.top = Math.floor(Math.random() * 100) +"%"
  // etoile.style.left = Math.floor(Math.random() * 100)+"%"

  etoile.style.top = Math.floor(Math.random() * screen.height + 1) + "px";
  etoile.style.left = Math.floor(Math.random() * screen.width + 1) + "px";

  document.body.appendChild(etoile);
}
