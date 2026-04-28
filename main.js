async function getData(params) {
    

    try {
        const response = await fetch('https://dummyjson.com/products')       
                  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { products } = await response.json();
        displayData(products);
        console.log(products);
        return products;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
}   
getData();    

async function displayData(products) {
    try {
        
        const productsContainer = document.getElementById('products-container');
        
        
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.title}">
              <div class="card-body">
                <div class="price">$${product.price}</div>
                <div class="title">${product.title}</div>
                <div class="rating">⭐ ${product.rating}</div>
                <div class="brand">${product.brand}</div>
                <div class="stock">${product.stock !== undefined ? product.stock : ''}</div>
              </div>
            `;
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.open(`product.html?id=${product.id}`, '_blank');
            });
            productsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error displaying data:', error);
    }   
}
