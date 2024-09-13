// Função para salvar os dados do formulário de cadastro de propriedades
document.getElementById('property-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const propertyName = document.getElementById('property-name').value;
    const propertyDescription = document.getElementById('property-description').value;
    const propertyImage = document.getElementById('property-image').files[0];
    const propertyType = document.getElementById('property-type').value;

    // Verifica se o usuário selecionou um arquivo de imagem
    if (propertyImage) {
        const reader = new FileReader();
        reader.onloadend = function () {
            const imageBase64 = reader.result;

            // Salva os dados no localStorage
            localStorage.setItem('property-name', propertyName);
            localStorage.setItem('property-description', propertyDescription);
            localStorage.setItem('property-image', imageBase64);
            localStorage.setItem('property-type', propertyType);

            alert('Propriedade cadastrada com sucesso!');
        }
        reader.readAsDataURL(propertyImage);
    }
});

// Função para salvar os dados do formulário de contrato
document.getElementById('contract-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const contractName = document.getElementById('contract-name').value;
    const contractDescription = document.getElementById('contract-description').value;
    const contractPDF = document.getElementById('contract-pdf').files[0];
    const contractType = document.getElementById('contract-type').value;

    if (contractPDF) {
        const reader = new FileReader();
        reader.onloadend = function () {
            const pdfBase64 = reader.result;

            // Salva os dados no localStorage
            localStorage.setItem('contract-name', contractName);
            localStorage.setItem('contract-description', contractDescription);
            localStorage.setItem('contract-pdf', pdfBase64);
            localStorage.setItem('contract-type', contractType);

            alert('Contrato cadastrado com sucesso!');
        }
        reader.readAsDataURL(contractPDF);
    }
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});

document.getElementById('property-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('property-name').value;
    const description = document.getElementById('property-description').value;
    const image = document.getElementById('property-image').files[0];
    const type = document.getElementById('property-type').value;

    const container = document.querySelector('.contracts-container');
    const item = document.createElement('div');
    item.className = 'contract-item';

    const img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '10px';

    const title = document.createElement('h3');
    title.textContent = name;

    const text = document.createElement('p');
    text.textContent = description;

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Ver Detalhes';

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(text);
    item.appendChild(link);

    container.appendChild(item);

    this.reset();
});

document.getElementById('contract-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('contract-name').value;
    const description = document.getElementById('contract-description').value;
    const image = document.getElementById('contract-image').files[0];
    const type = document.getElementById('contract-type').value;

    const container = document.querySelector('.contracts-container');
    const item = document.createElement('div');
    item.className = 'contract-item';

    const img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '10px';

    const title = document.createElement('h3');
    title.textContent = name;

    const text = document.createElement('p');
    text.textContent = description;

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Ver Detalhes';

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(text);
    item.appendChild(link);

    container.appendChild(item);

    this.reset();
});