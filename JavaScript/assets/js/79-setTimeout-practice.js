document.querySelector("#menu").addEventListener("mouseenter",(e)=>{
e.target.classList.add("opened");
})
document.querySelector("#menu").addEventListener("mouseleave",(e)=>{
    e.target.classList.remove("opened");
    })