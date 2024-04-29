// Function to load products from JSON file
function loadProducts() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.querySelector('.products');
            data.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <button class="add-to-cart-btn" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                `;
                productsContainer.appendChild(productElement);
            });

            // Attach event listeners to "Add to Cart" buttons for each product
            const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productName = button.dataset.name;
                    const productPrice = parseFloat(button.dataset.price);
                    addToCart(productName, productPrice);
                });
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// Function to add item to cart
function addToCart(name, price) {
    const cartItem = { name: name, price: price };
    cart.push(cartItem);
    updateCartTab();
}

// Function to update cart tab
function updateCartTab() {
    const cartItemsContainer = document.querySelector('.listCart');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('items');
        itemElement.innerHTML = `
            <div class="image">
                <img src="images/icons/cart.png" alt="${item.name}">
            </div>
            <div class="Name">${item.name}</div>
            <div class="totalPrice">$${item.price.toFixed(2)}</div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    document.querySelector('#cart-total').textContent = total.toFixed(2);
}

// Function to toggle cart tab visibility
function toggleCartTab() {
    const cartTab = document.querySelector('.carttab');
    cartTab.classList.toggle('showCart');
}

// Close button functionality
const closeButton = document.querySelector('.btn .Close');
closeButton.addEventListener('click', toggleCartTab);

// Load products when DOM content is loaded
document.addEventListener('DOMContentLoaded', loadProducts);
