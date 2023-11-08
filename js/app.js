alert ("Ingresó al portal de ventas de entradas para Coldplay")
function bienvenida () {
    let nombreIngresado = prompt("Ingrese su nombre y apellido")
    alert ("Bienvenido" + " " + nombreIngresado)
}
bienvenida()
function entradas (entradasDisponibles = 100) {
if (entradasDisponibles > 100) {
    alert ("UPS, no hay mas entradas disponibles")

    } else if (entradasDisponibles < 100) { 
    alert ("¡Tenemos entradas disponibles!")
}
}
entradas(entradasDisponibles = 100)

