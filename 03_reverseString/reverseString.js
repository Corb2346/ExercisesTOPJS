const reverseString = function(string1) {
    let textoRecibido = string1;
    let arregloTexto = Array.from(textoRecibido);
    let arregloTextoLength = arregloTexto.length; 
    let arregloIndice = arregloTextoLength-1;
    let tomarLetras = "";
    let arregloReverse = new Array(arregloTextoLength);
    let textoUnido = "";

    for(let i = 0;i<arregloTextoLength ;i++){
        tomarLetras = arregloTexto[arregloIndice];
        arregloReverse[i] = tomarLetras;
        --arregloIndice;
        console.log(arregloReverse[i]);
    }
    textoUnido = arregloReverse.join("");
    console.log(textoUnido);
    return textoUnido;
};
reverseString("This progrma change the order of the string input");
// Do not edit below this line
module.exports = reverseString;
