const value = document.getElementById('value');
const cel_to_fehr = document.getElementById('cel_to_fehr');
const fehr_to_cel = document.getElementById('fehr_to_cel');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result');
let temp;
function convert(){
    if(cel_to_fehr.checked){
        temp = value.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";

    }
    else if(fehr_to_cel.checked){
        temp = value.value;
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "C";

    }
    else{
        result.textContent = "Select a unit";
    }

    
}
