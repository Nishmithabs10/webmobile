// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the enquiry form
    const enquiryForm = document.getElementById('enquiry');

    if (enquiryForm) {
        // Add submit event listener to the form
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Perform form validation
            const firstName = document.getElementById('id_first_name').value.trim();
            const lastName = document.getElementById('id_last_name').value.trim();
            const email = document.getElementById('id_email_address').value.trim();
            const mobile = document.getElementById('id_mobile').value.trim();
            const product = document.getElementById('id_product').value.trim();
            const enquiryMessage = document.getElementById('id_enquiry_message').value.trim();

            // Clear any previous errors
            clearErrors();

            let isValid = true;

            // Validate first name
            if (firstName === '') {
                showError('id_first_name', 'First name is required.');
                isValid = false;
            }

            // Validate last name
            if (lastName === '') {
                showError('id_last_name', 'Last name is required.');
                isValid = false;
            }

            // Validate email
            if (email === '' || !validateEmail(email)) {
                showError('id_email_address', 'Valid email is required.');
                isValid = false;
            }

            // Validate mobile
            if (mobile === '' || !validateMobile(mobile)) {
                showError('id_mobile', 'Valid mobile number is required.');
                isValid = false;
            }

            // Validate product selection
            if (product === '') {
                showError('id_product', 'Please select a product.');
                isValid = false;
            }

            // Validate enquiry message
            if (enquiryMessage === '') {
                showError('id_enquiry_message', 'Please enter your enquiry.');
                isValid = false;
            }

            // If the form is valid, send the data to the backend
            if (isValid) {
                // Create a FormData object to store the form data
                const formData = new FormData(enquiryForm);

                // Send the data to the backend using fetch API
                fetch(enquiryForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-CSRFToken': getCSRFToken(), // Include CSRF token if necessary
                    },
                })
                .then(response => {
                    if (response.ok) {
                        return response.json(); // Assuming the backend returns a JSON response
                    } else {
                        throw new Error('There was an error submitting the form.');
                    }
                })
                .then(data => {
                    // Handle the response data
                    console.log('Success:', data);
                    // You can show a success message or redirect to another page
                    alert('Enquiry submitted successfully!');
                    enquiryForm.reset(); // Optionally reset the form
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your enquiry. Please try again.');
                });
            }
        });
    }

    // Function to show error messages
    function showError(elementId, message) {
        const element = document.getElementById(elementId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message text-danger';
        errorElement.innerText = message;
        element.parentElement.appendChild(errorElement);
    }

    // Function to clear previous error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(message) {
            message.remove();
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to validate mobile number format
    function validateMobile(mobile) {
        const mobilePattern = /^\d{10}$/; // Assumes a 10-digit mobile number
        return mobilePattern.test(mobile);
    }

    // Function to get CSRF token from cookies
    function getCSRFToken() {
        const name = 'csrftoken';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1, cookie.length);
            }
        }
        return '';
    }
});
