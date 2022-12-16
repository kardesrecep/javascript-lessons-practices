//Textboxlara girilen ad ve meslek değerlerine göre mesaj yazdırın.
  let mesaj = document.querySelector("#mesaj");
function gonder(){
    let isim = document.querySelector("#ad").value;
    let meslek = document.querySelector("#meslek").value;
  
    mesaj.classList.remove("d-none");
    mesaj.classList.add("d-block");
    if(!isim || !meslek){
        mesaj.innerText = "Lütfen formu eksiksiz doldurunuz"
    }
    else
        mesaj.innerText = `Sayın ${meslek} ${isim} hoşgeldiniz`

}

function sil(){
    mesaj.innerText = "";
    mesaj.classList.add("d-none");
}