var a = 0;
var b = 0;

document.querySelectorAll("button").forEach(item => {item.addEventListener("click", openTab)});
var allTabs = document.querySelectorAll(".io-section .row");

    function hide(){
        allTabs.forEach(item =>{item.classList.add("hide")})
    }

    function reveal(c){
        document.querySelector(".io-section ." + c).classList.remove("hide");
    }

function openTab(){

    var selectedButton = this.classList;
    console.log(selectedButton);

    switch (selectedButton[3]){
        case "b1":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b2":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b3":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b4":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b5":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b6":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b7":
            hide();
            reveal(selectedButton[3]);
        break;
        case "b8":
            hide();
            reveal(selectedButton[3]);
        break;
    }

}




function takeInput (c){
    a = parseFloat(document.getElementById("a-" + c).value);
    b = parseFloat(document.getElementById("b-" + c).value);
    
    console.log(a + b);
}
function takeSingleInput(c){
    a = parseFloat(document.getElementById("a-" + c).value);
    console.log(a);
}

function mq_mtl(){
    takeInput("b1");
    var mtl = b/(a/1000);
    mtl = mtl.toFixed(3);
    document.querySelector(".b1 #result").innerHTML = mtl;
}

function mtl_mq(){
    takeInput("b2");
    var mq = b*(a/1000);
    mq = mq.toFixed(3);
    document.querySelector(".b2 #result").innerHTML = mq; 
}

function Pmq_Pmtl(){
    takeInput("b3");
    var pmtl = b/(a/1000);
    pmtl = pmtl.toFixed(3);
    document.querySelector(".b3 #result").innerHTML = pmtl; 
}

function Pmtl_Pmq(){
    takeInput("b4")
    var pmq = b/(a/1000);
    pmq = pmq.toFixed(3);
    document.querySelector(".b4 #result").innerHTML = pmq;
}

function conv_mq_mtl(){
    takeSingleInput("b5");
    var conversione = 1/(a/1000);
    conversione = conversione.toFixed(6);
    document.querySelector(".b5 #result").innerHTML = conversione;
}

function conv_mtl_mq(){
    takeSingleInput("b6");
    var conversione = a/1000;
    conversione = conversione.toFixed(6);
    document.querySelector(".b6 #result").innerHTML = conversione;
}

function mq_pannello(){
    takeInput("b7");
    var mq = (b/1000)*(a/1000);
    mq = mq.toFixed(3);
    document.querySelector(".b7 #result").innerHTML = mq;
}

function ric_mar(){
    takeInput("b8");
    var ricarico = ((b-a)/a)*100;
    var margine = ((b-a)/b)*100;
    ricarico = ricarico.toFixed(3);
    margine = margine.toFixed(3);
    document.querySelector(".b8 #result1").innerHTML = ricarico; 
    document.querySelector(".b8 #result2").innerHTML = margine; 

}
