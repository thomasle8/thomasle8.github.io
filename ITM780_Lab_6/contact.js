// Function to capture form data and save it to local storage
function submitForm() {
    // Capture form input values
    const firstName = document.getElementById('f-name').value;
    const lastName = document.getElementById('l-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const inquiryType = Array.from(document.querySelectorAll('input[name="inquiry_type"]:checked')).map(cb => cb.value);
    const contactMethod = document.querySelector('input[name="contact_method"]:checked')?.value;
    const country = document.getElementById('country').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;

    // Create an object to store the data
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        contactMethod: contactMethod,
        inquiryType: inquiryType,
        country: country,
        age: age,
        dob: dob
    };

    // Store the object in local storage as a JSON string
    localStorage.setItem('formData', JSON.stringify(formData));

    // Confirm to the user that data has been saved
    alert("Your form data has been saved!");
}

// Clear both form fields and local storage data when the reset button is clicked
function clearFormData() {
    document.getElementById('contactForm').reset();
    localStorage.removeItem('contactFormData');
    alert("Form data has been cleared!");
}


