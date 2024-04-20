document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.itens');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            const hoverImage = this.dataset.hoverImage;
            this.style.backgroundImage = `url(${hoverImage})`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundImage = 'url(./img/carta_virada.jpg)';
        });

        card.addEventListener('click', function() {
            const originalImage = this.style.backgroundImage;
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.style.backgroundImage = originalImage;
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });
});
