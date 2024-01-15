var registerForm=document.querySelector('.registerForm');
registerForm.onsubmit = function (e) {
    e.preventDefault();
    console.log(e);
    var elements = e.target.elements;
    amount =  elements['amount'].value
    exchange = elements['exchange'].value;
    var result=exchange*amount;
    console.log(result);
    document.querySelector('.result').innerHTML=result;
}