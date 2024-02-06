//slider

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isTransitioning = false;
  
    function nextSlide() {
      if (!isTransitioning) {
        isTransitioning = true;
        const currentSlide = document.querySelector(".slide");
        const cloneSlide = currentSlide.cloneNode(true);
        slider.appendChild(cloneSlide);
  
        slider.style.transform = "translateX(-100%)";
        setTimeout(() => {
          slider.removeChild(currentSlide);
          slider.style.transition = "none";
          slider.style.transform = "translateX(0)";
          setTimeout(() => {
            slider.style.transition = "transform 0.5s ease-in-out";
            isTransitioning = false;
          });
        }, 500);
      }
    }
  
    setInterval(nextSlide, 4000); // Cambia de slide cada 3 segundos
  });
  


  //buscador
  document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        document.querySelectorAll(".seccion .articulo").forEach(articulo => {
            articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? articulo.classList.remove("filtro")
                : articulo.classList.add("filtro");
        });
    }
});


//arrays

const productos = ["Ordenadores", "Componentes", "Periféricos", "Telefonía"];

const ordenadores = ["Sobremesa", "Portátil"];

const componentes = ["Gráficas", "Fuente de alimentación", "Ram"]

const teléfonos = ["Android", "Iphone"] 

const disponibilidad = ["En stock", "Sin stock"]

//busqueda superior

function buscar() {
  // Obtén el valor del input
  const searchTerm = document.getElementById('busca').value;

  // Realiza alguna acción con el término de búsqueda, por ejemplo, redirigir a la página correspondiente
  switch (searchTerm.toLowerCase()) {
      case 'ordenadores':
          window.location.href = 'subpaginas/ordenadores.html';
          break;
      case 'componentes':
          window.location.href = 'subpaginas/componentes.html';
          break;
      case 'periféricos':
          window.location.href = 'subpaginas/perifericos.html';
          break;
      case 'telefonía':
          window.location.href = 'subpaginas/telefonia.html';
          break;
      default:
          alert('No se encontró ninguna coincidencia');
  }
}