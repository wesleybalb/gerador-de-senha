function geraSenha(){
    let charMin = parseFloat(document.getElementById("charmin").value)
    let novoTexto = ``
    let aleatorio = Math.floor(Math.random() * (122 - 33 + 1)) + 33

    if(charMin < 8){
        alert("Mínimo de 8 caracteres")
    }else{
    
        for(let i = 0; i < charMin; i++){
            let aleatorio = Math.floor(Math.random() * (122 - 33 + 1)) + 33

            novoTexto += String.fromCharCode(aleatorio)
        
        }

   }
    document.getElementById("senha").value = novoTexto

}

function copiar(){
    const valor = document.getElementById("senha").value
    if(valor){ 
        navigator.clipboard.writeText(valor)
        mostrarMensagem("Senha Copiada")
    }else{
        mostrarMensagem("Nenhuma senha foi gerada") 
    } 
} function mostrarMensagem(texto){
    const alerta = document.getElementById("alerta")
    alerta.innerHTML = texto

    setTimeout(()=>{
        alerta.classList.add("fade-out");
        setTimeout(()=> {
            alerta.classList.remove("fade-out");
            document.getElementById("senha").value = "";
            document.getElementById("charmin").value = "";
            document.getElementById("alerta").innerHTML = ""
        }, 500);
    },3000);
    
}

