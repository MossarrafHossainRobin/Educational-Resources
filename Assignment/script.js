document.addEventListener("DOMContentLoaded", function() { // Ensure DOM is fully loaded

  document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear all previous error messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // --- Field Values ---
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value; // Date of Birth
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value; // Country
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    const termsChecked = document.getElementById("terms").checked;

    // --- Patterns ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Assumes 10-digit phone number

    // --- Validations ---

    // Full Name
    if (fullName.length < 3) {
      document.getElementById("nameError").textContent = "Full Name must be at least 3 characters long.";
      isValid = false;
    }

    // Email
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Password
    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      isValid = false;
    } else if (confirmPassword === "" && password.length >=6 ) {
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
        isValid = false;
    }


    // Gender
    if (!genderSelected) {
      document.getElementById("genderError").textContent = "Please select your gender.";
      isValid = false;
    }

    // Date of Birth (Basic check: not empty)
    if (dob === "") {
      document.getElementById("dobError").textContent = "Please enter your Date of Birth.";
      isValid = false;
    }

    // Phone Number
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    // Country (Basic check: not empty)
    if (country === "") {
      document.getElementById("countryError").textContent = "Please select your country.";
      isValid = false;
    }

    // Terms and Conditions
    if (!termsChecked) {
      document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
      isValid = false;
    }

    // --- Submission ---
    if (isValid) {
      alert("Form submitted successfully!");
      // Here you would typically send the data to a server
      // e.g., using fetch()
      document.getElementById("registrationForm").reset(); // Reset form on successful validation
    }
  });

});