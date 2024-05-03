document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    let isValid = true;
    // Email validation
    if (!isValidEmail(email)) {
        emailError.textContent = 'Email is not in a valid format. ';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (password.length < 8) {
        passwordError.textContent = 'The password is too short (less than 8 characters).';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        // Here you can submit the form data to the server
    } else {
        successMessage.textContent = '';
    }
});

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
