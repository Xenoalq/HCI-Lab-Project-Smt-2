document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.textContent = "";
    });

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    if (!firstName) {
        document.getElementById('firstNameError').textContent = "First name field is empty!";
        isValid = false;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = "Last name field is empty!";
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = "Email field is empty!";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById('emailError').textContent = "Email is not valid!";
        isValid = false;
    }

    if (!phoneNumber) {
        document.getElementById('phoneNumberError').textContent = "Phone number field is empty!";
        isValid = false;
    }

    if (!message) {
        document.getElementById('messageError').textContent = "Message field is empty!";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById('contactForm').reset();
        window.location.href = "home.html";
    }

    return false;
});
