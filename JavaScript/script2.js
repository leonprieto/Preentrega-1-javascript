/*let ingresaUnNumero = prompt ("Ingresa un numero")
const DIVISION2 = ingresaUnNumero%2 
const DIVISION3 = ingresaUnNumero%3

if(DIVISION2 !=0 && DIVISION3 !=0) {
    console.log(ingresaUnNumero + " No es divisible por 2 y por 3")
} else {
    console.log(ingresaUnNumero + " es divisible por 2 y por 3")
} 
*/

let cantidadDeElefantes = prompt ("Cuantos elefantes hay en el zoologico?");
parseInt.cantidadDeElefantes;
if (cantidadDeElefantes == 0) {
    console.log("La araña esta contenta porque ningun elefante se balancea en su tela");
} else if (cantidadDeElefantes % 1 != 0){
    console.log("Flaco, tenes que poner un numero entero");
} else if (cantidadDeElefantes<0) {
    console.log("Los " + (-cantidadDeElefantes) + " elefantes de antimateria levitaron sobre la tela de una araña y generaron un agujero mas negro que tu alma");
} else {
for (let i = 1; i<=cantidadDeElefantes; i++) {
    if (i == 1 && i!=cantidadDeElefantes) {
        console.log(i + " elefante se balanceaba sobre la tela de una araña, como veia que resistia, fue a llamar a otro elefante");
    } else if (i == 1 && i==cantidadDeElefantes){
        console.log("El elefante se balanceaba sobre la tela de una araña, como veia que resisitia, fue a llamar a otro elefante, pero no tenia amigos asi que se quedo solo para siempre y murio en soledad eterna");
    } else if (i>12){
        console.log("La tela no resistio y los elefantes cayeron todos al vacio donde les esperaba una muerte sordida");
        break;
    } else if (i==cantidadDeElefantes) {
        console.log(i + " elefantes se balanceaban sobre la tela de una araña, como veian que resistia, se quedaron chilling sobre la tela y no llamaron a ningun elefante mas por si las dudas");
        break
    } else{
        console.log(i + " elefantes se balanceaban sobre la tela de una araña, como veian que resistia, fueron a llamar a otro elefante");
    } 
}
}