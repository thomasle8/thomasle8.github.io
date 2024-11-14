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
    content = document.getElementById('content');
    allElements = content.querySelectorAll('*'); // Selects all child elements within #content
    allElements.forEach((element) => {
        currentFontSize = window.getComputedStyle(element).fontSize;
        newSize = parseFloat(currentFontSize) + sizeChange;
        element.style.fontSize = newSize + 'px';
    });
}

// Function to toggle color scheme
function toggleColorScheme() {
    content = document.getElementById('content');
    allTextElements = content.querySelectorAll('*'); // Select all child elements within #content
    
    // Check the current color scheme
    if (content.style.backgroundColor === 'yellow' && content.style.color === 'blue') 
        {
        // Set to default colors
        content.style.backgroundColor = '';
        content.style.color = '';
        
        // Reset child elements to inherit default color
        allTextElements.forEach((element) => {
            element.style.color = '';
        });
    } 
    else 
    {
        // Set to high-contrast, colorblind colors
        content.style.backgroundColor = 'yellow';  // Light background
        content.style.color = 'blue';  // Dark text
        
        // Apply high-contrast color to all child elements within .content 
        allTextElements.forEach((element) => {
            element.style.color = 'blue';
        });
    }
}

// Function to displayAltText()
function displayAltText() {
    image1_Alt = document.getElementById('image1').alt;
    image2_Alt = document.getElementById('image2').alt;
    image3_Alt = document.getElementById('image3').alt;

    // Show alt-text using alert feature
    alert(" Alternate Descriptions:\n\n" +
          "1. " + image1_Alt + "\n" +
          "2. " + image2_Alt + "\n" +
          "3. " + image3_Alt);
}
