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
/*if (cantidadDeElefantes == 0) {
    alert("La araña esta contenta porque ningun elefante se balancea en su tela");
} else if (cantidadDeElefantes % 1 != 0){
    alert("Flaco, tenes que poner un numero entero");
} else if (cantidadDeElefantes<0) {
    alert("Los " + (-cantidadDeElefantes) + " elefantes de antimateria levitaron sobre la tela de una araña y generaron un agujero mas negro que tu alma");
} else {
for (let i = 1; i<=cantidadDeElefantes; i++) {
    if (i == 1 && i!=cantidadDeElefantes) {
        alert(i + " elefante se balanceaba sobre la tela de una araña, como veia que resistia, fue a llamar a otro elefante");
    } else if (i == 1 && i==cantidadDeElefantes){
        alert("El elefante se balanceaba sobre la tela de una araña, como veia que resisitia, fue a llamar a otro elefante, pero no tenia amigos asi que se quedo solo para siempre y murio en soledad eterna");
    } else if (i>12){
        alert("La tela no resistio y los elefantes cayeron todos al vacio donde les esperaba una muerte sordida");
        break;
    } else if (i==cantidadDeElefantes) {
        alert(i + " elefantes se balanceaban sobre la tela de una araña, como veian que resistia, se quedaron chilling sobre la tela y no llamaron a ningun elefante mas por si las dudas");
        break
    } else{
        alert(i + " elefantes se balanceaban sobre la tela de una araña, como veian que resistia, fueron a llamar a otro elefante");
    } 
}
}*/

function frase (i,elefantes){
    if (i==0) {
        if (elefantes == 0) {
            return("La araña esta contenta porque ningun elefante se balancea en su tela");
        } else if (elefantes % 1 != 0){
            return("Flaco, tenes que poner un numero entero");
        } else if (elefantes<0) {
            return("Los " + (elefantes) + " elefantes de antimateria levitaron sobre la tela de una araña y generaron un agujero mas negro que tu alma");
        }
    }
    else {
        if (i == 1 && i!=cantidadDeElefantes) {
            return(i + " elefante se balanceaba sobre la tela de una araña, como veia que resistia, fue a llamar a otro elefante");
        } else if (i == 1 && i==cantidadDeElefantes){
            return("El elefante se balanceaba sobre la tela de una araña, como veia que resisitia, fue a llamar a otro elefante, pero no tenia amigos asi que se quedo solo para siempre y murio en soledad eterna");
        } else if (i>12){
            return("La tela no resistio y los elefantes cayeron todos al vacio donde les esperaba una muerte sordida");
        } else if (i==cantidadDeElefantes) {
            return(i + " elefantes se balanceaban sobre la tela de una araña, como veian que resistia, se quedaron chilling sobre la tela y no llamaron a ningun elefante mas por si las dudas");
        } else{
            return(i + " elefantes se balanceaban sobre la tela de una araña, como veian que resistia, fueron a llamar a otro elefante");
        } 
    }
}


if (cantidadDeElefantes > 0 && cantidadDeElefantes % 1 == 0){
    for (let i = 1; i<=cantidadDeElefantes; i++) {
        alert(frase(i,cantidadDeElefantes));
        if (i>12 || i==cantidadDeElefantes){
            break;
        }
    }
}
else {
    alert(frase(0,cantidadDeElefantes));
}


