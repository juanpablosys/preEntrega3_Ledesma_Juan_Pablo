// DOM IDs
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const botonIngresar = document.getElementById("ingresar");
const divInicial = document.getElementById("divInicial");
const divSaludar = document.getElementById("divSaludar");
const divCarrito = document.getElementById("divCarrito");
const divPrincipal = document.getElementById("divPrincipal");

//Carga de datos del interesado
botonIngresar.onclick = () => {
   if (inputNombre.value || inputApellido.value) {
      const usuario = {
         nombre: inputNombre.value,
         apellido: inputApellido.value,
      };
      localStorage.setItem("infoUsuario", JSON.stringify(usuario));

      // Borrar el mensaje inicial
      divInicial.remove();

      // Datos del interesado
      const saludarTitulo = document.createElement("h2");
      const user = JSON.parse(localStorage.getItem("infoUsuario"));
      saludarTitulo.innerText = `Hola ${user.nombre} ${user.apellido}, indica en que productos estas interesado`;
      divSaludar.append(saludarTitulo);
   }
   const selectLista = document.createElement("div");
   selectLista.innerHTML =
      '<select name="lista" id="lista"></select><button id="ingresarProd">INGRESAR PRODUCTO</button><button id="finalizar">FINALIZAR COMPRA</button>';
   divPrincipal.append(selectLista);

   //Array cursos
   const cursosArray = [];
   class NewCurso {
      constructor(id, name, price, stock) {
         this.id = id;
         this.name = name;
         this.price = price;
         this.stock = stock;
      }
   }

   // Cursos

   const nutricion = new NewCurso(1, "nutricion", 5000, 100);
   cursosArray.push(nutricion);
   const entrenador = new NewCurso(2, "entrenador", 11000, 100);
   cursosArray.push(entrenador);
   const dance = new NewCurso(3, "dance", 8000, 100);
   cursosArray.push(dance);
   const futbol = new NewCurso(4, "futbol", 1000, 100);
   cursosArray.push(futbol);

   const selectProd = document.getElementById("lista");
   cursosArray.forEach((elemento) => {
      const optionProd = document.createElement("option");
      optionProd.innerText = `${elemento.name}: $${elemento.price}`;
      optionProd.setAttribute("id", `${elemento.id}`);
      selectProd.append(optionProd);
   });

   // Carrito de compras
   const carrito = [];

   const botonIngresarProducto = document.getElementById("ingresarProd");
   const finalizarCompra = document.getElementById("finalizar");

   botonIngresarProducto.onclick = () => {
      const indexProd = selectProd.selectedIndex;
      const productoSeleccionado = cursosArray[indexProd];
      carrito.push(productoSeleccionado);
   };

   finalizarCompra.onclick = () => {
      let total = 0;
      carrito.forEach((prod) => {
         total = total + prod.price;
      });
      const carritoProducto = document.createElement("h2");
      carritoProducto.innerText = `Escogiste ${carrito.length} productos y el total de la compra es de ${total}`;
      divCarrito.append(carritoProducto);
   };
};
