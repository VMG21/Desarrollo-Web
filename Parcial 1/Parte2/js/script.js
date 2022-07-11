      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */


      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */



      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */


       


let btn1 = document.getElementById("btn_mayusculas").addEventListener("click", minusculas)

function minusculas(e){
  e.preventDefault()
  let nombres = document.getElementById("txt_may").value
  let minNombres = nombres.toLowerCase()
  document.getElementById("txt_may").value = minNombres
}

let btn2 = document.getElementById("btn_añoshumano").addEventListener("click", perros)

function perros(i){
  i.preventDefault()
  let perro = parseInt(document.getElementById("edad_humano").value) * 7
  document.getElementById("edad_perro").value = perro
}

function pokemon(nombre, especie, ataque, defensa){
  this.nombre = nombre
  this.especie = especie
  this.ataque = ataque
  this.defensa = defensa
}

let incineroar = new pokemon("Incineroar", "Fuego/Siniestro", 12, 50)
let rhydon = new pokemon("Rydhon", "Tierra/Roca", 15, 60)

let btn3 = document.getElementById("btn_muestra").addEventListener("click", pokemones)

function pokemones(a){
  a.preventDefault()
  document.getElementById("nombre_poke1").value = incineroar.nombre
  document.getElementById("especie_poke1").value = incineroar.especie
  document.getElementById("ataque_poke1").value = incineroar.ataque
  document.getElementById("defensa_poke1").value = incineroar.defensa

  document.getElementById("nombre_poke2").value = rhydon.nombre
  document.getElementById("especie_poke2").value = rhydon.especie
  document.getElementById("ataque_poke2").value = rhydon.ataque
  document.getElementById("defensa_poke2").value = rhydon.defensa
}
