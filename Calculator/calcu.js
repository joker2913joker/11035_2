

var operators = prompt(" [1] ADDITION \n [2] SUBTRACTION \n [3] DIVISION \n [4] MULTIPLICATION"); 
var a = prompt("Enter the first Value : ");
var b = prompt("Enter the second Value : ");

a = parseInt(a);
b = parseInt(b);


if (operators == 1){
    function add_function(a,b){return a + b}
    c = a + b;
    alert(c)
}
else if (operators == 2){
    function sub_function(a,b){return a - b}
    c = a - b;
    alert(c)
}
else if (operators == 3){
    function div_function(a,b){return a / b}
    c = a / b;
    alert(c)
}
else if (operators == 4){
    function mul_function(a,b){return a * b}
    c = a * b;
    alert(c)
}
