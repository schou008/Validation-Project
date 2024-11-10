// Adding an event listener to the form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission for testing purposes

  let isValid = true; // Initialize form validation state as true

  // Clear previous error messages by hiding all elements with the class 'error-message'
  document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');

  // Validate Username
  const username = document.getElementById('username').value;
  // Regex checks if username is 3-15 characters long and only contains letters, numbers, or underscores
  if (!username.match(/^[a-zA-Z0-9_]{3,15}$/)) {
      document.getElementById('usernameError').textContent = 'Username must be 3-15 characters long and contain only letters, numbers, or underscores.';
      document.getElementById('usernameError').style.display = 'block';
      isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value;
  // Regex checks if email format is valid
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // Validate Password
  const password = document.getElementById('password').value;
  // Regex requires a minimum of 8 characters with at least one letter and one number
  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain letters and numbers.';
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
  }

  // Confirm Password
  const confirmPassword = document.getElementById('confirmPassword').value;
  // Check if password and confirm password inputs match
  if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      document.getElementById('confirmPasswordError').style.display = 'block';
      isValid = false;
  }

  // Validate Phone
  const phone = document.getElementById('phone').value;
  // Regex checks if phone number is exactly 10 digits
  if (!phone.match(/^\d{10}$/)) {
      document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
  }

  // Validate Age
  const age = parseInt(document.getElementById('age').value, 10);
  // Check if age is a number between 18 and 100
  if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById('ageError').textContent = 'Please enter a valid age (18-100).';
      document.getElementById('ageError').style.display = 'block';
      isValid = false;
  }

  // Validate Country of Residence
  const country = document.getElementById('country').value;
  // Check if a country is selected
  if (country === "") {
      document.getElementById('countryError').textContent = 'Please select your country of residence.';
      document.getElementById('countryError').style.display = 'block';
      isValid = false;
  }

  // Validate Terms and Conditions
  const termsChecked = document.getElementById('terms').checked;
  // Check if the terms and conditions checkbox is checked
  if (!termsChecked) {
      document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
      document.getElementById('termsError').style.display = 'block';
      isValid = false;
  }

  // If the form passes all validations, display a success message
  if (isValid) {
      alert('Form submitted successfully!');
      // At this point, form data can be sent to the server using an HTTP request
  }
});
