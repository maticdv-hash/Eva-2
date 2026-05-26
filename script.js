
let colaboradores = [];

const formulario = document.getElementById("formulario");

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const cargoInput = document.getElementById("cargo");
const correoInput = document.getElementById("correo");

const mensajeError = document.getElementById("mensajeError");

const tablaColaboradores = document.getElementById("tablaColaboradores");

const busquedaInput = document.getElementById("busqueda");

function validarFormulario(nombre, apellido, cargo, correo) {

    if (!nombre || !apellido || !cargo || !correo) {
        mensajeError.textContent = "Todos los campos son obligatorios";
        return false;
    }

    if (!correo.includes("@")) {
        mensajeError.textContent = "Ingrese un correo válido";
        return false;
    }

    if (!correo.endsWith("@empresa.cl")) {
        mensajeError.textContent = "El correo debe pertenecer al dominio @empresa.cl";
        return false;
    }

    mensajeError.textContent = "";
    return true;
}

function mostrarColaboradores() {

    tablaColaboradores.innerHTML = "";

    colaboradores.forEach(function(colaborador, indice) {

        tablaColaboradores.innerHTML += `
            <tr>
                <td>${colaborador.nombre}</td>
                <td>${colaborador.apellido}</td>
                <td>${colaborador.cargo}</td>
                <td>${colaborador.correo}</td>
                <td>

                <button onclick="eliminarColaborador(${indice})">
                    Eliminar
                </button>

                </td>
                
            </tr>
        `;

    });

}

function eliminarColaborador(indice) {

    colaboradores.splice(indice, 1);

    mostrarColaboradores();

}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const cargo = cargoInput.value.trim();
    const correo = correoInput.value.trim();

    if (validarFormulario(nombre, apellido, cargo, correo)) {

    const colaborador = {
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        correo: correo
    };

    colaboradores.push(colaborador);

    mostrarColaboradores();

    formulario.reset();
    
    console.log(colaboradores);
}
});