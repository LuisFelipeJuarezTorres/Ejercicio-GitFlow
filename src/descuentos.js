function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}

function calcularPrecioFinal(precio, tipo_cliente){
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }

  if (tipo_cliente == "estudiante"){
    return calcularTotal(precio, precio*0.15)
  }

  return precio
}

module.exports = { calcularTotal,
  calcularPrecioFinal
 };
