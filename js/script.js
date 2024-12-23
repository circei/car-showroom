document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting immediately

    // Simple validation (for demonstration)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name && email) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});
