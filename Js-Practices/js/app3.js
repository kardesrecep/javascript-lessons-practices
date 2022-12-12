//Kutuların içine javascript ile h1 elementleri ekleyelim

let kutu1 = document.querySelector(".kutu1");
let kutu2 = document.querySelector(".kutu2");
let kutu3 = document.querySelector(".kutu3");
let kutu4 = document.querySelector(".kutu4");

kutu1.innerHTML = `<h1 style="text-align:center;color:black">MOR</h1>`
kutu2.innerHTML = `<h1 style="text-align:center;color:black">KIRMIZI</h1>`
kutu3.innerHTML = `<h1 style="text-align:center;color:black">YESIL</h1>`
kutu4.innerHTML = `<h1 style="text-align:center;color:black">SARI</h1>`
