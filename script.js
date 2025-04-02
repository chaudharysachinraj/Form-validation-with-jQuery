$(document).ready(function() {
    $("#registrationForm").submit(function(e) {
        e.preventDefault(); // Prevent default form submission

        let isValid = true;
        const username = $("#username").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        // Reset errors
        $(".error").text("");

        // Username Validation
        if (username === "") {
            $("#usernameError").text("Username is required.");
            isValid = false;
        } else if (username.length < 3) {
            $("#usernameError").text("Username must be at least 3 characters.");
            isValid = false;
        }

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
            $("#emailError").text("Email is required.");
            isValid = false;
        } else if (!email.match(emailPattern)) {
            $("#emailError").text("Enter a valid email address.");
            isValid = false;
        }

        // Password Validation
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (password === "") {
            $("#passwordError").text("Password is required.");
            isValid = false;
        } else if (!password.match(passwordPattern)) {
            $("#passwordError").text("Password must be at least 8 characters long and contain at least one letter and one number.");
            isValid = false;
        }

        // Confirm Password Validation
        if (confirmPassword !== password) {
            $("#confirmPasswordError").text("Passwords do not match.");
            isValid = false;
        }

        // If the form is valid, show success message
        if (isValid) {
            $("#successMessage").text("Form is valid and ready for submission!");
            // Optionally, make an AJAX call here
        }
    });
})