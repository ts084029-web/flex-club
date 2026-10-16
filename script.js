
let scene = document.getElementById("scene");
let weight = document.getElementById("weight");

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

let joinBtn = document.getElementById("joinBtn");
let startBtn = document.getElementById("startBtn");

// 1. Mouse se 3D scene move karna

scene.addEventListener("mousemove", function(event) {
    let rect = scene.getBoundingClientRect();

    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let rotateY = (mouseX - centerX) / 15;
    let rotateX = (centerY - mouseY) / 15;

    scene.style.transform =
        "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
});

scene.addEventListener("mouseleave", function() {
    scene.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// 2. Mobile menu open aur close

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// 3. Menu link click karne par menu close

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// 4. Get Started button

startBtn.addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});

// 5. Join Now button

joinBtn.addEventListener("click", function() {
    alert("Welcome to Flex Club! Your fitness journey starts here.");
});
