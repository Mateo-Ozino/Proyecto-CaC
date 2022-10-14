const formulario = document.querySelector('#formIngresantes');
const inputs = document.querySelectorAll('#formIngresantes input');
const aviso = document.querySelector('#aviso');

const expresiones = {
	nombreApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,12}$/, // 7 a 14 numeros.
    dni: /^\d{8}$/, //8 numeros
    nacionPais: /^[aA-z !ñ]+$/, // Letras
}

const campos = {
	nombre: false,
	apellido: false,
	mail: false,
	nacionalidad: false,
	documentoNro: false,
	telefono: false,
	residencia: false
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre': 
			validarCampo(expresiones.nombreApellido, e.target, 'nombre');
			break;
		case 'apellido': 
			validarCampo(expresiones.nombreApellido, e.target, 'apellido');
			break;
		case 'mail': 
			validarCampo(expresiones.correo, e.target, 'mail');
			break;
		case 'nacionalidad': 
			validarCampo(expresiones.nacionPais, e.target, 'nacionalidad');
			break;
		case 'documentoNro': 
			validarCampo(expresiones.dni, e.target, 'documentoNro');
			break;
		case 'telefono': 
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
		case 'residencia': 
			validarCampo(expresiones.nacionPais, e.target, 'residencia');
			break;
		default:
			break;
	}
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.mail && campos.nacionalidad && campos.documentoNro && campos.telefono && campos.residencia) {
		formulario.reset();
		aviso.innerHTML = "Contacto enviado exitosamente. En breve nos pondremos en contacto contigo.";
		aviso.style.color = "green";
	} else {
		aviso.innerHTML = "Parece que ha habido un error. Revisa los datos ingresados.";
		aviso.style.color = "red";
	}
});

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)) {
		campos[campo] = true;
	} else {
		campos[campo] = false;
	}
}