//Textboxlara girilen taban ve üs değerlerine göre oluşan üstlü sayının değerini yaz

function ustAl(){
    const taban = document.querySelector("#taban").value;
    const ust = document.querySelector("#us").value;
    const sonuc = Number(taban)**Number(ust);
    const msgSonuc = document.querySelector(".sonuc");
    msgSonuc.classList.add("ekle");
    msgSonuc.innerHTML = `<b>${taban}<sup>${ust}</sup> = ${sonuc}</b>`
}