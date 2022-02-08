const sumAll = function(x,y) { //Declara la funcion
    let z = 0 ; //declara variable z que va a contener el resultado
    let Error = "ERROR"; //muestra error si se cumple alguna condicion
        if(x < 0 || y < 0 || typeof x === "string" || typeof y === "string" || typeof x === 'object' || typeof y === 'object'){ //condiciones para que muestre error, si x y y SON NEGATIVOS,
            //Si x y y son de tipo string o si son objectos manda error

                   return Error;//regresa error cuando se cumple alguna condicion
        }

        else  if( x < y ){// de lo contrario si pasan el filtro revisa si x es menor a y
              for(let i = x; i<=y;i++){//asigna i = x como es mas chico y Y el limite
                   z = i + z; //realiza la suma 
               }//termina for
        }// termina primera condicion

        else if ( x > y){ //revisa si x es mayor a Y
                 for(let i = y; i<=x;i++){ // inicializa i = y como es mas chico
                       z = i + z; //realiza sumas consecutivas
                  } //cierra for
        }
         return z; //devuelve valor ya sea por primera condicion o segunda 
      /*  console.log(z);*/
 
};
// Do not edit below this line
module.exports = sumAll;

