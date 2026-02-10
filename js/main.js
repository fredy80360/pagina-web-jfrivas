let ubicacionPrincipal = window.pageYOffset;

// Efecto Sticky Nav (Ocultar/Mostrar al hacer scroll)
window.addEventListener("scroll", function () {
   let desplazamientoActual = window.pageYOffset;
   if (ubicacionPrincipal >= desplazamientoActual) {
      document.getElementsByTagName("nav")[0].style.top = "0px";
   } else {
      document.getElementsByTagName("nav")[0].style.top = "-100px";
   }
   ubicacionPrincipal = desplazamientoActual;
})

// Lógica del Menú de Hamburguesa
let enlacesHeader = document.querySelector(".enlaces-header");
let hamburguer = document.querySelector(".hamburguer");
let iconoMenu = document.querySelector(".hamburguer i");

hamburguer.addEventListener("click", function () {
   // Alterna la clase para mostrar el menú
   enlacesHeader.classList.toggle("menudos");

   // Cambia el color del botón según el estado
   if (enlacesHeader.classList.contains("menudos")) {
      hamburguer.style.color = "#fff";
      // Opcional: Cambiar el icono a una X (requiere FontAwesome)
      iconoMenu.classList.replace("fa-bars", "fa-xmark");
   } else {
      hamburguer.style.color = "#000";
      iconoMenu.classList.replace("fa-xmark", "fa-bars");
   }
});

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll(".enlaces-header a").forEach(enlace => {
   enlace.addEventListener("click", () => {
      enlacesHeader.classList.remove("menudos");
      hamburguer.style.color = "#000";
      iconoMenu.classList.replace("fa-xmark", "fa-bars");
   });
});