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
        = asignacion
        == comparacion (valor)
        === estrictamente comparado (valor y el tipo de dato)
        // < / > / <= / >=


    console.log("mi edad es " + edad);

    function load_page(){
        Swal.fire({
            imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
            // imageHeight: 1500,
            showConfirmButton: false,
            timer: 2000
          });
    }
function send_form(){
    let name      = document.getElementById("name").value;
    let last_name = document.getElementById("lastname").value; 
    if(name.length == 0 || last_name.length == 0){

    }
    if(name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
    }else{
        document.getElementById("name").style.border = "2px solid red"
    }
    if(last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
    }else{
        document.getElementById("last_name").style.border = "2px solid red"
    }else{
        document.getElementById("print").inn
    }
} 
