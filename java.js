let display = document.getElementById("display");
let currentInput = "";


function add(input){
    currentInput += input;
    display.textContent = currentInput;
}

function limpar(){
    display.value = "";
    currentInput = "";
    display.textContent = display.value;
}

function calcula(){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error"
    }
}