// SCROLL INDICATOR

function updateScrollIndicator() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrollPosition = window.scrollY;
    
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    
    document.getElementById("scrollIndicator").style.width = scrollPercentage + "%";
}

window.addEventListener("scroll", updateScrollIndicator);

// NAV

const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}

// GO TOP

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) { 
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Défilement fluide
    });
});

// LOADER

window.addEventListener("load", function() {
    let progressBar = document.getElementById('progress-bar');
    let loader = document.getElementById('loader');
    
    let images = document.querySelectorAll('img');
    let totalElements = images.length;
    let loadedElements = 0;

    function updateProgress() {
        loadedElements++;
        let progress = (loadedElements / totalElements) * 100;
        progressBar.style.width = progress + '%';

        if (loadedElements === totalElements) {
            setTimeout(function() {
                document.body.classList.add('loaded');
            }, 500);
        }
    }

    images.forEach(function(image) {
        if (image.complete) {
            updateProgress();
        } else {
            image.addEventListener('load', updateProgress);
            image.addEventListener('error', updateProgress);
        }
    });
});

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