
const util = require("util");
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
  ];
  
  function aplicarDescuento(productos, porcentajeDescuento) {
    return productos.map((producto) => {
        const descuento = producto.precio * (porcentajeDescuento / 100);
        return {
         ...producto,
          precio: producto.precio - descuento
        };
      });
    }
  const inspected = util.inspect(aplicarDescuento(productos, 10));
  console.log(inspected);
  /*const productosConDescuento = aplicarDescuento(productos, 10);
  console.log(productosConDescuento);*/