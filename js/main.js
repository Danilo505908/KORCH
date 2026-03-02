// =====================
// Park Section - Filter Tabs
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.park__filter');
    const cards = document.querySelectorAll('.park__card');

    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active tab
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const categories = card.dataset.category;

                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // =====================
    // Phone Input Validation
    // =====================
    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            // Remove any characters that are not numbers or a '+' at the very beginning
            this.value = this.value.replace(/(?!^\+)[^\d]/g, '');
        });
    }

    // =====================
    // Burger Menu Toggle
    // =====================
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('open');
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        menu.querySelectorAll('.menu__link').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
});
