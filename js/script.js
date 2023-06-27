const camposDoFormulario = document.querySelectorAll("[required");

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificaCampo());
})

function verificaCampo(){
    
}