let iconCart = document.querySelector('.icon.cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listproduct');

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle(showCart)
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML= () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(products => {
            let newproduct = document.createElement('div');
            newproduct.classList.add('item');
            newproduct.innerHTML = `
            <div class="image">
                <img src="images/icons/cart.png" alt="${item.name}">
            </div>
            <div class="Name">${item.name}</div>
            <div class="totalPrice">$${item.price.toFixed(2)}</div>
        `;
        })
    }
}


const initApp =() => {
    //get data from json
    fetch('products.json')
    then(response => Response.json())
    then(data => {
        listProducts =data;
        addDataToHTML();

    })
}
initApp();