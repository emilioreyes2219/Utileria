document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");
    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");
    const resultado = document.getElementById("resultadoEdad");

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fechaNacimiento").value;
        const numero = document.getElementById("numero").value;
        const texto = document.getElementById("textoLibre").value;
        const numeroPar = document.getElementById("numeroPar").value;

        if(!soloLetras(nombre)){
            alert("Nombre inválido");
            return;
        }

        if(!validarLongitud(numero,5)){
            alert("El número supera los 5 dígitos.");
            return;
        }

        const edad = calcularEdad(fecha);

        resultado.innerHTML =
            "Tu edad es <b>" + edad + " años</b><br><br>" +
            "Texto formateado: " + formatearTexto(texto) + "<br>" +
            "¿El número es par?: " + esNumeroPar(numeroPar);

        modal.style.display="flex";

    });

    cerrar.onclick=function(){
        modal.style.display="none";
    }

    window.onclick=function(e){
        if(e.target==modal){
            modal.style.display="none";
        }
    }
console.log("=== Pruebas de la librería ===");
console.log("Correo válido:", validarCorreo("jorge@gmail.com"));
console.log("Contraseña válida:", validarPassword("Admin123*"));
console.log("Edad:", calcularEdad("2004-06-15"));
console.log("Solo letras:", soloLetras("Jorge Emilio"));
console.log("Longitud válida:", validarLongitud(12345, 5));
console.log("Texto formateado:", formatearTexto("hola mundo"));
console.log("Número par:", esNumeroPar(24));
});
