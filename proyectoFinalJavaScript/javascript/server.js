class Producto {

  //Atributo static
  static contadorProducto = 0 ;

  //Metodo Constructor
  constructor (nombre , precio ){

    //Atributos
    
    this._idProducto = ++Producto.contadorProducto;

    this._nombre = nombre ;

    this._precio = precio;
  }

  //Metodos GETER 

  get idProducto () {
    return this._idProducto;
  }

  get nombre (){

    return this._nombre;
  }

  get precio (){

    return this._precio;
  }

  //Metodos SETERS

  
  set nombre (nombre){

    this._nombre = nombre;
  }

  set precio (_precio){

    this._precio = precio ;
  }

  //Metodo toString

  toString (){

    return `idProducto : ${this._idProducto}
nombre : ${this._nombre}
precio : $ ${this._precio}`;
  }

}

let producto1 = new Producto('Mantel',1000);
let producto2 = new Producto('Corona',2500);
document.write(`${producto1.toString()}<br>
${producto2.toString()}`);


