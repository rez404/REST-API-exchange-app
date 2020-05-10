const amount = document.getElementById("amount");
const button = document.getElementById("change");
const tlInput = document.getElementById("tl");

button.addEventListener("click",changeRates);
const url = "https://api.exchangeratesapi.io/latest";

function changeRates(){
    xhr = new XMLHttpRequest();

    response = xhr.open("GET",url,true);
    xhr.onload = function(){
        if(amount.value === "" ) {
            console.log("Lütfen geçerli bir değer girin ");
        } else {
        data = JSON.parse(this.responseText);
        tl = (parseInt(amount.value) * parseInt(data["rates"]["TRY"]));
        tlInput.value = tl;
    }
    }


    xhr.send();

}

