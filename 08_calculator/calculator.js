const add = function(a,b) {

return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(reciveArray) {

  let reciveArrayIn = reciveArray; 
  let reciveVariable = 0; 
  let resultado = 0;
    	for(let i = 0; i<reciveArrayIn.length;i++){

         reciveVariable = reciveArrayIn[i];
         resultado = reciveVariable + resultado;
         console.log( resultado);

        if( reciveArrayIn[i] == undefined){

         return 0;
           }
     
           
       }
       return resultado;
          
};


const multiply = function(reciveArreglo) {
    let arregloRecibido = reciveArreglo;
    let reciveDato = 0; 
    let resultado = 1;

    for(let i = 0;i<arregloRecibido.length;i++){

        reciveDato = arregloRecibido[i];
        resultado = reciveDato * resultado;

    }
    return resultado; 
};

const power = function(a,b) {

  let arrayVecesMultiplicar = new Array(b);
  let dato = 0; 
  let resultado = 1;
  for(let i = 0; i <arrayVecesMultiplicar.length;i++){

      arrayVecesMultiplicar[i] = a; 
  }
  for(let i = 0; i <arrayVecesMultiplicar.length;i++){

    dato = arrayVecesMultiplicar[i];
    resultado = dato * resultado; 
}
  
	return resultado; 

};
;
const factorial = function(numFactorial) {
	
  let arregloFactorial = new Array(numFactorial);
  let dato = 0;
  let contador = 1;
  let resultado = 1;

  if(numFactorial === 0){
    return 1;
  }

  for(let i = 0;i<arregloFactorial.length;i++){

    arregloFactorial[i]=contador;
    contador++;
 
  }

  for(let i = 0;i<arregloFactorial.length;i++){
    dato = arregloFactorial[i];
    resultado = dato *resultado;
    console.log(resultado);
  }
  return resultado;
  
};
factorial(0);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
