const util = require("util");
const libros = [
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Ficción' },
    { titulo: '1984', autor: 'George Orwell', genero: 'Ciencia ficción' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Ficción' },
    { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', genero: 'Infantil' }
  ];
  
  function buscarLibrosPorGenero(libros, genero) {
    return libros.filter((libro) => libro.genero === genero);
  }
  
const inspected = util.inspect(buscarLibrosPorGenero(libros, 'Ficción'));
console.log(inspected);
/*const librosDeFiccion = buscarLibrosPorGenero(libros, 'Ficción');
  console.log(librosDeFiccion);*/