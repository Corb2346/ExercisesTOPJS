const ftoc = function(givenFhreit) { //se declara funcion que cambiará farenheit a celcious

    let fahrenheit =  givenFhreit; // recibe dato y lo almacena localmente 
    let c = 0;//crea varaible que almacena valor de c
    let cFixed =0; // c corregida para contener 1 decimal
    c = (fahrenheit - 32 )*5/9; // operacion para cambiar farhenheit a celcious
    cFixed = c.toFixed(1); // debe redondear a 1 decimal
    cFixed = Number(cFixed); //como devuelve string hay que pasarlo a numero int
    
    return cFixed; //regresa el valor arreglado
};

const ctof = function(givenCelcious) { // funcion que cambia de centigrados a farenheit
  let celcious = givenCelcious; //guarda localmente centrigrados 
  let f =0; //variable que almacenará valor trnasformado 
  let fFixed = 0; //variable que guardará con decimales
  f = (celcious*9/5)+32; //operacion para cambiar de centigrados a celcious
  fFixed = f.toFixed(1);// obtiene 1 decimal 
  fFixed = Number(fFixed);//cambia el valor recibido a numero ya que es string

  return fFixed; // devuelve farenheitn como tipo de dato numerico 

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

ctof(-10);