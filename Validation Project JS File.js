document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for testing
  
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
  
    // Validate Username
    const username = document.getElementById('username').value;
    if (!username.match(/^[a-zA-Z0-9_]{3,15}$/)) {
      document.getElementById('usernameError').textContent = 'Username must be 3-15 characters long and contain only letters, numbers, or underscores.';
      document.getElementById('usernameError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Password
    const password = document.getElementById('password').value;
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain letters and numbers.';
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
    }
  
    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      document.getElementById('confirmPasswordError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Phone
    const phone = document.getElementById('phone').value;
    if (!phone.match(/^\d{10}$/)) {
      document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Age
    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById('ageError').textContent = 'Please enter a valid age (18-120).';
      document.getElementById('ageError').style.display = 'block';
      isValid = false;
    }

    // Validate Country of Residence
    const country = document.getElementById('country').value;
    if (country === "") {
      document.getElementById('countryError').textContent = 'Please select your country of residence.';
      document.getElementById('countryError').style.display = 'block';
      isValid = false;
    }

    // Validate Terms and Conditions
    const termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
      document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
      document.getElementById('termsError').style.display = 'block';
      isValid = false;
    }
  
    // If the form is valid, display a success message
    if (isValid) {
      alert('Form submitted successfully!');
      // Here you would typically submit the form data to the server
    }
  });
  