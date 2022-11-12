let button1 = document.getElementById("linkedin");
let button2 = document.getElementById("github");
let articulo = document.getElementById("articulo");
let mexishop = document.getElementById("mexishop");

button1.addEventListener("click", function(){
    location.href= "https://www.linkedin.com/in/osvaldoresendiz/";
});//addEventListener button1

button2.addEventListener("click", function(){
    location.href= "https://github.com/OsvaldoReTo";
});//addEventListener button1

articulo.addEventListener("click", function(){
    location.href="https://doi.org/10.1016/j.jnnfm.2022.104902"
})

mexishop.addEventListener("click", function(){
    location.href="https://mexishop-e6.herokuapp.com/"
})