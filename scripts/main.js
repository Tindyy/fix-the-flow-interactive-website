
let text = document.getElementById('text');
let ground = document.getElementById('ground');
let buildings = document.getElementById('buildings');
let buildings2 = document.getElementById('buildings2');
let buildings5 = document.getElementById('buildings3');
let buildings6 = document.getElementById('buildings4');
let moon = document.getElementById('moon');
let trees = document.getElementById('trees');

let lastScrollTop = 0;

window.addEventListener('scroll',() => {
    lastScrollTop = window.scrollY;
})

function updateScrollPosition() {
    let value = window.scrollY;
    let scrollDiff = lastScrollTop - value;

    text.style.transform = `translateY(${value * 2.5}px)`;
    moon.style.transform = `translateY(${scrollDiff * -3.5}px) translateX(${scrollDiff * 3.5}px)`;
    buildings2.style.transform = `translateY(${scrollDiff * 8}px)`;
    buildings5.style.transform = `translateY(${scrollDiff * 12}px)`;
    buildings6.style.transform = `translateY(${scrollDiff * 14}px)`;
    trees.style.transform = `translateY(${scrollDiff * 5}px)`;

    lastScrollTop = value;
}

setInterval(updateScrollPosition, 1000 / 60); // Call the function at 60 FPS