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
    document.getElementById("output").innerHTML = total;
}