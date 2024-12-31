// script.js

// Array of indoor and outdoor ideas to replace scrolling in social media
const indoorIdeas = [
    "Read a book",
    "Learn a new recipe",
    "Do a puzzle",
    "Watch a documentary",
    "Try painting or drawing",
    // Add more indoor ideas
];

const outdoorIdeas = [
    "Go for a walk",
    "Visit a local park",
    "Play a sport",
    "Go for a bike ride",
    "Do some gardening",
    // Add more outdoor ideas
];

// Add event listener to the button to generate a new idea when clicked
document.getElementById('generateIdeaBtn').addEventListener('click', () => {
    const indoorCheckbox = document.getElementById('indoorCheckbox').checked;
    const outdoorCheckbox = document.getElementById('outdoorCheckbox').checked;
    const ideaContainer = document.getElementById('ideaContainer');
    
    let availableIdeas = [];
    if (indoorCheckbox) {
        availableIdeas = availableIdeas.concat(indoorIdeas);
    }
    if (outdoorCheckbox) {
        availableIdeas = availableIdeas.concat(outdoorIdeas);
    }
    
    if (availableIdeas.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableIdeas.length);
        const randomColor = getRandomColor();
        ideaContainer.textContent = availableIdeas[randomIndex];
        ideaContainer.style.color = randomColor;
        ideaContainer.style.opacity = 1;
    } else {
        ideaContainer.textContent = "Please select at least one category.";
        ideaContainer.style.color = "#333";
        ideaContainer.style.opacity = 1;
    }
});

// Function to generate a random hex color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
