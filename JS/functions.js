// // 4 formas de impresion
// alert("hola desde el exterior");
// console.log("hola desde La consola");
// document.write("Hola desde la interfaz");
// // Swal.fire("hola desde sweetalert");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });

// VARIABLES
        const pi = 3.14; //decimal
        const pul = 2.54; 
        var name = "Juan Caicedo"; // string
        let edad = 18; // entero
        var ver = true; // boolean
        var fil = false; // boolean


        //OPERADORES BASICOS

        var suma = 3+2;
        console.log(suma)
        var var_uno = 18;
        var var_dos = 5;
        console.log(var_uno - var_dos);
        console.log(var_uno + var_dos);
        console.log(var_uno / var_dos);
        console.log(var_uno * var_dos);

        //operadores de comparacion
        // = asignacion
        // == comparacion (valor)
        // === estrictamente comparado (valor y el tipo de dato)
        // < / > / <= / >=


    console.log("mi edad es " + edad);

    function load_page(){
        Swal.fire({
            imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
            // imageHeight: 1500,
            showConfirmButton: false,
            timer: 2000
          });

          document.getElementById("text").innerText = "el array a calcular es: " + array_num;
          document.getElementById("impresion").value = array_num;
    }
function send_form(){
    let name      = document.getElementById("name").value;
    let last_name = document.getElementById("lastname").value; 
    if(name.length == 0 || last_name.length == 0){
        swal.fire({ 
            title: "cajas de texto vacio",
            text: "algunas de las cajas de texto se encuentran vacias",
            icon: "error"
        });
    if(name.length == 0){
        document.getElementById("name").style.border = "2px solid redelse"
    }else{
        document.getElementById("name").style.border = "2px solid red"
    }
    if(last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
    }else{
        document.getElementById("last_name").style.border = "2px solid red"
    }
}else{
        document.getElementById("print").innerText = "su nombre es: "+name+ " "+ last_name;
    }
}

// ARRAYS
var array_semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var array_gral = [1,2,2,5,"abc","soy Sebastian"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi = [
    {name: "Sebastian",age: 18, color: "green"},
    {name: "wilder",age: 32, color: "yellow"},
    {name: "maria",age: 25, color: "purple"},
    {name: "andres",age: 59, color: "red"},
]

var json_ajn = {
    name: "juan",
    lastname: "Caicedo",
    phone: "3187460940",
    email: "jsroperoc@ufpso.edu.co"
};

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ajn);

function action(){
    // alert(array_num);
    // swal.fire(""+arraw_num);
    // console.log(array_num);
    // console.log(array_num.length);
    result = 0;
    for(let i=0; i<array_num.length; i++){
        result = result+array_num[i]
    }    
    document.getElementById("result").innerHTML = "<strong>El resultado es"+result+"</strong>"
    document.getElementById("result").style.color = "green";

    var total = 0;
    for(var j = 0; j<array_multi.length; j++){
        total = array_multi[j].age + total;
    } 
    alert(total);

    var total_dos = 0;
    var m = 0;
    while(m<array_multi.length){
        total_dos = array_multi[m].age + total_dos
        m++;
    }
    alert(total_dos);
}
var array_numerico = [1,2,3,4,5,6,7,8,9];

function eliminar(){
    let array_delete = array_numerico.pop("num");
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;
}

function agregar(){
    let num = document.getElementById("num").value;
    let array_add = array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;
}

function reves(){
    document.getElementById("impresion").value = array_numerico.reverse();
}

function limpiar(){
    document.getElementById("num").value = "";
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("result").innerText = "";
}

function agregar_prim(){
    let num4 = document.getElementById("num").value;
    let array_add2 = array_numerico.unshift(array_numerico);
    console.log(array_add2);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;

}

function eliminar_prim(){
    let num44 = document.getElementById("num").value;
    let array_add22 = array_numerico.shift(array_numerico);
    console.log(array_add22);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;

}