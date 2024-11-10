document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission for testing

  let isValid = true;

  // Clear previous error messages and reset input styles
  document.querySelectorAll('.error-message').forEach(msg => {
    msg.style.display = 'none';
    msg.style.opacity = '0';
  });
  document.querySelectorAll('input').forEach(input => {
    input.style.borderColor = '#ddd';
    input.style.boxShadow = 'none';
  });

  // Validate Username
  const username = document.getElementById('username').value;
  if (!username.match(/^[a-zA-Z0-9_]{3,15}$/)) {
    showError('usernameError', 'Username must be 3-15 characters long and contain only letters, numbers, or underscores.');
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value;
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById('password').value;
  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    showError('passwordError', 'Password must be at least 8 characters long and contain letters and numbers.');
    isValid = false;
  }

  // Confirm Password
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    showError('confirmPasswordError', 'Passwords do not match.');
    isValid = false;
  }

  // Validate Phone
  const phone = document.getElementById('phone').value;
  if (!phone.match(/^\d{10}$/)) {
    showError('phoneError', 'Phone number must be exactly 10 digits.');
    isValid = false;
  }

  // Validate Age
  const age = parseInt(document.getElementById('age').value, 10);
  if (isNaN(age) || age < 18 || age > 100) {
    showError('ageError', 'Please enter a valid age (18-120).');
    isValid = false;
  }

  // If the form is valid, display a success message
  if (isValid) {
    alert('Form submitted successfully!');
  }

  // Helper function to show error messages and add styles
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    errorElement.style.opacity = '1';
    errorElement.style.transition = 'opacity 0.3s ease-in-out';

    const inputElement = document.getElementById(elementId.replace('Error', ''));
    inputElement.style.borderColor = '#ff4d4d';
    inputElement.style.boxShadow = '0 0 5px rgba(255, 77, 77, 0.3)';
  }
});
