let numero , acumulador = 0 ;

for (let index = 0; index <  5 ; index++) {
    
    numero= parseInt(prompt('Ingrese un numero')) ; 

    acumulador = acumulador + numero ; 
    
}

alert( `El valor de el acumulador es ${acumulador} ` );