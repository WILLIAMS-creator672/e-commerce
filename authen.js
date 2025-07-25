let signupForm = document.getElementById('signupForm')
let signinForm = document.getElementById('signinForm')
let signinNavigateLink = signupForm.querySelector('a')
let signupNavigateLink = signinForm.querySelector('a')

signinForm.style.top = '-500px'

signinNavigateLink.onclick = function (event) {
    event.preventDefault()

    signinForm.style.top = '50%'
    signupForm.style.left = '2000px'
}

signupNavigateLink.onclick = function (event) {
    event.preventDefault()

    signupForm.style.left = '50%'
    signinForm.style.top = '-500px'
}


// CREATE ACCOUNT

let firstNameInput = document.getElementById('firstName')
let lastNameInput = document.getElementById('lastName')
let emailInput = document.getElementById('email')
let telInput = document.getElementById('tel')
let passwordInput = document.getElementById('password')
let confirmPasswordInput = document.getElementById('confirmPassworddd')
let registerButton = document.getElementById('registerButton')


// TOGGLE PASSWORD

let passwordToggle = document.getElementById('passwordToggle')
let seePassword = passwordToggle.querySelector('i')

let confirmPasswordToggle = document.getElementById('confirmPasswordToggle')
let seeConfirmPassword = confirmPasswordToggle.querySelector('i')

passwordToggle.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password'
        passwordInput.type = isPassword ? 'text' : 'password'

        seePassword.classList.toggle('fa-eye');
        seePassword.classList.toggle('fa-eye-slash');
})

confirmPasswordToggle.addEventListener('click', () => {
    const isPassword = confirmPasswordInput.type === 'password'
    confirmPasswordInput.type = isPassword ? 'text' : 'password'

    seeConfirmPassword.classList.toggle('fa-eye');
    seeConfirmPassword.classList.toggle('fa-eye-slash');
})




signupForm.addEventListener('input', function () {
    let valid = true;

    if (!firstNameInput.value.trim()) valid = false;
    if (!lastNameInput.value.trim()) valid = false;
    if (!emailInput.value.includes('@')) valid = false;
    if (!telInput.value.match(/^\d+$/)) valid = false
    if (!passwordInput.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/)) valid = false;
    if (confirmPasswordInput.value !== passwordInput.value) valid = false;


    if (valid){
        // registerButton.classList.replace('disabled', 'active')
    } else{
        // registerButton.classList.add('disabled')

    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault()

    registerButton.innerHTML = '....'

    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let fullName = firstName + ' ' + lastName
    let email = emailInput.value
    let phoneNumber = telInput.value
    let password = passwordInput.value


    localStorage.setItem('saveFullName', fullName)
    localStorage.setItem('saveEmail', email)
    localStorage.setItem('savePhoneNumber', phoneNumber)
    localStorage.setItem('savePassword', password)

})

