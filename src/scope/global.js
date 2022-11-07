// variables

var a ; // declarando 
var b = 'b';//declarandon /asignamos
b='bb';//reasignacion
var a ='aa';//redeclaracion

//Global Scope


var fruit ='Apple';// Global

function bestFruit(){
    console.log(fruit);
}
bestFruit();

function countries(){
    country='Colombia';
    console.log(country);
}
countries();
console.log(country);