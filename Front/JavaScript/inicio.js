function checkContract() {
    var contractCode = document.getElementById('contractCode');
    var contractStatus = document.getElementById('contractStatus');

    // Verificando se os elementos existem
    if (contractCode && contractStatus) {
        var codeValue = contractCode.value;

        // Simulando uma verificação de contrato
        if (codeValue === '12345') {
            contractStatus.innerHTML = 'Contrato encontrado!';
        } else {
            contractStatus.innerHTML = 'Contrato não encontrado.';
        }
    } else {
        console.error('Elementos contractCode ou contractStatus não encontrados.');
    }
}
