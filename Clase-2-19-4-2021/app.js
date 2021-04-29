//if + else 

let number = parseInt(prompt(`Ingrese un numero`));

// Sentencia if

// Si la condicion es verdadera se cumple esto
if (number %2 == 0){

    alert(`EL NUMERO ES PAR`);

} else  { //Si es falso , imprime esto 

    alert(`EL NUMERO ES IMPAR `);
}


// if + elese if + else 

let ferpa = parseInt(prompt("Ingrese un numero"));

if (ferpa > 0) {

    alert('Numero es mayor a 0');
    
} else if (ferpa < 0 ) {

    alert('Numero es menor a 0');
} else {

    alert('El numero es 0 ');
}


//switch

var opcion = parseInt(prompt(`Menu de comida
1-Coca cola + papas
2- Pepsi + super pancho
3- Birra + mani 
4- Cafe + medialuna
5- Salir `));

switch (opcion) {
    case 1:

    alert('Coca + papas');
        
        break;

    case 2 : alert('Pepsi + Super pancho');    

        break;

    default:

    alert('Gracias por estar ');
        break;
}

