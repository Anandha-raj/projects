var calc = "";
let displayRes = document.getElementById("displayRes");

displayRes.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if( !document.getElementById("displayRes").value.match(/[a-zA-Z]+/g) ){
            printResult();
        }else{
            alert("Only numbers are allowed.")
            document.getElementById("displayRes").value="";
        }
    }
});

function getValue(val){
    calc+= val;
    document.getElementById("displayRes").value=calc;
}
function printResult(){
    calc = document.getElementById("displayRes").value;
    if( !calc.match(/[a-zA-Z]+/g) ){
        if(calc != ""){
            res = eval(calc);
            document.getElementById("displayRes").value=res;
            calc = res;
        }
    }else{
        alert("Only numbers are allowed.")
        document.getElementById("displayRes").value="";
    }
}
function reset(){
    document.getElementById("displayRes").value="";
    calc = "";
}
function remove(){
    document.getElementById("displayRes").value=calc.slice(0, -1);
    calc = calc.slice(0, -1);
}