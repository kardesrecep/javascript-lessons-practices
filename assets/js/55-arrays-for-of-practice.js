import {countries} from "../data/countries.js";

const loadData = () => { 
    let options = "";
    
    for(let country of countries){
        console.log(country);
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;
    }

    document.querySelector("#ddlCountries").innerHTML = options;
}
loadData();
