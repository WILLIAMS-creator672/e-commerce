let cart = document.getElementById('cart')
cart.addEventListener('mouseenter', () => {
    cart.classList.add('animate');
});

cart.addEventListener('mouseleave', () => {
    cart.classList.remove('animate');
});

window.addEventListener('DOMContentLoaded', () => {
    let savedData = localStorage.getItem(JSON.parse('formData'))

    if (savedData){
        document.getElementById('welcomeMessage').innerHTML = `welcome ${savedData.name} this is you dashboard`
    }
})