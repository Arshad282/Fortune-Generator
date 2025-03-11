// ============================
// FORTUNE MESSAGES
// ============================
// This is our collection of fortune messages that will be shown to users
let fortuneMessages = [
    "True wisdom comes not from knowledge, but from understanding.",
    "A journey of a thousand miles begins with a single step.",
    "Your creativity will lead you to great success.",
    "Good things come to those who wait.",
    "The best way to predict the future is to create it.",
    "Your kindness will return to you in unexpected ways.",
    "An exciting opportunity lies ahead of you.",
    "Your hard work will soon pay off.",
    "A smile will get you far in life.",
    "The greatest adventure is the one that lies ahead.",
    "A pleasant surprise is waiting for you.",
    "Your talents will be recognized and rewarded.",
    "Success is a journey, not a destination.",
    "Your positive attitude will lead to success.",
    "A dream you have will come true.",
    "Your next decision will be the right one.",
    "Fortune favors the brave.",
    "The best teacher is experience.",
    "A faithful friend is a strong defense.",
    "Every cloud has a silver lining."
];

// ============================
// STYLE OPTIONS
// ============================
// Colors we'll use to change the fortune box appearance
let simpleColors = [
    // Classic Colors
    "black",       // Default black
    "navy",        // Deep blue
    "darkgreen",   // Forest green
    "darkred",     // Deep red
    "purple",      // Royal purple
    
    // Rich Colors
    "teal",        // Ocean teal
    "maroon",      // Deep maroon
    "indigo",      // Deep indigo
    "crimson",     // Bright red
    "seagreen",    // Rich green
    
    // Jewel Tones
    "mediumvioletred", // Pink ruby
    "darkcyan",    // Blue topaz
    "darkmagenta", // Purple amethyst
    "darkorange",  // Orange citrine
    "darkgoldenrod", // Golden amber
    
    // Earth Tones
    "saddlebrown", // Rich brown
    "olive",       // Olive green
    "sienna",      // Terracotta
    "rosybrown",   // Dusty rose
    "peru"         // Warm tan
];

// Background colors for the page
let backgroundColors = [
    // Soft Pastels
    "#e6f3ff",    // Light blue
    "#fff0e6",    // Light peach
    "#e6ffe6",    // Light mint
    "#ffe6e6",    // Light rose
    "#f0e6ff",    // Light lavender
    
    // Nature Inspired
    "#e6fff0",    // Soft mint
    "#fff6e6",    // Warm cream
    "#e6f0ff",    // Sky blue
    "#ffe6f6",    // Cherry blossom
    "#f2ffe6",    // Spring green
    
    // Subtle Gradients
    "#e6f7ff",    // Ocean mist
    "#ffefe6",    // Sunset glow
    "#e6ffef",    // Morning dew
    "#ffe6eb",    // Pink cloud
    "#f5e6ff",    // Purple haze
    
    // Modern Neutrals
    "#f0f5ff",    // Cool gray
    "#fff5e6",    // Warm beige
    "#e6fff5",    // Icy mint
    "#ffe6ee",    // Soft coral
    "#f8e6ff"     // Gentle violet
];

// Box background colors (lighter versions)
let boxColors = [
    // Light Pastels
    "#f0f8ff",    // Alice blue
    "#fff5ee",    // Seashell
    "#f0fff0",    // Honeydew
    "#fff0f5",    // Lavender blush
    "#f8f8ff",    // Ghost white
    
    // Soft Hues
    "#f0ffff",    // Azure
    "#fffaf0",    // Floral white
    "#f5fffa",    // Mint cream
    "#fdf5e6",    // Old lace
    "#f0f5ff",    // Light sky
    
    // Gentle Tints
    "#e6e6fa",    // Lavender
    "#fff0f5",    // Lavender blush
    "#f5f5dc",    // Beige
    "#faebd7",    // Antique white
    "#e0ffff",    // Light cyan
    
    // Warm Tones
    "#ffefd5",    // Papaya whip
    "#ffe4e1",    // Misty rose
    "#faf0e6",    // Linen
    "#fffafa",    // Snow
    "#f5f5f5"     // White smoke
];

// Different fonts we can use
let fonts = [
    "Arial, sans-serif",
    "Georgia, serif",
    "'Times New Roman', serif",
    "'Courier New', monospace",
    "Verdana, sans-serif",
    "'Trebuchet MS', sans-serif",
    "Impact, sans-serif",
    "'Arial Black', sans-serif",
    "Palatino, serif",
    "'Book Antiqua', serif"
];

// Keep track of which styles we're using
let currentColorNumber = 0;
let currentBackgroundNumber = 0;
let currentBoxNumber = 0;
let currentFontNumber = 0;

// ============================
// STARTUP FUNCTION
// ============================
// This runs when the page first loads
window.onload = function() {
    // Show the first random fortune
    pickAndShowRandomFortune();
    
    // Add click handler to fortune box
    let fortuneBox = document.getElementById("fortune-box");
    fortuneBox.addEventListener("click", function() {
        // Change colors and show new fortune
        changePageBackground();
        changeBoxColor();
        pickAndShowRandomFortune();
    });
}

// ============================
// FORTUNE FUNCTIONS
// ============================
// This function picks and shows a random fortune
function pickAndShowRandomFortune() {
    // 1. Get the fortune box where we'll show the message
    let fortuneBox = document.getElementById("fortune-box");
    
    // 2. Pick a random number between 0 and the number of fortunes we have
    let randomNumber = Math.floor(Math.random() * fortuneMessages.length);
    
    // 3. Get the fortune message at that random position
    let chosenFortune = fortuneMessages[randomNumber];
    
    // 4. Show the fortune in the fortune box
    fortuneBox.textContent = chosenFortune;
}

// This function changes the page background color
function changePageBackground() {
    // 1. Move to next background color
    currentBackgroundNumber = currentBackgroundNumber + 1;
    
    // 2. If we've used all colors, go back to the first one
    if(currentBackgroundNumber >= backgroundColors.length) {
        currentBackgroundNumber = 0;
    }
    
    // 3. Apply the new background color to the body
    document.body.style.backgroundColor = backgroundColors[currentBackgroundNumber];
}

// This function changes the box background color
function changeBoxColor() {
    // 1. Get the fortune box
    let fortuneBox = document.getElementById("fortune-box");
    
    // 2. Move to next box color
    currentBoxNumber = currentBoxNumber + 1;
    
    // 3. If we've used all colors, go back to the first one
    if(currentBoxNumber >= boxColors.length) {
        currentBoxNumber = 0;
    }
    
    // 4. Apply the new box color
    fortuneBox.style.backgroundColor = boxColors[currentBoxNumber];
}

// This function changes the style of the fortune box
function changeStyle(whatToChange) {
    // 1. Get the fortune box
    let fortuneBox = document.getElementById("fortune-box");
    
    // 2. Move to the next color in our list
    currentColorNumber = currentColorNumber + 1;
    
    // 3. If we've used all colors, go back to the first one
    if(currentColorNumber >= simpleColors.length) {
        currentColorNumber = 0;
    }
    
    // 4. Get the color we want to use
    let newColor = simpleColors[currentColorNumber];
    
    // 5. Change the appropriate style based on which button was clicked
    if(whatToChange === "font") {
        // Change the text color
        fortuneBox.style.color = newColor;
    }
    else if(whatToChange === "background") {
        // Change the box color manually
        changeBoxColor();
    }
    else if(whatToChange === "border") {
        // Change the border color
        fortuneBox.style.borderColor = newColor;
    }
    else if(whatToChange === "text") {
        // Change the font family
        currentFontNumber = currentFontNumber + 1;
        if(currentFontNumber >= fonts.length) {
            currentFontNumber = 0;
        }
        fortuneBox.style.fontFamily = fonts[currentFontNumber];
    }
}
