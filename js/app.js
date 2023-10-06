import { valida } from "./validaciones.js";

const inputs=document.querySelectorAll("input");
const textareas=document.querySelectorAll("textarea");


//Okey este script recorre el codigo en busqueda del blur osea que el recuadro ya no este selecionado y devuelve el input.taget o el textarea.target y analiza que el target sea valido si pasas sin ningun error no muestra ningun mesaje y si tiene algun error se ejecuta el else de validaciones.js


inputs.forEach((input) => {
    input.addEventListener("blur",(input)=>{
        valida(input.target);
    });
});
textareas.forEach((textarea) => {
    textarea.addEventListener("blur",(textarea)=>{
        valida(textarea.target);
        
    });
});