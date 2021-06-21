/* Sintaxis del lenguaje varibale
y tipos de datos */
console.log("Funcionamiento...")// para probar si sirve el archivo
let numero =10
let num1; //undefined = su valor es desconocido
let num2 = null //nulo
let entero = 10
let decimal = 1.2
let string  = "helo word"
let boleano = false
let fecha = new Date()
let dd = fecha.getDate(),
    mm = fecha.getMonth() + 1,
    aa = fecha.getFullYear(),
    hoy = `${aa}-${mm}-${dd}`
const pi = 3.1416 //constante
console.log("Numero1 =",num1)
console.log(`Numero2 =${num2}`)
console.log(`Fecha hoy= ${fecha}`)
console.log(hoy)
//arreglos, json y objetos
let numeros = [1,2,3,4,5];
let colores = ["red","green","blue"];

const json = {
    "nombres": ["Yadi","Chiki"],
    "genero": "Femenino"
};

const teacher = {
    nombre:`daniel`,
    genero:`Masculino`,
    juegos:[`Futbol`,`Basquet`],
    conocimientos: {
        lenguajes: [
            `Js`,`Python`,`Java`,
            `Php`,
        ],
        materias:{Nivel1:
        `Logica`,Nivel2:`POO`,Nivel3:`POOI`}

    }
 
};
json.genero="F" //cambia las variables
teacher.nombre = "Daniel"
teacher.edad = 50 //agregar valor 
/* console.log('Json',json,json.genero);// se manipula siguiendo la estructura del objeto
console.log('Objeto',teacher,teacher.conocimientos.lenguajes[0],
teacher.conocimientos.materias.Nivel1);//presneta un valor dentro de un arreglo */

// ESTRUCTURAS DE CONTROL
//+-*/%
//<> == === <= >= !=
//&& || !
let n1=5
let n2=5
if (num1===undefined)
    console.log(`${num1}=undefined`);
if (num2===null)
   console.log(`${num2}=null`);
if (n1==0){
   console.log(n1);
} else if(n1===n2){
    console.log(`${n1}=${n2}`);
} else {
    console.log(`${n1}!=${n2}`);
} 

//ESTRUCTURA SWITCH
let num = 5
let rec = num % 0;
switch (rec){
    case 0:
        console.log(`${rec} - ${num} es Par`);
        break;
    case 1:
        console.log(`${num} es Impar`);
        break;
    default:
        if (isNaN(rec))// NaN un valor no valido 
            console.log(`${rec}=Error`);
        break;
}

//console.log('Salir del switch');

// BUCLE WHILE  
// incremento ++
let i=0
console.log("bucle while", colores)
while (i< colores.length && colores//recorrer un arreglo
[i]!="blue"){
    console.log(i, colores[i])
    i=i+1
}

// BUCLE FOR  
// este bulce es mas usado para incremento o decrementos automaticos
console.log("corregido for incremento", colores)
for (let i=0/*solo existe en este bloque*/; 
    i<colores.length;i++/*incremento o decremento*/){
    console.log(i,colores[i]);
}

//in
console.log("recorrido for in",colores);
for(let j in colores){
    console.log(j,colores[j]);
}
//of
console.log("recorrido for of",colores);
for(let color of colores){
   console.log(color);
}
//of 2 prueba
let nombr = "Marcos"
for(let caracter of nombr){
    console.log(caracter);
}
const Personas= [
    {"nombre":"pepe","apellido":"Perez"},
    {"nombre":"ana","apellido":"Gomez"},
    {"nombre":"Daniel","apellido":"Vera"}
]
console.log("of");
for (let persona of Personas){
    console.log(persona.nombre);
}

//recorridos de objetos iterables
console.log("Foreach");
Personas.forEach(persona => {
    if (persona.nombre !="ana") 
        console.log(persona.nombre)
})
//Mapa
const persons = Personas.map(person => person.nombre)
console.log("Map", persons);
//filter
const person = Personas.filter(person => person.nombre != "ana")
console.log("Filter", person);
//Find
const onePerson = Personas.find(person => person.nombre === "ana")
console.log("Find", onePerson);

//Funciones
function sumar(){
 console.log(5+2);
}
const suma =()=>console.log("Arrow fun",5+3);
suma()  
console.log("Funcion multiplicar");
function multiplicar (n1,n2){
    return n1*n2
}
let resp=multiplicar (5,2)
console.log("Sin arrow ",resp);
const multi =(n1,n2) =>  n1*n2
console.log(multi(5,2));

console.log("Funcion dividir");
function dividir(n1,n2=4){
    let resp =0
    try{
        resp=n1/n2
    } catch (e){
        //console.log("Ha ocurrido un error: ",e.message);
    }
    return resp
}
resp=dividir(8)
//console.log(resp);
resp=dividir(8,0)
//console.log(resp);

//const divi = (n1,n2=4)=>{
    //let resp=0
   // try{
    //    resp=n1/n2
   // } catch(e){
        //console.log("Ha ocurrido un error: ",e.message);
   // }
    //return resp
//}
//console.log("funciona"); //mensaje para probar que se esta ejecutando hasta este punto del codigo
//console.log(divi(8));


/*fecth. sirve para consumir api 
(respuesta del servidor que entrega una respuesta con datos
para ser consumidos)*/
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res=> res.json())
    .then(datos=>{
        console.log(datos.results);
        //datos.results.forEach(poke=> console.log(poke.name))
    })
    .catch(error=> console.log("Error del Api: ",error))
const obtenerDatos = async()=> {
    try{
        const res= await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos=await res.json()
        console.log("Async await");
        datos.results.forEach(poke=>console.log(poke.name,poke.url))
    }catch(eror){
        console.log("Error del Api con async",error);
    }
}
obtenerDatos()
//obtener datos 
//DOM
let contenido=document.getElementById('contenedor') //get elemento trae como un objeto
let variable=document.getElementById('variable')
console.log(contenido);
console.log(variable);


// //Editar
variable.innerHTML='Enteros,Decimales,String,Boleanas,Fechas';

// //Modificar el color de las letras
variable.style.color="black"
variable.style.blackground= "#000"
console.log(variable);
let concepto=document.querySelector('.concepto')
//console.log(concepto);
concepto.innerHTML="Area de memoria"
let conceptos =document.querySelectorAll('.concepto')
let cont=1
conceptos.forEach(parrafo=>{
    parrafo.innerHTML= 'Area de memoria#${cont}'
    console.log(parrafo);
    cont=cont + 1 
})
console.log(conceptos);

//Eventos
let boton=document.getElementById('boton2')
let valor=document.getElementById('valor')
boton.addEventListener('mouseover',()=>{
    console.log("Has pasado el mouse");
})
boton.addEventListener('click',()=>{
    let nodo=document.createElement("p")
    nodo.innerHTML="nuevo elemento"
    nodo.style.color="blue"
    contenido.appendChild(nodo)
})

valor.addEventListener('keypress',(e)=>{
    console.log(e.target.value);
})
