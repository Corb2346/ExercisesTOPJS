const palindromes = function (recive) {

    let recivePalabra = recive; 
    let arreglaPalabra = recivePalabra.replace(["!"],"").toLowerCase().trim().replace(["."],"").replace(/\s/g, '').replace(/,/g,""); //elimina las comas,signos de puntuacion y exclamacion
    let arregloPalabra = arreglaPalabra.split('');//divide la frase en palabras devolviendo arreglo
    let arregloLength = arregloPalabra.length;//obtiene el tamaño del arreglo
    let indice = arregloLength -1;//saca el indice del arreglo
    let arregloNuevo = new Array(arregloPalabra.length); // crea un nuevo arreglo vacio pero con el tamaño completo
    let letra = ""; //variable que tomará cada valor

    for(let i = 0;i< arregloPalabra.length;i++){ //ciclo que recorre la palabra o frase recibida
    
        letra = arregloPalabra[indice]; //toma la palabra del arreglo y la guarda en el nuevo arreglo
        indice = indice-1; // recorre el arreglo nuevo 
        arregloNuevo[i]= letra; // guarda en el arreglo nuevo la ultima palabra

    }

    

        arregloPalabraString = arregloPalabra.toString(); // hace string al arreglo
    let arregloNuevoString = arregloNuevo.toString(); //hace string el arreglo nuevo 
    
    if(arregloNuevoString == arregloPalabraString){ // compara si son iguales es un aplindromo

        return true; //devuelve verdadero si es cierto 
    } else 
        return false; //devuelve falso de no ser palindromo
};

// Do not edit below this line
module.exports = palindromes;

palindromes("racecar");