function start() {
    window.addEventListener('load', start);
    console.log("Cores iniciada");
};

function showColor(){
    var red = document.querySelector("#rangeRed").value;
    var green = document.querySelector("#rangeGreen").value;
    var blue = document.querySelector("#rangeBlue").value;

    var divCor = "rgb("+ red +","+ green +","+ blue +")";
    document.getElementById("divCor").style.background = divCor;

    document.querySelector("#colorRed").innerHTML =  red;
    document.querySelector("#colorGreen").innerHTML =  green;
    document.querySelector("#colorBlue").innerHTML =  blue;


    setTimeout("showColor()", 10);

}