const leapYears = function(years){ // declaré funcion y recibe años

    let yearsString = years.toString(); // convierte años a string
    let yearsLength = yearsString.length; // obtiene la longitud de string Años
    let verificador = yearsString.substr(yearsLength-2,2); //obtiene los ultimos dos digitos del añoString y guarda en un verificador
    let answerTrue = true; //variable que devuleve verdadero
    let answerFalse = false; //variable que devuleve falso
    let result= 0; //almacena el resultado de dividir año / 4 solo el cociente 
    let resultDiv100 = 0; //almacena el resultado de dividir año / 100 solo el cociente 
    let resultDiv400 = 0; //almacena el resultado de dividir año / 400 solo el cociente 


    if(verificador === "00"){ // verifica mediante string que verificador reciba dos 00 

        resultDiv100 = years % 100; //divide año ingresado en int entre 100 almacena cociente
        resultDiv400 = years % 400; //divide año ingresado en int entre 100 almacena cociente

        if(resultDiv100 == 0 && resultDiv400 == 0){ // hace comparacion si resultados en coeficientes son 0 ambos quiere decir que son centenarios biciestos
           return answerTrue; //devuelve verdadero
        }
        else  // de lo contrario devuelve falso
            return answerFalse;
    }
    else { //Si el año ingresado no tiene dobles 00 es año cualquiera 
        
        result = years % 4; //lo divide entre 4
    }

    if(result == 0){ // Compara si el cociente es 0

        return answerTrue; // devuelve valor verdadero 
    }
    else // caso contrario devuelve error 
         return answerFalse;
    
    
};
// Do not edit below this line
module.exports = leapYears;



