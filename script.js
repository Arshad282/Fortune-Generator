
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
    "The greatest adventure is the one that lies ahead."
];


let fonts = [
    "Arial, sans-serif",       // Default font
    "Georgia, serif",          // Serif font
    "'Courier New', monospace", // Monospace font
    "'Trebuchet MS', sans-serif", // Sans-serif font
    "Impact, sans-serif"       // Bold font
];


window.onload = function () {
    // Show the first random fortune
    pickAndShowRandomFortune();

    // Add click handler to fortune box
    let fortuneBox = document.getElementById("fortune-box");
    fortuneBox.addEventListener("click", function () {
        pickAndShowRandomFortune();
    });

    // Add click handlers to buttons
    document.getElementById("red-btn").addEventListener("click", function () {
        applyTheme("red");
    });
    document.getElementById("green-btn").addEventListener("click", function () {
        applyTheme("green");
    });
    document.getElementById("blue-btn").addEventListener("click", function () {
        applyTheme("blue");
    });
    document.getElementById("yellow-btn").addEventListener("click", function () {
        applyTheme("yellow");
    });
};

function pickAndShowRandomFortune() {
    let fortuneBox = document.getElementById("fortune-box");
    let randomNumber = Math.floor(Math.random() * fortuneMessages.length);
    let chosenFortune = fortuneMessages[randomNumber];
    fortuneBox.textContent = chosenFortune;
}


function applyTheme(theme) {
    let fortuneBox = document.getElementById("fortune-box");

    switch (theme) {
        case "red":
            fortuneBox.style.backgroundColor = "#ffcccc"; // Light red background
            fortuneBox.style.color = "#990000"; // Dark red text
            fortuneBox.style.borderColor = "#ff6b6b"; // Light red border
            fortuneBox.style.fontFamily = fonts[1]; // Georgia, serif
            break;

        case "green":
            fortuneBox.style.backgroundColor = "#ccffcc"; // Light green background
            fortuneBox.style.color = "#006600"; // Dark green text
            fortuneBox.style.borderColor = "#6bff6b"; // Light green border
            fortuneBox.style.fontFamily = fonts[2]; // Courier New, monospace
            break;

        case "blue":
            fortuneBox.style.backgroundColor = "#ccccff"; // Light blue background
            fortuneBox.style.color = "#000099"; // Dark blue text
            fortuneBox.style.borderColor = "#6b6bff"; // Light blue border
            fortuneBox.style.fontFamily = fonts[3]; // Trebuchet MS, sans-serif
            break;

        case "yellow":
            fortuneBox.style.backgroundColor = "#ffffcc"; // Light yellow background
            fortuneBox.style.color = "#996600"; // Dark yellow/brown text
            fortuneBox.style.borderColor = "#ffff6b"; // Light yellow border
            fortuneBox.style.fontFamily = fonts[4]; // Impact, sans-serif
            break;
    }
}
