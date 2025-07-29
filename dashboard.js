window.addEventListener('DOMContentLoaded', () => {
    let userName = document.getElementById('userName')
    let savedData = localStorage.getItem('formData')

    if (savedData) {
        let parsedData = JSON.parse(savedData)
        // let firstName = parsedData.firstName
        // let capitalizeFirstLetter = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()

        userName.innerHTML = `<i class="fa-regular fa-user text-amber-500"></i>${parsedData.firstName}`
    }
})

let cart = document.getElementById('cart')
cart.addEventListener('mouseenter', () => {
    cart.classList.add('animate');
});

cart.addEventListener('mouseleave', () => {
    cart.classList.remove('animate');
});


let navDropDownButton = document.getElementById('navDropDownButton')
let navDropDownIcon = navDropDownButton.querySelector('i')
let navDropDown = document.getElementById('navDropDown')

navDropDownButton.addEventListener('click', () => {
    navDropDown.classList.toggle('scale-0')
    navDropDownIcon.classList.toggle('-rotate-180')
})

let userIcon = document.getElementById('userIcon')
let userContainer = document.getElementById('userContainer')

userIcon.addEventListener('click', (event) => {
    event.preventDefault()
    userContainer.classList.toggle('top-5')
})