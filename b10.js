let string = prompt("Mời nhập chuỗi");
let newString = string.trim();
alert(newString);
let count = 1;
for (let i = 0; i < newString.length; i++) {
    if(newString[i] !== " " && newString[i+1]==" "){
        count++;
    }
}
console.log(`Số lượng từ trong chuỗi ${string} là: ${count}`);