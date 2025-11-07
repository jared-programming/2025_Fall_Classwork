if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready() {
    const removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let button of removeCartItemButtons) {
        button.addEventListener('click', removeCartItem);
    }
    
    const quantityInputs = document.getElementsByClassName          ('cart-quantity-input');
    for (let input of quantityInputs) {
        input.addEventListener('click', quantityChanged);
    }

    const addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let button of addToCartButtons) {
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    const cartItems = document.getElementsByClassName('cart-items')[0];
    if (cartItems.children.length === 0) {
        alert('Your cart is empty');
        return;
    }
    alert('Thank you for your purchase');
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    const button = event.target;
    const shopItem = button.parentElement.parentElement;
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already added to the cart');
            return;
        }
    }

    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    const cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100"></img>
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let cartRow of cartRows) {
        const priceElement = cartRow.getElementsByClassName('cart-price')[0];
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value;
        total += price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}