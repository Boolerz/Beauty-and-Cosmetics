// Add JavaScript functionality here, if needed
// For example, handling interactions like adding products to cart
// You can use libraries like jQuery for more complex interactions
// This example is intentionally left blank for simplicity

// Function to add item to cart
let cart = [];
let totalPrice = 0;

// Function to add item to cart with price
function addToCartWithPrice(name, price) {
    const item = { name: name, price: price };
    cart.push(item);
    totalPrice += price;
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    document.getElementById('cart-total').textContent = totalPrice.toFixed(2);
}

// Function to handle checkout
function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase!\nTotal: $${totalPrice.toFixed(2)}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    } else {
        alert('Your cart is empty. Please add items before checking out.');
    }
}

// Attach event listeners to "Add to Cart" buttons for each product
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);
            addToCartWithPrice(productName, productPrice);
        });
    });
});
