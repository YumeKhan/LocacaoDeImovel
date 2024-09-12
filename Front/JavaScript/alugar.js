// Script para manipular o formulário e exibir propriedades cadastradas (opcional)
document.getElementById('property-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter dados do formulário
    const name = document.getElementById('property-name').value;
    const description = document.getElementById('property-description').value;
    const image = document.getElementById('property-image').files[0];
    const type = document.getElementById('property-type').value;

    // Adicionar a propriedade à lista (exemplo simplificado)
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

    // Limpar o formulário
    this.reset();
});