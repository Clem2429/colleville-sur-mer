// SLIDE

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

let autoSlide = setInterval(nextSlide, 4000);

document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 4000);
});

// MAP

function changeIframe(url, activeButtonId) {
    document.getElementById('iframe').src = url;

    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// ACTUALITES

const toggleButton = document.getElementById('toggleButton');
const hiddenBoxes = document.querySelectorAll('.hidden');

toggleButton.addEventListener('click', () => {
    hiddenBoxes.forEach(box => {
        box.classList.toggle('hidden');
    });

    if (toggleButton.innerText === 'Afficher +') {
        toggleButton.innerText = 'Afficher -';
    } else {
        toggleButton.innerText = 'Afficher +';
    }
});

// AGENDA

const buttons = document.querySelectorAll('.month-btn');
const months = document.querySelectorAll('.month-box');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const month = button.getAttribute('data-month');

        months.forEach(box => {
            box.style.display = 'none';
        });

        document.getElementById(month).style.display = 'flex';

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});

// CONTACT

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Affiche la popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.classList.add('show');

    setTimeout(function() {
        popup.classList.remove('show');
        popup.classList.add('hide');
        setTimeout(function() {
            popup.style.display = 'none';
            popup.classList.remove('hide');
        }, 500);
    }, 3000);

    this.reset();
});