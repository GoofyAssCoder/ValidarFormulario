"use strict"

class Empleado{
    #nombre
    #apellido
    #nacimiento
    #sueldo
    #email
    #dni
    #fecha

    constructor(nombre, apellido, nacimiento, sueldo, email = "", dni = "", fecha = "") {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
        this.#email = email;
        this.#dni = dni;
        this.#fecha = fecha;
    }
    

    toString(){
        return `<tr>
        <td>${this.#nombre}</td>
        <td>${this.#apellido}</td>
        <td>${this.#nacimiento}</td>
        <td>${this.#sueldo}</td>
        <td>${this.#email}</td>
        <td>${this.#dni}</td>
        <td>${this.#fecha}</td>
        </tr>`;
    }

    getNombre(){
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getNacimiento(){
        return this.#nacimiento;
    }
    getSueldo(){
        return this.#sueldo;
    }
    getEmail(){
        return this.#email;
    }

    getDni(){
        return this.#dni;
    }

    getFecha(){
        return this.#fecha;
    }

    
    render(){
        let fila = document.createElement("tr");

        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");
        let email = document.createElement("td");
        let dni = document.createElement("td");
        let fecha = document.createElement("td");

        nombre.textContent = this.#nombre;
        apellido.textContent = this.#apellido;
        nacimiento.textContent = this.#nacimiento;
        sueldo.textContent = this.#sueldo;
        email.textContent = this.#email;
        dni.textContent = this.#dni;
        fecha.textContent = this.#fecha;

        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);
        fila.appendChild(email);
        fila.appendChild(dni);
        fila.appendChild(fecha);

        return fila;
    }
}

let empleados = [
    new Empleado("Paco","Fiestas",1997,33000, "paco@gmail.com", "71945631Ñ"),
    new Empleado("Chindas","Vinto",2001,27000, "chindas@vinto.es"),
    new Empleado("Chingas","Perma",1772,38000),
    new Empleado("Perma","Trago",1991,74000),
    new Empleado("Misty","Articuno",1987,37000),
    new Empleado("Giovanni","Vazquez",1000,20000),
    new Empleado("Lagartijo","Iguano",1993,54000),
]

let tabla = document.getElementById("lista-empleados");
empleados.forEach(empleado =>{
    let fila=empleado.render();
    tabla.appendChild(fila);
});

// Funciones de validación
function validarEmail() {
    var campoEmail = document.getElementById("email");
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validEmail.test(campoEmail.value)) {
        console.log("Email válido :)");
        return true;
    } else {
        alert("El email introducido no es válido");
        return false;
    }
}

function comprobarDNI() {
    var campoDNI = document.getElementById("dni");
    var DNIvalido = /^[0-9]{8}[A-Z]$/;

    if (DNIvalido.test(campoDNI.value)) {
        console.log("DNI válido :)");
        return true;
    } else {
        alert("El DNI introducido no es válido");
        return false;
    }
}

function comprobarFecha() {
    var campoFecha = document.getElementById("fecha");
    //var fechavalida = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/; (Se admite DD/MM/YYYY o DD-MM-YYYY)
    var fechavalida = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/;


    if (fechavalida.test(campoFecha.value)) {
        console.log("Fecha válida :)");
        return true;
    } else {
        alert("La fecha introducida no es válida (Se admite solamente el formato: DD/MM/YYYY)");
        return false;
    }
}

function validarFormulario() {
    if (!validarEmail()) return false;
    if (!comprobarDNI()) return false;
    if (!comprobarFecha()) return false;
    return true;
}

// Evento para añadir empleado
let boton = document.getElementById("formulario-enviar");
boton.addEventListener("click", evento => {
    evento.preventDefault();

    if (!validarFormulario()) return;

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let sueldo = document.getElementById("sueldo").value;
    let email = document.getElementById("email").value;
    let dni = document.getElementById("dni").value;
    let fecha = document.getElementById("fecha").value;

    let empleado = new Empleado(nombre, apellido, nacimiento, sueldo, email, dni, fecha);
    empleados.push(empleado);

    let fila = empleado.render();
    tabla.appendChild(fila);
});

/*
let boton=document.getElementById("formulario-enviar");
boton.addEventListener('click',evento =>{
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let sueldo = document.getElementById('sueldo').value;
    let email = document.getElementById('email').value;
    let dni = document.getElementById('dni').value;
    let fecha = document.getElementById('fecha').value;

    if(validarEmail() && comprobarDNI() && comprobarFecha()){
    //if(validarEmail()){

    let empleado = new Empleado(nombre,apellido,nacimiento,sueldo, email, dni, fecha);
    empleados.push(empleado);

    let tabla = document.getElementById("lista-empleados");
    let fila = empleado.render();
    tabla.appendChild(fila);

    }else if(validarEmail()==false){
        alert("Error email: No se ha añadido el empleado a la tabla");

    }else if(comprobarDNI()==false){
        alert("Error DNI: No se ha añadido el empleado a la tabla");

    }else if(comprobarFecha()==false){
        alert("Error fecha: No se ha añadido el empleado a la tabla");

    }
})

//Ejercicio: añadir campo email y filtrar el email que nos pase en el formulario:
function validarEmail(){
    
	var campoEmail = document.getElementById('email');
	
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( validEmail.test(campoEmail.value) ){
		console.log('Email válido :)');
		return true;
	}else{
		alert('El email introducido no es válido');
		return false;
	}
}

function comprobarDNI(){

    var campoDNI = document.getElementById('dni');
	
	var DNIvalido = /(^([0-9]{8,8}[A-Z])|^)$/; ///(^([0-9]{8,8}\-[A-Z])|^)$/ (con guión)

	if( DNIvalido.test(campoDNI.value) ){
		console.log('DNI válido :)');
		return true;
	}else{
		alert('El DNI introducido no es válido');
		return false;
	}
}

function comprobarFecha(){

    var campoFecha = document.getElementById('fecha');
	
	var fechaválida = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

	if( fechaválida.test(campoFecha.value) ){
		console.log('Fecha válida :)');
		return true;
	}else{
		alert('La fecha introducida no es válida (Se admite DD/MM/YYYY o DD-MM-YYYY))');
		return false;
	}
}*/



