const fibonacci = function(number) {
 let numberFind = Number(number); 
 let indice = numberFind-1;
 let dato =0;
 let result = 0;
 let a = 1; 
 let b = 0; 
 let arregloFibo = new Array(26);

 if(numberFind < 0){

        return "OOPS";
 }

for(let i = 0;i<arregloFibo.length;i++){

    console.log(result);
    result = a + b;
    a = b;
    b = result;
    arregloFibo[i] = result;
    
}


    dato = arregloFibo[indice];
    console.log(dato);
    return dato;

};
fibonacci();
// Do not edit below this line
module.exports = fibonacci;
