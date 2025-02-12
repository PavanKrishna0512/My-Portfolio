<script>
// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('#contactForm');
    const successMessage = document.querySelector('#successMessage');
    const errorMessage = document.querySelector('#errorMessage');

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the page from refreshing

        // Get form data
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Basic form validation
        if (name === '' || email === '' || message === '') {
            errorMessage.textContent = "All fields are required!";
            errorMessage.classList.remove('hidden');
            successMessage.classList.add('hidden');
            return;
        }

        // Simulate form submission
        setTimeout(function() {
            // Clear form fields
            contactForm.reset();

            // Display success message
            successMessage.textContent = "Thank you for reaching out! I will get back to you soon.";
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        }, 1000);
    });
});
</script>
