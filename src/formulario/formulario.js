function processaFormulario(evento){
    evento.preventDefault();
    console.log("enviando o formulário");
    
    const input_nome = document.getElementById('nome');
    const input_sobrenome = document.getElementById('sobrenome');
    const input_datadenascimento = document.getElementById('dt_nascimento');

    let nome = input_nome.value;
    let sobrenome = input_sobrenome.value;
    let datadenascimento  = input_datadenascimento.value;

    console.log(nome,sobrenome,datadenascimento)

    if(nome != '' && sobrenome != '' && datadenascimento !=''){
        
        const usuario = {
            p_nome:nome,
            p_sobrenome:sobrenome,
            p_datadenascimento:datadenascimento
        } 
        
        localStorage.setItem('usuario',JSON.stringify(usuario))
    
    if(nome.length >= 3 && sobrenome.length >=3){
        console.log("O formulario é valido")
    }else{
        console.log("Nome e sobrenome precisam ter no minimo 3 caracteres")
    }
    
    
}else{
        console.log("O formulário é inválido")
    }
}