function tipCalculator(){
    event.preventDefault();
    const foodAmount = Number(document.getElementById("foodAmount").value);
    console.log(foodAmount);
    const tipPercentage= Number(document.getElementById("tipPercentage").value);
    let tipAmount= (tipPercentage/100 )* foodAmount;
    let total = foodAmount + tipAmount;
    console.log(total);
    document.getElementById("demo").innerHTML= `The Payable amount is ${total} /-`;
    document.getElementById("form").reset();
}




