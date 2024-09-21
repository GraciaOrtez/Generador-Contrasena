let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let fortaleza = document.getElementById('fortaleza');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if (numeroDigitado < 8){
        alert ("la cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';

    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validarFortaleza(password);
    
}

function limpiar() {
    cantidad.value = '';
    contrasena.value = '';
    resultado.textContent = '';
    fortaleza.textContent = '';
}

function validarFortaleza(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial) {
        resultado.textContent = 'La contraseña es Fuerte.';
        resultado.style.color = 'green';
    } else if (tieneMayuscula && tieneMinuscula && tieneNumero) {
        resultado.textContent = 'La contraseña es Medio Fuerte.';
        resultado.style.color = 'orange';
    } else if (tieneMayuscula || tieneMinuscula) {
        resultado.textContent = 'La contraseña es Débil.';
        resultado.style.color = 'red';
    } else {
        resultado.textContent = 'La contraseña es Muy Débil.';
        resultado.style.color = 'darkred'; 
    }
}









