const repeatString = function(string1,int1) {

    let text = string1;
    let num = int1;
    let concatenar=[];
    let textoUnido="";
    let error="ERROR";
    let textoUnidoLenght=0;
    if(num <0){
        return error;
    }
 
    else 
        if(text == ""){ //si texto no recibe nada manda nada 
            return "";

        }
        else //si text tiene texto lo mete al arreglo for

        for(let i = 1; i <= num;i++){ //for que mete el hey en el arreglo las veces indicadas
            concatenar[i]=text;
         }
          textoUnido = concatenar.join(""); //convierte el arreglo en string sin comas
          console.log(textoUnido);//imprime el string las veces indicadas
          /*textoUnidoLenght = textoUnido.match(/((hey))/g).length ;//cuanta cuatos hey hay*/
          /*console.log(`${textoUnidoLenght} and ${number}`);//imprime en pantalla cuantos hey hay y cuantos se introdujeron*/
          return textoUnidoLenght;
         
         /* return textoUnido;//devuelve el resultado*/

    
};

const number = Math.floor(Math.random() * 1000)//funcion que crea numeros aleatorios y los agrega a la funcion de repetir string
repeatString("hey",number);//invocamos a la funcion y hace su cometido

// Do not edit below this line
module.exports = repeatString;
