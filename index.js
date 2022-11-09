// Main

let curso = parseInt(
   prompt("Escoge el curso que deseas comprar: 1.nutricion - 2.entrenador - 3.dance - 4.futbol")
);
let seguirComprando = true;
let totalCompra = 0;
let decision;

// Arrays

const products = [];
const cart = [];

// Classes

class NewCurso {
   constructor(id, name, price, stock) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
   }
}

// Hero

const nutricion = new NewCurso(1, "nutricion", 5000, 100);
products.push(nutricion);
const entrenador = new NewCurso(2, "entrenador", 11000, 100);
products.push(entrenador);
const dance = new NewCurso(3, "dance", 8000, 100);
products.push(dance);
const futbol = new NewCurso(4, "futbol", 1000, 100);
products.push(futbol);

while (seguirComprando === true) {
   const product = products.find((prod) => prod.id === curso);
   if (product) {
      cart.push(product);
   }

   decision = parseInt(prompt("Quieres seguir comprando algun otro curso? 1.Si - 2.No"));
   if (decision === 1) {
      curso = parseInt(
         prompt(
            "Escoge el curso que deseas comprar: 1.nutricion - 2.entrenador - 3.dance - 4.futbol"
         )
      );
   } else {
      seguirComprando = false;
   }
}

cart.forEach((product) => {
   totalCompra = totalCompra + product.price;
});

console.log(cart);
console.log(totalCompra);
const totalCompraConDescuento = descuento(totalCompra);
alert(`El total de tu compra con descuento aplicado es ${totalCompraConDescuento}`);

function descuento(valor) {
   let descuento = 0;
   if (valor <= 10000) {
      descuento = 10;
   } else if (valor > 10000 && valor <= 20000) {
      descuento = 15;
   } else {
      descuento = 20;
   }

   let valorDescuento = valor * (descuento / 100);
   let valorFinal = valor - valorDescuento;
   return valorFinal;
}
