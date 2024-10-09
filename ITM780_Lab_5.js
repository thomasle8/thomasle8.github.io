// Part a: Function to prompt the user for their name and display it in the output div
function promptForName() 
{
    let name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('output').innerText = `Hello, ${name}!`;
    }
}

// Part b: Function to enlarge the image when clicked
function enlargeImage() 
{
    let image = document.getElementById('profileImage');
    if (image.style.width === "300px") {
        image.style.width = "500px"; // Enlarge image
    } else {
        image.style.width = "300px"; // Shrink back
    }
}

// Part d: Function to handle mouseover and mouseout events for navigation items
function mouseoverHandler(element) 
{
    element.style.backgroundColor = "white"; // Change background color on hover
}

function mouseoutHandler(element) 
{
    element.style.backgroundColor = ""; // Restore default background color
}
