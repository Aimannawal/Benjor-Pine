const cards = document.querySelectorAll('.keunggulan-card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('featured');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('featured');
    });
});
