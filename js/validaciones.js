export function valida(input){
    const tipoDeInput=input.dataset.tipo;
    const button = document.querySelector('#btn_submit');


    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";
        button.disabled = false
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeDeError(tipoDeInput,input);
        button.disabled = true

        

    }
}
const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];
const mensajesDeError={
    
nombre:{
    valueMissing:"Este campo no puede estar vacio",
},
email:{
    valueMissing:"Este campo correo no puede estar vacio",
    typeMismatch:"El correo no es valido",//Si no cumple con los requisitos del typeMismatch
},
asunto:{
    valueMissing:"Este campo asunto no puede estar vacio",
},
mensaje:{
    valueMissing:"Este campo mensaje no puede estar vacio",
}
}
function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje="";
    tipoDeErrores.forEach((error) =>{//Recorre la lista tipoDeErrores devolviendo el valor de en la variable(error)
        if(input.validity[error]){//comprueba que la validacion del input sea igual al error endado caso de que si se convierte en un true y se ejecuta 
            mensaje=mensajesDeError[tipoDeInput][error];//mensajesDeError[nombre][valueMissing] El tipoDeInput lo arrastramos desde el data-tipo del html
            console.log(mensaje)
        }

    });
    return mensaje;
}