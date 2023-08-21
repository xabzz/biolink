document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    
    document.body.addEventListener('click', function() {
        backgroundMusic.play();
        document.body.removeEventListener('click', this); // Remove the click listener
    });
});

const texts = ['7teen', 'r xabzong'];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById('typed-text');
const customButtons = document.querySelectorAll('.custom-button');

function type() {
    if (charIndex < texts[index].length) {
        typedText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        // Add class to buttons to remove hover effects
        customButtons.forEach(button => {
            button.classList.add('static-button');
        });
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    }
}

type(); // Start the typing animation

// Show enter page
const enterButton = document.getElementById('enter-button');
const enterPage = document.getElementById('enter-page');
const backgroundMusic = document.getElementById('background-music');

enterButton.addEventListener('click', () => {
    enterPage.style.display = 'none';
    backgroundMusic.pause();
});
