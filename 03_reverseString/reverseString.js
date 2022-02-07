const reverseString = function(string1) { //funcion que invierte los textos
    let textoRecibido = string1; // recibe texto y lo guarda en variable local
    let arregloTexto = Array.from(textoRecibido); // hace un arreglo con el texto ingresado, caracter por caracter [t,e,x,t,o]
    let arregloTextoLength = arregloTexto.length; //obtiene la cantidad de elementos dentro del arreglo
    let arregloIndice = arregloTextoLength-1;//obtiene la cantidad de indices dentro del arreglo
    let tomarLetras = ""; // variable que almacena temporalmente los caracteres del arreglo original
    let arregloReverse = new Array(arregloTextoLength); // se crea un nuevo arreglo del tamaño del original
    let textoUnido = "";// variable que guarda el texto invertido

    for(let i = 0;i<arregloTextoLength ;i++){  // ciclo for que recorre el arreglo original 
        tomarLetras = arregloTexto[arregloIndice]; // variable que almacena la ultima letra para recorre a la primera letra del arreglo
        arregloReverse[i] = tomarLetras; // segundo arreglo inicializado  en 0 que guarda la ultima letra del primer arreglo
        --arregloIndice; //decremento del primer arreglo para mover los caracteres
        console.log(arregloReverse[i]); // imprime el segundo arreglo invertido
    }
    textoUnido = arregloReverse.join(""); // join elimina el arreglo formando una variable tipo string
    console.log(textoUnido); // muestra la variable sin comas 
    return textoUnido; //devuelve el lexto invertido
};
reverseString(""); //Invoca la funcion, actualmente no recive nada
// Do not edit below this line
module.exports = reverseString;
