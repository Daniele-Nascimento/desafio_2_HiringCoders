const form = document.getElementById('enviar')
    if(bt_enviar){
        bt_enviar.addEventListener("click", (e) => {
            e.preventDefault();
            let nome = document.getElementById("nome").value;
            let telefone = document.getElementById("telefone").value;
            let email = document.getElementById("email").value;
            let cep = document.getElementById("cep").value;
            let endereco = document.getElementById("endereco").value;
            let numero = document.getElementById("numero").value;
            let complemento = document.getElementById("complemento").value;
            let bairro = document.getElementById("bairro").value;
            let cidade = document.getElementById("cidade").value;
            let estado = document.getElementById("estado").value;

            let dataCliente = {
                nome,
                telefone,
                email,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
            }

            let converData = JSON.stringify(dataCliente);
            localStorage.setItem("cadastroCliente", converData);
            alert("Cadastro concluído");
        
    });

}
const form = document.getElementById('cadastrar')
      if(bt_cadastrar){
        bt_cadastrar.addEventListener("click", (e) => {
            e.preventDefault();
            let codigo = document.getElementById("codigo").value;
            let fornecedor = document.getElementById("fornecedor").value;
            let valor = document.getElementById("valor").value;

            let dataProd = {
                codigo,
                fornecedor,
                valor,
            }

            let converdataProd= JSON.stringify(dataProd);
            localStorage.setItem("cadastroProduto", converDataProd);
            alert("Cadastro concluído");
    });
}