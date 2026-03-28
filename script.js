// 1. CRACKER BLAST ON LOAD
window.onload = function() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FFD700', '#FF69B4', '#B31B1B']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FFD700', '#FF69B4', '#B31B1B']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

// Smooth reveal animation while scrolling through sections
document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");

    const observer = new IntersectionObserver(
        function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.45,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    pages.forEach(function(page, index) {
        if (index === 0) {
            page.classList.add("is-visible");
        }
        observer.observe(page);
    });
});

// 2. OPEN GOOGLE MAPS (V.S Chellam Century Hall)
function openMap() {
    window.open("https://acesse.one/AM6Zi", "_blank");
}

// 3. COUNTDOWN LOGIC (May 18, 2026, 10:00 AM)
const targetDate = new Date("May 18, 2026 10:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format: DD:HH:MM:SS
    document.getElementById("timer").innerHTML = 
        (days < 10 ? "0" + days : days) + ":" + 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Happening Now!";
    }
}, 1000);