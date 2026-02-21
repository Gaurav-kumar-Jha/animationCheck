/* 
  My First Scroll Animation Project 
  Created for Internship/Portfolio
*/

// Registering the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Selecting all the elements I need from the page
const car = document.getElementById("car");
const trail = document.getElementById("trail");
const letters = document.querySelectorAll(".value-letter");
const valueAddBox = document.querySelector(".value-add");

// Getting the position of the "WELCOME" text box
const valueRect = valueAddBox.getBoundingClientRect();
// Storing where each letter is located
const letterOffsets = Array.from(letters).map((letter) => letter.offsetLeft);

// Setting up the car's movement width
const roadWidth = window.innerWidth;
const carWidth = 150;
const finishingPoint = roadWidth - carWidth;

// 1. CAR MOVEMENT ANIMATION
// This makes the car move from left to right as we scroll
gsap.to(car, {
    scrollTrigger: {
        trigger: ".section",
        start: "top top",      // Start when the top of section hits top of screen
        end: "bottom top",     // End when bottom hits top
        scrub: 1,              // Smoothly follows the scroll (1 second lag for smoothness)
        pin: ".track",         // Keeps the road on screen while animating
    },
    x: finishingPoint,
    ease: "none",            // Constant speed
    onUpdate: function () {
        // This part runs every time the car moves
        const currentCarPos = gsap.getProperty(car, "x") + carWidth / 2;

        // Check if car has passed each letter to reveal them
        letters.forEach((letter, index) => {
            const letterPos = valueRect.left + letterOffsets[index];

            if (currentCarPos >= letterPos) {
                letter.style.opacity = 1; // Show letter
            } else {
                letter.style.opacity = 0; // Hide letter (if scrolling back up)
            }
        });

        // Make the green trail follow the car
        gsap.set(trail, { width: currentCarPos });
    },
});

// 2. TEXT BOX REVEALS
// These make the info boxes fade in at different scroll points

// Box 1 reveal
gsap.to("#box1", {
    scrollTrigger: {
        trigger: ".section",
        start: "top+=400 top",
        end: "top+=600 top",
        scrub: true,
    },
    opacity: 1,
});

// Box 2 reveal
gsap.to("#box2", {
    scrollTrigger: {
        trigger: ".section",
        start: "top+=600 top",
        end: "top+=800 top",
        scrub: true,
    },
    opacity: 1,
});

// Box 3 reveal
gsap.to("#box3", {
    scrollTrigger: {
        trigger: ".section",
        start: "top+=800 top",
        end: "top+=1000 top",
        scrub: true,
    },
    opacity: 1,
});

// Box 4 reveal
gsap.to("#box4", {
    scrollTrigger: {
        trigger: ".section",
        start: "top+=1000 top",
        end: "top+=1200 top",
        scrub: true,
    },
    opacity: 1,
});
