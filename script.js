// Help button handler
const helpButton = document.getElementById('help-button');
helpButton.addEventListener('click', () => {
    alert('How can we help you?');
});

// Smooth scrolling navigation
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Card hover effects
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
});

// Scroll to top button
const scrollToTopButton = document.getElementById('scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
