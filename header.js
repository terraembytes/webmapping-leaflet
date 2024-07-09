document.addEventListener('DOMContentLoaded', function() {
    fetch('Cabecalho/cabecalho.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível carregar o cabeçalho HTML.');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o cabeçalho:', error);
        });
});
