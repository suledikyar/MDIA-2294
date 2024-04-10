$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); 

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        // Validate that the message is longer than 20 characters.
        if(message.length < 20) {
            $('#formResponse').addClass('error').html('<p>Your message must be at least 20 characters long.</p>');
            return false; // Stop the form submission.
        }

        // Validate email format.
        if(!emailRegex.test(email)) {
            $('#formResponse').addClass('error').html('<p>Please enter a valid email address.</p>');
            return false; // Stop the form submission.
        }

        // Proceed to AJAX form submission if all validations pass.
        $.ajax({
            type: 'POST',
            url: 'path/to/your/server/endpoint', 
            data: $(this).serialize(),
            success: function(response) {
                // Handle success.
                $('#formResponse').removeClass('error').addClass('success').html('<p>Message sent successfully!</p>');
                $('#contactForm').trigger("reset"); 
            },
            error: function() {
                // Handle error.
                $('#formResponse').removeClass('success').addClass('error').html('<p>An error occurred. Please try again.</p>');
            }
        });
    });
});

// This code is to improve the functionality of a contact form on a website. By asynchronously handling form validation and submission with AJAX, the user receives immediate feedback without having to reload the page.

// $(document).ready(function() {...}); Waits until the webpage is fully loaded to ensure all elements are accessible.

// $('#contactForm').submit(function(e) {...}); Adds an event handler to the form with the ID contactForm. When the form is submitted, this handler is triggered. By using e.preventDefault(); inside this function, we avoid reloading the page when the form is submitted. 

// In the form, variables are declared by fetching the values from the field names, e-mail addresses, and messages. To do this, use $('#fieldID').val();

// Email and message length checks the message for a minimum length and the email against a standard format using a regex pattern. If validation fails, displays an error message.

// $.ajax({...});. Without reloading the page, the form data is sent to the specified server script (URL). The type: 'POST' indicates a POST request. The data: $(this).serialize(), line serializes the submitted form data.

// AJAX requests have two callbacks: success and error. The form is reset when the request is successful. An error message appears if there is an error. 


