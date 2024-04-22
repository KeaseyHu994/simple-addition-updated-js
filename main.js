// simp addition

// BT Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){
    //input
    let num1 = +document.getElementById("num1-in").value;
    let num2 = +document.getElementById("num2-in").value;

    //process
    let total = num1 + num2;

    //output
    document.getElementById("fstN").innerHTML = `First Number: ${num1}`;
    document.getElementById("scdN").innerHTML = `Second Number: ${num2}`;
    document.getElementById("sum").innerHTML = `The sum of ${num1} and ${num2} is: ${total}`;
}