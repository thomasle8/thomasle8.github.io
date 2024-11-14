// Function to prompt the user for their name and display it in the output div
function promptForName() 
{
    let name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('output').innerText = `Hello, ${name}!`;
    }
}

// Function to enlarge the image when clicked
function enlargeImage() 
{
    let image = document.getElementById('profileImage'); // function finds image by its ID 'profileImage' to select, and enlarge or shrink it
    if (image.style.width === "300px") {
        image.style.width = "500px"; // Enlarge image
    } else {
        image.style.width = "300px"; // Shrink back
    }
}

// Function to handle mouseover and mouseout events for navigation items
function mouseoverHandler(element) 
{
    element.style.backgroundColor = "white"; // Change background color on hover
}

function mouseoutHandler(element) 
{
    element.style.backgroundColor = ""; // Restore background color when not hovering
}

// Function to enlarge the text size with buttons
function changeFontSize(sizeChange) {
    const content = document.getElementById('content');
    const allElements = content.querySelectorAll('*'); // Selects all child elements within #content
    allElements.forEach((element) => {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        const newSize = parseFloat(currentFontSize) + sizeChange;
        element.style.fontSize = newSize + 'px';
    });
}

// Function to toggle color scheme
function toggleColorScheme() {
    var content = document.getElementById('content');
    if (content.style.backgroundColor === 'yellow' && content.style.color === 'blue') {
        // Set to default colors
        content.style.backgroundColor = '';
        content.style.color = '';
    } else {
        // Set to high-contrast, colorblind-friendly colors
        content.style.backgroundColor = 'yellow';  // Light background
        content.style.color = 'blue';  // Dark text
    }
}

// Function to displayAltText()

function displayAltText() {
    const image1Alt = document.getElementById('image1').alt;
    const image2Alt = document.getElementById('image2').alt;
    const image3Alt = document.getElementById('image3').alt;

    // Display alt-text using alert
    alert("Image Descriptions:\n\n" +
          "1. " + image1Alt + "\n" +
          "2. " + image2Alt + "\n" +
          "3. " + image3Alt);
}
