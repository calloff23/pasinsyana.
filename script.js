// Optional: Add a smooth scrolling effect to the apology text
const apologyText = document.getElementById("apology-text");

setTimeout(() => {
    apologyText.style.transition = "transform 1s ease-in-out";
    apologyText.style.transform = "translateY(0)";
}, 1000);
