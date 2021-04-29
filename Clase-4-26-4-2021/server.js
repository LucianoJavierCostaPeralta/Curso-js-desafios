//Function constante flecha
//Constante    
const CANTIDAD_NOTAS = parseInt(prompt('Ingrese el numero de calificaciones a evaluar . Recuerde que la calificacion a ingresar debe estar em el rango de 0 a 10'));
const NOTA_APROBATORIA = 6 ;
const NOTA_COMPLICADA = 5 ;



//Lets
let nota , aprobados = 0 , desaprobados = 0 , complicados = 0 ; 

const condicional = ()=>{
    if(nota >= NOTA_APROBATORIA){
        aprobados++
    } else if (nota == NOTA_COMPLICADA){
        complicados++

    }else{
        desaprobados++
    }
}

const pedirMota = () => {

    //Ciclo For
    for (let index = 1; index <= CANTIDAD_NOTAS; index++) {
        
        //Ciclo doWhile
        do {

            nota = parseInt(prompt(`Nota nro ${index} ` ));
            
        } while (nota < 0 || nota > 10);


        //condicional multiple
        condicional();

        
    }
    
    //Imprimiendo resultados
    alert(`Alumnos 
    Aprobados : ${aprobados}
    Complidados : ${complicados}
    Desaprobados : ${desaprobados}`);


    
}

//LLamada a la Funcion
pedirMota();