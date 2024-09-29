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
    
    if (sessionStorage.getItem('pageLoaded')) {
        document.body.classList.add('loaded');
        return;
    }

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
                
                sessionStorage.setItem('pageLoaded', 'true');
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