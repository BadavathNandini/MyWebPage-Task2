document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Form submitted successfully!');
    form.reset(); // Clear the form
  });
});