const url_serer = "http://localhost:9999";

function cadastrar() {
    console.log('Enviando dados ao servidor...');


    const dados = {
        nome: document.querySelector('[name="nome-pessoa"]').value,
        cpf: document.querySelector('[name="cpf"]').value,
        data_nascimento: document.querySelector('[name="data-de-nascimento"]').value,
        telefone: document.querySelector('[name="telefone"]').value,
        endereco: document.querySelector('[name="endereco"]').value,
        altura: document.querySelector('[name="altura"]').value,
        peso: document.querySelector('[name="peso"]').value
    }
    console.log(dados);


    fetch(`${url_server}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })

        .then(response => response.json())

        .then(dados => {
            console.log('Resposta do servidor:', dados);

        })

        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);

        });

        function listarPessoas() {
            fetch(`${url_server}/pessoas`)
                .then(response => response.json())
                .then(data => {
                    data.forEach(pessoa => {
                        console.log(pessoa);
                    })
                });
        }
}