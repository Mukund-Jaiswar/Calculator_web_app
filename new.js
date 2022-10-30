const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const answer = document.querySelector(".answer");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");
const AC = document.getElementById("AC");
const DEL = document.getElementById("DEL");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
let op = ["+","-","/","*"]


one.addEventListener("click",onefun)
function onefun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"1";
    }
}

two.addEventListener("click",twofun)
function twofun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"2";
    }
}

three.addEventListener("click",threefun)
function threefun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"3";
    }
}

four.addEventListener("click",fourfun)
function fourfun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"4";
    }
}

five.addEventListener("click",fivefun)
function fivefun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"5";
    }
}

six.addEventListener("click",sixfun)
function sixfun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"6";
    }
}

seven.addEventListener("click",sevenfun)
function sevenfun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"7";
    }
}

eight.addEventListener("click",eightfun)
function eightfun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"8";
    }
}

nine.addEventListener("click",ninefun)
function ninefun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"9";
    }
}

zero.addEventListener("click",zerofun)
function zerofun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+"0";
    }
}

dot.addEventListener("click",dotfun)
function dotfun(){
    if(answer.innerText.length<13){
        answer.innerText = answer.innerText+".";
    }
}

plus.addEventListener("click",plusfun)
function plusfun(){
    if(answer.innerText.length<13){
    let str = answer.innerText
    if(op.includes(str[str.length-1])){
        str = str.substring(0, str.length-1)
        answer.innerText = str+"+"
    }else{
        answer.innerText = answer.innerText+"+"
    }
    }
}

minus.addEventListener("click",minusfun)
function minusfun(){
    if(answer.innerText.length<13){
    let str = answer.innerText
    if(op.includes(str[str.length-1])){
        str = str.substring(0, str.length-1)
        answer.innerText = str+"-"
    }else{
        answer.innerText = answer.innerText+"-"
    }
    }
}

multiply.addEventListener("click",multiplyfun)
function multiplyfun(){
    if(answer.innerText.length<13){
    let str = answer.innerText
    if(op.includes(str[str.length-1])){
        str = str.substring(0, str.length-1)
        answer.innerText = str+"*"
    }else{
        answer.innerText = answer.innerText+"*"
    }
    }
}

divide.addEventListener("click",dividefun)
function dividefun(){
    if(answer.innerText.length<13){
    let str = answer.innerText
    if(op.includes(str[str.length-1])){
        str = str.substring(0, str.length-1)
        answer.innerText = str+"/"
    }else{
        answer.innerText = answer.innerText+"/"
    }
    }
}

DEL.addEventListener("click",DELfun)
function DELfun(){
    let str = answer.innerText
    answer.innerText = str.substring(0, str.length-1)
}

equal.addEventListener("click",equalfun)
function equalfun(){
    if (answer.innerText===""){
        answer.innerText= ""
    }else if(answer.innerText!==NaN){
        let str = String(eval(answer.innerText))
        if(str.length<13){
            answer.innerText = eval(answer.innerText)
        }else{
            alert("Answers can't be longer than 14 digits")
        }
    }
}

AC.addEventListener("click",ACfun)
function ACfun(){
    answer.innerText = "";
}