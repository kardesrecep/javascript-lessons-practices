let body= document.querySelector("body");

let renkAd=document.querySelector("#renk");

let button=document.querySelector("#renk-degistir");

const renkler = ["Yellow","Blue","Green","Red","Aqua","Gray","Pink","Purple","Orange","Azure"];
let renkIndex="";

const renkDegistir=()=>{
    renkIndex = Math.floor(Math.random() * renkler.length);
    console.log(renkIndex);
    body.style.backgroundColor=renkler[renkIndex];
    renkAd.innerText=renkler[renkIndex];
    button.innerText=renkler[renkIndex];

}

button.addEventListener("click",()=>{

renkDegistir();
})

