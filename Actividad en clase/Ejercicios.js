
function comparacion(){
    valor1 = prompt("Cual es el primer valor a comparar?");
    valor2 = prompt("Cual es el segundo valor a comprobar?")

    if (valor1 === valor2){
        console.log("Sus valores son iguales");
    }else{
        console.log("Sus valores no son iguales")
    }
}

function logicos(){
    let variable1 = true;
    let variable2 = false;

    console.log(variable1 && variable2) // false
    console.log(variable1 || variable2) // true
    console.log(!variable1) // false
    console.log(!variable2) // true
}


function misvariables(){
    let mistring = "hola";
    let minumero = 42;
    let mibooleano = true;
    let minull = null;
    let undefined;
    let mibigint = BigInt(123);

    console.log(mistring);
    console.log(minumero);
    console.log(mibooleano);
    console.log(minull);
    console.log(undefined);
    console.log(mibigint);
}

function tipos_datos(){
    let value = prompt("Ingresa un valor")

    if(value.toLowerCase === 'true' || value.toLowerCase === 'false'){
        console.log("Booleano")
    }else if(!isNaN(value)){
        console.log("Integer")
    }else{
        console.log("string")
    }

}

function suma(a,b,c){
    console.log(a+b+c)
}

function multiplicar(a,b,c){
    console.log(a*b*c)
}

function esString(a,b,c){
    console.log(typeof(a) == 'string' || typeof(b) == 'string' || typeof(c) == 'string')
}

function verificaEdad(a){
    let edad = prompt("Cual es tu edad? ");
    if (edad >= 18 ){
        alert("Eres mayor de edad")
    } else{
        alert("Eres menor de edad")
    }
}

function verificaVocales(x){
    let vocales = ['a','e','i','o','u']
    console.log(vocales.includes(x.toLowerCase()))
}

function manejoArray(){
    let array = ["David", "Jose", "Dani", "Carlos"];
    console.log(array);
    array.push("Diego")
    console.log(array)
    array.pop()
    console.log(array)
    console.log(array.indexOf("David"))
}

function mapTest(){
    const numeros = [4, 9, 16, 25, 36, 81]
    console.log(numeros.map(x => Math.sqrt(x)))
}

function loop(){
    let x = 1
    console.log("While")
    while (x <= 10){
        console.log(x)
        x = x + 1;
    }

    console.log("For")
    for ( let i = 1; i <= 10; i++){
        console.log(i)
    }

    console.log("do...while")
    let a = 1
    do{
        console.log(a)
        a = a + 1
    }while (a <= 10)
}


function Car(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.displayInfo = function() {
        console.log(`Marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`);
    };
}

function objetos(a,b,c) {
    const coche = new Car(a, b, c);
    coche.displayInfo();   
}

function domManipulacion(){
    let user_text = prompt("Enter a text: ")
    const parrafo = document.createElement("p")
    parrafo.innerText = user_text
    document.body.appendChild(parrafo)

}


function events(){
    let my_buttons = document.getElementsByTagName("button")

    for(let i = 0; i < my_buttons.length; i++) {
        my_buttons[i].addEventListener("mouseover", function(){
            my_buttons[i].style.backgroundColor = 'purple';
        });

        my_buttons[i].addEventListener("mouseout", function(){
            my_buttons[i].style.backgroundColor = '#f1f1f1';
        });
    }
}