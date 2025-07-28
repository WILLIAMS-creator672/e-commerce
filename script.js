document.addEventListener('DOMContentLoaded', () => {
    let savedData = localStorage.getItem('formData');
    if (savedData) {
        let userData = JSON.parse(savedData);
        document.getElementById('welcomeMessage').innerHTML = `Hello ${userData.fullName}, this is your dashboard`;
    }
});