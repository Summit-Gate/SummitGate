// JavaScript for auto-rotating tips carousel
let currentIndex = 0;
const tips = document.querySelectorAll('.tip-card');
const totalTips = tips.length;

function showNextTip() {
    tips[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalTips;
    tips[currentIndex].classList.add('active');
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    tips[currentIndex].classList.add('active'); // Show the first tip
    setInterval(showNextTip, 4000); // Change tip every 4 seconds
});
