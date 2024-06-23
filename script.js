const passwordBox = document.querySelector("#password");
const btn = document.querySelector("button");
const img = document.querySelector("#img");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

const allChar = upperCase + lowerCase + number + symbol;

function generatePassword(){
    let password = "";
    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}

btn.addEventListener("click", generatePassword);
img.addEventListener("click", copy)