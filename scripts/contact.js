// Function to handle form submission
function submitForm() {
    // Collect data from the form
    const formData = {
        name: document.getElementById('name').value,
        comments: document.getElementById('comments').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        subscribe: document.getElementById('subscribe').checked,
        country: document.getElementById('country').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value
    };

    // Save data to local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert("Your contact information has been saved!");
}

// Optional: Clear data from local storage if needed
function clearLocalStorage() {
    localStorage.removeItem('contactFormData');
    alert("Local storage data cleared!");
}
