let cart = document.getElementById('cart')
cart.addEventListener('mouseenter', () => {
    cart.classList.add('animate');
});

cart.addEventListener('mouseleave', () => {
    cart.classList.remove('animate');
});