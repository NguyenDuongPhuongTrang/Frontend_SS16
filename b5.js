let firstNumber = prompt("Nhập số a");
let secondNumber = prompt("Nhập số b");
let remainder = Number(firstNumber) % Number(secondNumber);
if(remainder == 0){
    alert(`${firstNumber} là bội số của ${secondNumber}`);
}else{
    alert(`${firstNumber} không là bội số của ${secondNumber}`);
}