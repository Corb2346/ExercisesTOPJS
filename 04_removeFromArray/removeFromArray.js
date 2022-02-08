const removeFromArray = function(array,...inputNumber) { //declara función, recibe un arreglo y un rest "arreglo dado por el usuario"

    let arrayInFunction = array; // guarda arreglo en funcion
    let arrayInFunctionLength = arrayInFunction.length; // obtiene elementos del arreglo
    let verifyInArray = 0; // obtiene datos del arreglo1
    let saveIndexArray = 0;//guarda el indice del arreglo1
    let ArrayRemoved = []; //almacena los datos eliminados del arreglo1
    for(let i=0;i<=inputNumber.length;i++){ //recorre los datos dados por el usuario
         elementEliminate = inputNumber[i]; // guarda en una variable el dato a eliminar 
              for(let i =0;i<=arrayInFunctionLength;i++){ // recorre el arreglo original para ver si esta el valor a eliminar 
                 verifyInArray = arrayInFunction[i]; // obtiene un dato por dato 
                 saveIndexArray = i;//guarda el indice del dato encontrado
                      if(elementEliminate === verifyInArray){ // verifica si el dato a eliminar es estrictamente igual a el dato obtenido en el arreglo1
                          ArrayRemoved = arrayInFunction.splice(saveIndexArray,1); // si es así elimina el dato del arreglo1 y lo guarda en el arreglo para remover
                       } // cierra condicion
                  } // cierra primer arreglo
                  
        }//cierra arreglo dado por usuario
         
        return arrayInFunction; //regresa el arreglo1 sin valores solicitados por usuario
};

// Do not edit below this line
module.exports = removeFromArray;




