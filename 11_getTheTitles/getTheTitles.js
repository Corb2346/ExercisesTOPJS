const getTheTitles = function(arreglo) { //funcion que recibe arreglo
 

 return arreglo.map(libro => libro.title); // aplica funcion map a un arreglo, se crea un funcion libro con las flecas, y en libro crea un arreglo con los que contiene title
        

};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
