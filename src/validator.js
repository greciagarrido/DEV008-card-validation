const validator = {
  isValid: function (tarjeta) {
    //  paso 1; empezamos encasillando a los numeros
    const tarjetaArray = tarjeta.split("");
    // PASO 2 ;aplicamos un reverse para invertir los numeros 
    const tarjetaReverse = tarjetaArray.reverse().join();
    const arrayN = tarjetaReverse.split(",");
    //Paso 3;doble cada segundo digito
    //arreglos para almacenar digitos pares e inpares
    const par = [];
    let retorno;
    let vsuma = 0;
    let sumpares = 0;
    let sumimpares = 0;
    //ciclo para recorrer el arreglo principal pongo un for por ser un ciclo que me ayudara para recorrer el arreglo principal y separar los que ocupan una posicion impar de los pares
    //ponemos la condicion if para tomar los numeros impares  y un else para lo que no cumplian con la condicion 
    for (let i = 0; i < arrayN.length; i++) {
      if ((i % 2) === 0) {
        sumimpares = sumimpares + parseInt((arrayN[i])); 
      }
      else {
        par.push(arrayN[i]);
      }
    }
    //aqui creo la funcion de el siguiente paso de luhn que es la cual separa a los que ocupan segunda posicion y los multiplicara por dos, en este caso
    //se pone una condicion que dicta que el numero en posicion par sera multiplicado por dos
    for (let i = 0; i < par.length; i++) {
      const multi = parseInt(par[i]) * 2;
      if (10 <= multi) {
        const cadena = multi.toString();
        const n1 = parseInt(cadena[0]);
        const n2 = parseInt(cadena[1]);
        sumpares = sumpares + (n1 + n2);
      }
      else {
        sumpares = sumpares + (parseInt(par[i]) * 2);
      }
    }
    vsuma = sumpares + sumimpares;
  
    if ((vsuma % 10) === 0) {
      retorno= true;
    }
    else {
      retorno=  false;
    }
    return retorno;
  },
  maskify: (arrayN) => {
    return arrayN.slice(0, -4).replace(/./g, "#") + arrayN.slice(-4);
  },



};

export default validator;
