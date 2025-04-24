
document.getElementById("buscador").addEventListener("input", function() {
    const texto = this.value.toLowerCase();
    const festivos = document.querySelectorAll(".festivo");
    festivos.forEach(f => {
      const nombre = f.querySelector("h3").textContent.toLowerCase();
      f.style.display = nombre.includes(texto) ? "" : "none";
    });
  });
  