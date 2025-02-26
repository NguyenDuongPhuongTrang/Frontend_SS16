let string = prompt("Mời nhập chuỗi bất kì").trim();
let newString = string.split(" ");
let text ="";
for (let i = 0; i < newString.length; i++) {
    text += newString[i].charAt(0).toUpperCase() + newString[i].slice(1) + " ";
}
alert(text.trim());



