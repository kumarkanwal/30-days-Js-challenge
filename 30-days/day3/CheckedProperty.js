 
 const myCheckBox = document.getElementById('myCheckBox');
 const visaBtn = document.getElementById('visaBtn');
 const masterCardBtn = document.getElementById('masterCardBtn');
 const paypalBtn = document.getElementById('paypalBtn');
 const mySubmit = document.getElementById('mySubmit');
 const subResult = document.getElementById('subResult');
 const paymentResult = document.getElementById('paymentResult');


 mySubmit.onclick = () => {
    if(myCheckBox.checked){
        subResult.textContent = "You have subscribed";

    }else{
        subResult.textContent = "You have not subscribed";

        
    }

    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with Visa";
    } else if(masterCardBtn.checked){
        paymentResult.textContent = "you are paying with MasterCard";
    }else if(paypalBtn.checked){
        paymentResult.textContent = "you are paying with Paypal";
    }else{
        paymentResult.textContent = "you must select a payment method";
    }
 }
