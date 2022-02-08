const removeFromArray = function(array,...inputNumber) {

    let arrayInFunction = array;
    let arrayInFunctionLength = arrayInFunction.length;
    let verifyInArray = 0;
    let saveIndexArray = 0;
    let ArrayRemoved = [];
    for(let i=0;i<=inputNumber.length;i++){
         elementEliminate = inputNumber[i];
              for(let i =0;i<=arrayInFunctionLength;i++){
                 verifyInArray = arrayInFunction[i];

                 saveIndexArray = i;
                      if(elementEliminate === verifyInArray){
                          ArrayRemoved = arrayInFunction.splice(saveIndexArray,1);
                       }
                  }
                  
        }
         console.log(arrayInFunction);
        return arrayInFunction;
};

let numbers = [1,2,3];

removeFromArray(numbers,"1",3); 

// Do not edit below this line
module.exports = removeFromArray;




