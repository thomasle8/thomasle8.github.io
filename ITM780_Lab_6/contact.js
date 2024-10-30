// Function to capture form data and save it to local storage
function submit() {
    // Capture form input values
    var firstName = document.getElementById('f-name').value;
    var lastName = document.getElementById('l-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var inquiryType = Array.from(document.querySelectorAll('input[name="inquiry_type"]:checked')).map(cb => cb.value);
    var contactMethod = document.querySelector('input[name="contact_method"]:checked')?.value;
    var country = document.getElementById('country').value;
    var age = document.getElementById('age').value;
    var dob = document.getElementById('dob').value;

    // Store form input values to local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("message", message);
    localStorage.setItem("inquiryType", JSON.stringify(inquiryType)); // Store as JSON string
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("country", country);
    localStorage.setItem("age", age);
    localStorage.setItem("dob", dob);

    // Confirmation message
    alert("Your data has been saved to local storage!");
}
