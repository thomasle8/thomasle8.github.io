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
    var fi = localStorage.setItem("firstName", firstName);
    var la = localStorage.setItem("lastName", lastName);
    var em = localStorage.setItem("email", email);
    var ph = localStorage.setItem("phone", phone);
    var me = localStorage.setItem("message", message);
    var inq = localStorage.setItem("inquiryType", inquiryType);
    var co = localStorage.setItem("contactMethod", contactMethod);
    var cou = localStorage.setItem("country", country);
    var ag = localStorage.setItem("age", age);
    var dob2 = localStorage.setItem("dob", dob);






}