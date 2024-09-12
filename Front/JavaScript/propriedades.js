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