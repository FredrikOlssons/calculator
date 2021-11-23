
const displayInput= document.getElementById("result")

function clk(val){
    console.log(val)
    displayInput.value+=val;
}

function clrdisp() {
    displayInput.value=""
}

function eql() {
    let text=displayInput.value;
    let summa=eval(text);
    displayInput.value=summa
}

//hej
