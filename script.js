
let colaboradores = [];

const formulario = document.getElementById("formulario");

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const cargoInput = document.getElementById("cargo");
const correoInput = document.getElementById("correo");

const mensajeError = document.getElementById("mensajeError");

const tablaColaboradores = document.getElementById("tablaColaboradores");

const busquedaInput = document.getElementById("busqueda");

if (validarFormulario(nombre, apellido, cargo, correo)) {

    const colaborador = {
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        correo: correo
    };

    colaboradores.push(colaborador);

    formulario.reset();

    console.log(colaboradores);
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const cargo = cargoInput.value.trim();
    const correo = correoInput.value.trim();

    validarFormulario(nombre, apellido, cargo, correo);

});