


function mayorDeEdad(){

    let edad = prompt("Ingrese su edad");

    if(edad >= 18){
        console.log("Continue");
    }

    else{
        console.log("No podes ingresar");
        let edad = prompt("debes ser mayor de edad para ingresar");
    }

}
function saludarUsuario(){

    let nombreUsuario = prompt("Ingrese su nombre");

    console.log("Bienvenido/a al sistema: ", nombreUsuario)

}
function cuentas(){

    let num = prompt("Para multiplicar pulse 1, para dividir 2")

    if(num == 1){
        let numero = prompt("coloque el numero a multiplicar")
        console.log("El doble es: ", numero*2);
    }

    else if (num == 2){
        let numero = prompt("coloque el numero a dividir")
        console.log("la mitad es: ", numero/2);
    }

    else if (num <= 3){
        console.log("numero incorrecto");
    }


}
mayorDeEdad();
saludarUsuario();
cuentas();
