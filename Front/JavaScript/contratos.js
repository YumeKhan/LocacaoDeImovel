// Adicionando jsPDF via script
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
document.head.appendChild(script);

// Exemplo de contratos
let contratos = [
    { id: 1, nome: 'Contrato 1', descricao: 'Descrição do contrato 1' },
    { id: 2, nome: 'Contrato 2', descricao: 'Descrição do contrato 2' },
    { id: 3, nome: 'Contrato 3', descricao: 'Descrição do contrato 3' }
];

// Função para carregar os contratos
function loadContracts() {
    const contractsContainer = document.querySelector('.contracts-container');
    contractsContainer.innerHTML = ''; // Limpa o conteúdo ao recarregar os contratos

    contratos.forEach(contract => {
        const contractItem = document.createElement('div');
        contractItem.classList.add('contract-item');

        const contractHTML = `
            <h3>${contract.nome}</h3>
            <p>${contract.descricao}</p>
            <button class="edit-btn">Editar</button>
            <button class="download-btn">Baixar PDF</button>
        `;

        contractItem.innerHTML = contractHTML;
        contractsContainer.appendChild(contractItem);

        // Adicionando evento para o botão Editar
        const editButton = contractItem.querySelector('.edit-btn');
        editButton.addEventListener('click', function() {
            openEditModal(contract.id);
        });

        // Adicionando evento para o botão Baixar PDF
        const downloadButton = contractItem.querySelector('.download-btn');
        downloadButton.addEventListener('click', function() {
            downloadPDF(contract.id);
        });
    });
}

// Função para abrir o modal de edição
function openEditModal(id) {
    const contract = contratos.find(c => c.id === id);
    if (contract) {
        document.getElementById('contractName').value = contract.nome;
        document.getElementById('contractDesc').value = contract.descricao;

        // Mostrando o modal
        document.getElementById('editModal').style.display = 'block';

        // Configurando o evento de submissão do formulário
        document.getElementById('editContractForm').onsubmit = function(event) {
            event.preventDefault();
            saveContract(id);
        };
    } else {
        console.error(`Contrato com ID ${id} não encontrado.`);
    }
}

// Função para salvar o contrato editado
function saveContract(id) {
    // Pegando os valores do formulário
    const nome = document.getElementById('contractName').value;
    const descricao = document.getElementById('contractDesc').value;

    // Atualizando o contrato no array
    const contractIndex = contratos.findIndex(c => c.id === id);
    if (contractIndex !== -1) {
        contratos[contractIndex].nome = nome;
        contratos[contractIndex].descricao = descricao;

        // Recarregando os contratos na tela
        loadContracts();

        // Fechando o modal
        closeEditModal();
    } else {
        console.error(`Contrato com ID ${id} não encontrado para salvar.`);
    }
}

// Função para fechar o modal de edição
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Função para baixar o contrato em PDF
function downloadPDF(id) {
    const contract = contratos.find(c => c.id === id);
    if (contract) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Definindo o conteúdo do PDF
        doc.setFontSize(16);
        doc.text(`Contrato: ${contract.nome}`, 10, 10);
        doc.setFontSize(12);
        doc.text(`Descrição: ${contract.descricao}`, 10, 20);

        // Baixando o PDF
        doc.save(`Contrato_${contract.nome}.pdf`);
    } else {
        console.error(`Contrato com ID ${id} não encontrado.`);
    }
}

// Criando o container de contratos dinamicamente
const contractsContainer = document.createElement('div');
contractsContainer.classList.add('contracts-container');
document.body.appendChild(contractsContainer);
