// Update Cart Total
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach((item) => {
        const priceElement = item.querySelector('.price');
        const quantityElement = item.querySelector('.quantity-control input');
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        const quantity = parseInt(quantityElement.value);

        total += price * quantity;
    });

    document.querySelector('.summary-row.total span').textContent = `$${total.toFixed(2)}`;
}

// Handle Quantity Changes
document.querySelectorAll('.quantity-control input').forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value < 1) input.value = 1; // Prevent negative or zero quantity
        updateCartTotal();
    });
});

// Handle Remove Item
document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', (event) => {
        const cartItem = event.target.closest('.cart-item');
        cartItem.remove();
        updateCartTotal();
    });
});

// Initial Cart Total Calculation
updateCartTotal();