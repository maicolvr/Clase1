//node "nombre".js sirve para ejecutar el archivo con el nombre indicado
//npm install "nombre" sirve para instalar el packete indicado
console.log("hola mundo");
//sirve para mostrar mensajes o realizar operaciones en la consola / terminal
var express = require("express"); 
//express es el nombre de la libreria y apartir de este punto se almacena en dicha libreria
var app = express();
//"app" es el nombre de la funcion y por ende esta debe de ser la que invoca el metodo
app.get ("/",function (req,res){
//se debe de poner req y res en las .get para obtener la request y la responce independienmente de si se usaran o no
//define la ruta
    res.send("hola mundo");
});
app.get ("//",function (req,res){
    //se debe de poner req y res en las .get para obtener la request y la responce independienmente de si se usaran o no
    //define la ruta
        res.send("hola");
    });
app.listen(3000, function(){
//sirve para que la pagina web este en linea
//abre la comunicacion con el servidor
    console.log("funcione!");
});
