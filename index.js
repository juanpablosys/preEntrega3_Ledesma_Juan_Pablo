let curso = parseInt(
   prompt("Escoge el curso que deseas comprar: 1.nutricion - 2.entrenador - 3.dance - 4.futbol")
);
let seguirComprando = true;
let totalCompra = 0;
let decision;

// class curso
class NewCurso {
   constructor(id, name, price, stock) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
   }
}
const nutricion = new NewCurso(1, "nutricion", 5000, 100);
const entrenador = new NewCurso(2, "entrenador", 11000, 100);
const dance = new NewCurso(3, "dance", 8000, 100);
const futbol = new NewCurso(4, "futbol", 1000, 100);

while (seguirComprando === true) {
   if (curso === nutricion.id) {
      totalCompra = totalCompra + nutricion.price;
      nutricion.stock = nutricion.stock - 1;
   } else if (curso === entrenador.id) {
      totalCompra = totalCompra + entrenador.price;
      entrenador.stock = entrenador.stock - 1;
   } else if (curso === dance.id) {
      totalCompra = totalCompra + dance.price;
      dance.stock = dance.stock - 1;
   } else if (curso === futbol.id) {
      totalCompra = totalCompra + futbol.price;
      futbol.stock = futbol.stock - 1;
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
